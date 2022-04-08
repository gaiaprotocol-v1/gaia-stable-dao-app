"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const NftItem_1 = __importDefault(require("../component/NftItem"));
const Alert_1 = __importDefault(require("../component/shared/dialogue/Alert"));
const GaiaStableDAOContract_1 = __importDefault(require("../contracts/GaiaStableDAOContract"));
const GaiaStableDAOOperatorContract_1 = __importDefault(require("../contracts/GaiaStableDAOOperatorContract"));
const KUSDTContract_1 = __importDefault(require("../contracts/KUSDTContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Buy {
    constructor() {
        this.ticket = 0;
        this.price = ethers_1.BigNumber.from(0);
        this.count = ethers_1.BigNumber.from(1);
        this.tokenIds = [];
        this.loadNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadNFTs());
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("BUY_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".buy-view", (0, skydapp_browser_1.el)("h1", "메타포 패스 구매"), (0, skydapp_browser_1.el)("img", { src: "/images/shared/img/img-logo.png", alt: "logo" }), (0, skydapp_browser_1.el)(".selector-container", this.salesDisplay = (0, skydapp_browser_1.el)("p", "SALES: ... EA"), this.ticketDisplay = (0, skydapp_browser_1.el)("p", "TICKET: ... 개"), this.priceDisplay = (0, skydapp_browser_1.el)("p", "PRICE: ... KUSDT"), this.totalDisplay = (0, skydapp_browser_1.el)("p", "TOTAL: ... KUSDT")), (0, skydapp_browser_1.el)(".input-container", this.notice = (0, skydapp_browser_1.el)("p"), (0, skydapp_browser_1.el)("input", {
            placeholder: (0, skydapp_browser_1.msg)("BUY_INPUT"),
            change: (event, input) => {
                this.count = ethers_1.BigNumber.from(input.domElement.value);
                this.loadTotal();
            },
        }), (0, skydapp_browser_1.el)(".button-container", this.approveButton = (0, skydapp_browser_1.el)("a.disabled", (0, skydapp_browser_1.msg)("BUY_APPROVE_BUTTON"), {
            click: async () => {
                const address = await Wallet_1.default.loadAddress();
                if (address !== undefined && (await KUSDTContract_1.default.allowance(address, GaiaStableDAOOperatorContract_1.default.address)).eq(0)) {
                    await KUSDTContract_1.default.approve(GaiaStableDAOOperatorContract_1.default.address, ethers_1.constants.MaxUint256);
                }
                else {
                    new Alert_1.default("오류", "이미 사용 승인 하셨습니다.");
                }
            },
        }), this.buyButton = (0, skydapp_browser_1.el)("a.disabled", (0, skydapp_browser_1.msg)("BUY_NFT_BUTTON"), {
            click: async () => {
                const address = await Wallet_1.default.loadAddress();
                if (address !== undefined && (await KUSDTContract_1.default.allowance(address, GaiaStableDAOOperatorContract_1.default.address)).eq(0)) {
                    new Alert_1.default("오류", "KUSDT 사용 승인이 필요합니다.");
                }
                else if (await GaiaStableDAOContract_1.default.isMinter(GaiaStableDAOOperatorContract_1.default.address) !== true) {
                    new Alert_1.default("오류", "아직 판매중이 아닙니다.");
                }
                else {
                    const nft = "0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF";
                    if (this.count.toNumber() > 10) {
                        new Alert_1.default("오류", "한 번에 최대 10개까지 구매가 가능합니다.");
                    }
                    else if (this.count.toNumber() > this.ticket) {
                        new Alert_1.default("오류", `갖고 계신 티켓 개수는 ${this.ticket}개 입니다.`);
                    }
                    else {
                        await GaiaStableDAOOperatorContract_1.default.mintStableDAO(this.count, nft);
                        new Alert_1.default("구매 성공!", "Gaia Stable DAO 구매에 성공했습니다. 환영합니다!");
                        ViewUtil_1.default.waitTransactionAndRefresh();
                    }
                }
            },
        })), (0, skydapp_browser_1.el)("a.usdt", (0, skydapp_browser_1.msg)("BUY_USDT_BUTTON"), { href: "https://swapscanner.io/ko/swap?from=0x0000000000000000000000000000000000000000&to=0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167", target: "_blank" })), (0, skydapp_browser_1.el)(".nft-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("MY_NFT_TITLE")), this.nftList = (0, skydapp_browser_1.el)("section"))));
        this.interval = setInterval(() => this.loadSales(), 1000);
        this.loadTab();
        this.loadNFTsDebouncer.run();
        Wallet_1.default.on("connect", () => this.loadNFTsDebouncer.run());
    }
    async loadSales() {
        if (await GaiaStableDAOContract_1.default.isMinter(GaiaStableDAOOperatorContract_1.default.address) !== true) {
            this.notice.empty().appendText("아직 판매중이 아닙니다.");
        }
        else {
            this.notice.empty().appendText("현재 판매중입니다.");
        }
        const sales = await GaiaStableDAOContract_1.default.totalSupply();
        this.salesDisplay.empty().appendText(`SALES: ${sales} EA`);
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            if ((await KUSDTContract_1.default.allowance(address, GaiaStableDAOOperatorContract_1.default.address)).eq(0)) {
                this.approveButton.deleteClass("disabled");
                this.buyButton.addClass("disabled");
            }
            else {
                this.approveButton.addClass("disabled");
                this.buyButton.deleteClass("disabled");
            }
        }
    }
    async loadTab() {
        this.ticketDisplay.style({ display: "block" });
        this.ticketDisplay.empty();
        this.ticket = 999999;
        this.price = ethers_1.utils.parseUnits("1200", 6);
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            this.ticket = (await GaiaStableDAOOperatorContract_1.default.whitelistedAmount(address)).toNumber();
            this.ticketDisplay.empty().appendText(`TICKET: ${this.ticket} 개`);
        }
        this.priceDisplay.empty().appendText(`PRICE: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatUnits(this.price, 6))} KUSDT`);
        this.loadTotal();
    }
    async loadTotal() {
        this.totalDisplay.empty().appendText(`TOTAL: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatUnits(this.count.mul(this.price), 6))} KUSDT`);
    }
    async loadNFTs() {
        this.nftList.empty();
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const balance = (await GaiaStableDAOContract_1.default.balanceOf(address)).toNumber();
            if (balance === 0) {
                this.nftList.append((0, skydapp_browser_1.el)("p.empty", "아직 구매하신 Stable DAO가 없습니다."));
            }
            const promises = [];
            this.tokenIds = [];
            skydapp_common_1.SkyUtil.repeat(balance, (i) => {
                const promise = async (index) => {
                    const item = new NftItem_1.default().appendTo(this.nftList);
                    const tokenId = (await GaiaStableDAOContract_1.default.tokenOfOwnerByIndex(address, index)).toNumber();
                    if (tokenId === 0) {
                        item.delete();
                    }
                    else {
                        item.init(tokenId);
                        this.tokenIds.push(tokenId);
                    }
                };
                promises.push(promise(i));
            });
            await Promise.all(promises);
        }
        const promises = [];
        await Promise.all(promises);
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Buy;
//# sourceMappingURL=BuyMetaverseForum.js.map