import { BigNumber, constants, utils } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import { Debouncer, SkyUtil, View, ViewParams } from "skydapp-common";
import CommonUtil from "../CommonUtil";
import NftItem from "../component/NftItem";
import Alert from "../component/shared/dialogue/Alert";
import GaiaStableDAOContract from "../contracts/GaiaStableDAOContract";
import GaiaStableDAOOperatorContract from "../contracts/GaiaStableDAOOperatorContract";
import KUSDTContract from "../contracts/KUSDTContract";
import Wallet from "../klaytn/Wallet";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Buy implements View {

    private container: DomNode;
    private notice: DomNode;

    private ticket = 0;
    private price = BigNumber.from(0);
    private count = BigNumber.from(1);

    private totalDisplay: DomNode;
    private ticketDisplay: DomNode;
    private priceDisplay: DomNode;
    private salesDisplay: DomNode;

    private approveButton: DomNode;
    private buyButton: DomNode;

    private nftList: DomNode;

    private tokenIds: number[] = [];

    private interval: any;

    constructor() {
        Layout.current.title = msg("BUY_TITLE");
        Layout.current.content.append(this.container = el(".buy-view",
            el("h1", "메타포 패스 구매"),
            el("img", { src: "/images/shared/img/img-logo.png", alt: "logo" }),
            el(".selector-container",
                this.salesDisplay = el("p", "SALES: ... EA"),
                this.ticketDisplay = el("p", "TICKET: ... 개"),
                this.priceDisplay = el("p", "PRICE: ... KUSDT"),
                this.totalDisplay = el("p", "TOTAL: ... KUSDT"),
            ),
            el(".input-container",
                this.notice = el("p"),
                el("input", {
                    placeholder: msg("BUY_INPUT"),
                    change: (event, input) => {
                        this.count = BigNumber.from((input.domElement as HTMLInputElement).value);
                        this.loadTotal();
                    },
                }),
                el(".button-container",
                    this.approveButton = el("a.disabled", msg("BUY_APPROVE_BUTTON"), {
                        click: async () => {
                            const address = await Wallet.loadAddress();
                            if (address !== undefined && (await KUSDTContract.allowance(address, GaiaStableDAOOperatorContract.address)).eq(0)) {
                                await KUSDTContract.approve(GaiaStableDAOOperatorContract.address, constants.MaxUint256);
                            } else {
                                new Alert("오류", "이미 사용 승인 하셨습니다.");
                            }
                        },
                    }),
                    this.buyButton = el("a.disabled", msg("BUY_NFT_BUTTON"), {
                        click: async () => {
                            const address = await Wallet.loadAddress();
                            if (address !== undefined && (await KUSDTContract.allowance(address, GaiaStableDAOOperatorContract.address)).eq(0)) {
                                new Alert("오류", "KUSDT 사용 승인이 필요합니다.");
                            } else if (await GaiaStableDAOContract.isMinter(GaiaStableDAOOperatorContract.address) !== true) {
                                new Alert("오류", "아직 판매중이 아닙니다.");
                            } else {
                                const nft = "0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF";
                                if (this.count.toNumber() > 10) {
                                    new Alert("오류", "한 번에 최대 10개까지 구매가 가능합니다.");
                                } else if (this.count.toNumber() > this.ticket) {
                                    new Alert("오류", `갖고 계신 티켓 개수는 ${this.ticket}개 입니다.`);
                                } else {
                                    await GaiaStableDAOOperatorContract.mintStableDAO(this.count, nft);
                                    new Alert("구매 성공!", "Gaia Stable DAO 구매에 성공했습니다. 환영합니다!");
                                    ViewUtil.waitTransactionAndRefresh();
                                }
                            }
                        },
                    }),
                ),
                el("a.usdt", msg("BUY_USDT_BUTTON"), { href: "https://swapscanner.io/ko/swap?from=0x0000000000000000000000000000000000000000&to=0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167", target: "_blank" }),
            ),
            el(".nft-container",
                el("h2", msg("MY_NFT_TITLE")),
                this.nftList = el("section"),
            ),
        ));

        this.interval = setInterval(() => this.loadSales(), 1000);

        this.loadTab();

        this.loadNFTsDebouncer.run();
        Wallet.on("connect", () => this.loadNFTsDebouncer.run());
    }

    private loadNFTsDebouncer: Debouncer = new Debouncer(200, () => this.loadNFTs());

    private async loadSales() {

        if (await GaiaStableDAOContract.isMinter(GaiaStableDAOOperatorContract.address) !== true) {
            this.notice.empty().appendText("아직 판매중이 아닙니다.");
        } else {
            this.notice.empty().appendText("현재 판매중입니다.");
        }

        const sales = await GaiaStableDAOContract.totalSupply();
        this.salesDisplay.empty().appendText(`SALES: ${sales} EA`);

        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            if ((await KUSDTContract.allowance(address, GaiaStableDAOOperatorContract.address)).eq(0)) {
                this.approveButton.deleteClass("disabled");
                this.buyButton.addClass("disabled");
            } else {
                this.approveButton.addClass("disabled");
                this.buyButton.deleteClass("disabled");
            }
        }
    }

    private async loadTab() {

        this.ticketDisplay.style({ display: "block" });
        this.ticketDisplay.empty();

        this.ticket = 999999;

        this.price = utils.parseUnits("1200", 6);
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            this.ticket = (await GaiaStableDAOOperatorContract.whitelistedAmount(address)).toNumber();
            this.ticketDisplay.empty().appendText(`TICKET: ${this.ticket} 개`);
        }

        this.priceDisplay.empty().appendText(`PRICE: ${CommonUtil.numberWithCommas(utils.formatUnits(this.price, 6))} KUSDT`);
        this.loadTotal();
    }

    private async loadTotal() {
        this.totalDisplay.empty().appendText(`TOTAL: ${CommonUtil.numberWithCommas(utils.formatUnits(this.count.mul(this.price), 6))} KUSDT`);
    }

    private async loadNFTs() {
        this.nftList.empty();
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            const balance = (await GaiaStableDAOContract.balanceOf(address)).toNumber();
            if (balance === 0) {
                this.nftList.append(el("p.empty", "아직 구매하신 Stable DAO가 없습니다."));
            }

            const promises: Promise<void>[] = [];

            this.tokenIds = [];
            SkyUtil.repeat(balance, (i: number) => {
                const promise = async (index: number) => {
                    const item = new NftItem().appendTo(this.nftList);
                    const tokenId = (await GaiaStableDAOContract.tokenOfOwnerByIndex(address, index)).toNumber();
                    if (tokenId === 0) {
                        item.delete();
                    } else {
                        item.init(tokenId);
                        this.tokenIds.push(tokenId);
                    }
                };
                promises.push(promise(i));
            });
            await Promise.all(promises);
        }
        const promises: Promise<void>[] = [];
        await Promise.all(promises);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
