import { BigNumber, constants, utils } from "ethers";
import { DomNode, el, msg, Store } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Alert from "../component/shared/dialogue/Alert";
import GaiaKronosContract from "../contracts/GaiaKronosContract";
import GaiaStableDAOContract from "../contracts/GaiaStableDAOContract";
import GaiaStableDAOOperatorContract from "../contracts/GaiaStableDAOOperatorContract";
import GaiaSupernovaContract from "../contracts/GaiaSupernovaContract";
import KUSDTContract from "../contracts/KUSDTContract";
import Wallet from "../klaytn/Wallet";
import Layout from "./Layout";

export default class Buy implements View {

    private container: DomNode;
    private tabType = "public";

    private ticket = 0;
    private price = BigNumber.from(0);
    private count = BigNumber.from(1);

    private kronosTab: DomNode;
    private supernovaTab: DomNode;
    private publicTab: DomNode;

    private totalDisplay: DomNode;
    private ticketDisplay: DomNode;
    private priceDisplay: DomNode;
    private salesDisplay: DomNode;

    private approveButton: DomNode;
    private buyButton: DomNode;

    private tabStore: Store = new Store("tab-store");

    private interval: any;

    constructor() {
        Layout.current.title = msg("BUY_TITLE");
        Layout.current.content.append(this.container = el(".buy-view",
            el("h1", "Buy / Buyback"),
            el("img", { src: "/images/shared/img/img-logo.png", alt: "logo" }),
            el(".selector-container",
                this.salesDisplay = el("p", "SALES: ... EA"),
                this.ticketDisplay = el("p", "TICKET: ... 개"),
                this.priceDisplay = el("p", "PRICE: ... KUSDT"),
                this.totalDisplay = el("p", "TOTAL: ... KUSDT"),
                el(".select",
                    this.kronosTab = el("a.disable", "Kronos", { click: () => this.loadTab("kronos") }),
                    el("hr"),
                    this.supernovaTab = el("a.disable", "Supernova", { click: () => this.loadTab("supernova") }),
                    el("hr"),
                    this.publicTab = el("a.disabled", "Public", { click: () => this.loadTab("public") }),
                ),
            ),
            el(".input-container",
                el("p", "아직 판매중이 아닙니다."),
                el("input", {
                    placeholder: msg("BUY_INPUT"),
                    change: (event, input) => {
                        this.count = BigNumber.from((input.domElement as HTMLInputElement).value);
                        this.loadTotal();
                    },
                }),
                el(".button-container",
                    this.approveButton = el("a.disabled", msg("BUY_APPROVE_BUTTON"), {
                        click: () => KUSDTContract.approve(GaiaStableDAOOperatorContract.address, constants.MaxUint256),
                    }),
                    this.buyButton = el("a.disabled", msg("BUY_NFT_BUTTON"), {
                        click: async () => {
                            let nft = constants.AddressZero;
                            if (this.tabType === "kronos") {
                                nft = GaiaKronosContract.address;
                            }
                            if (this.tabType === "supernova") {
                                nft = GaiaSupernovaContract.address;
                            }
                            if (this.count.toNumber() > 10) {
                                new Alert("오류", "한 번에 최대 10개까지 구매가 가능합니다.");
                            } else if (this.count.toNumber() > this.ticket) {
                                new Alert("오류", `갖고 계신 티켓 개수는 ${this.ticket}개 입니다.`);
                            } else {
                                await GaiaStableDAOOperatorContract.mintStableDAO(this.count, nft);
                                new Alert("구매 성공!", "Gaia Stable DAO 구매에 성공했습니다. 환영합니다!");
                            }
                        },
                    }),
                ),
                el("a.usdt", msg("BUY_USDT_BUTTON"), { href: "https://swapscanner.io/ko/swap?from=0x0000000000000000000000000000000000000000&to=0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167", target: "_blank" }),
            ),
            el(".nft-container",
                el("h2", msg("MY_NFT_TITLE")),
                el("section",
                    // new NftItem(),
                ),
            ),
        ));

        this.interval = setInterval(() => this.loadSales(), 1000);

        if (this.tabStore.get("type") === undefined) {
            this.loadTab("public");
        } else {
            this.loadTab(this.tabStore.get("type") as any);
        }
    }

    private async loadSales() {
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

    private async loadTab(type: "kronos" | "supernova" | "public") {

        this.tabStore.set("type", this.tabType = type);
        this.kronosTab.addClass("disable");
        this.supernovaTab.addClass("disable");
        this.publicTab.addClass("disable");
        this.ticketDisplay.style({ display: "block" });
        this.ticketDisplay.empty();

        this.ticket = 999999;

        if (type === "kronos") {
            this.kronosTab.deleteClass("disable");
            this.price = await GaiaStableDAOOperatorContract.BUYBACKPRICE();
            const address = await Wallet.loadAddress();
            if (address !== undefined) {
                const balance = (await GaiaKronosContract.balanceOf(address)).toNumber();
                const minted = (await GaiaStableDAOOperatorContract.mintedAmountWithGaiaKronos(address)).toNumber();
                this.ticket = balance < minted ? 0 : balance - minted;
                this.ticketDisplay.empty().appendText(`TICKET: ${this.ticket} 개`);
            }
        }
        if (type === "supernova") {
            this.supernovaTab.deleteClass("disable");
            this.price = await GaiaStableDAOOperatorContract.PRICEWITHSUPERNOVA();
            const address = await Wallet.loadAddress();
            if (address !== undefined) {
                const balance = (await GaiaSupernovaContract.balanceOf(address)).toNumber();
                const minted = (await GaiaStableDAOOperatorContract.mintedAmountWithGaiaSupernova(address)).toNumber();
                this.ticket = balance < minted ? 0 : balance - minted;
                this.ticketDisplay.empty().appendText(`TICKET: ${this.ticket} 개`);
            }
        }
        if (type === "public") {
            this.publicTab.deleteClass("disable");
            this.price = await GaiaStableDAOOperatorContract.PUBLICPRICE();
            this.ticketDisplay.style({ display: "none" });
        }

        this.priceDisplay.empty().appendText(`PRICE: ${utils.formatUnits(this.price, 6)} KUSDT`);
        this.loadTotal();
    }

    private async loadTotal() {
        this.totalDisplay.empty().appendText(`TOTAL: ${utils.formatUnits(this.count.mul(this.price), 6)} KUSDT`);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
