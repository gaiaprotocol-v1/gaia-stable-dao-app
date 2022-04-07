"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const Alert_1 = __importDefault(require("../component/shared/dialogue/Alert"));
const GaiaKronosContract_1 = __importDefault(require("../contracts/GaiaKronosContract"));
const GaiaStableDAOContract_1 = __importDefault(require("../contracts/GaiaStableDAOContract"));
const GaiaStableDAOOperatorContract_1 = __importDefault(require("../contracts/GaiaStableDAOOperatorContract"));
const GaiaSupernovaContract_1 = __importDefault(require("../contracts/GaiaSupernovaContract"));
const KUSDTContract_1 = __importDefault(require("../contracts/KUSDTContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
class Buy {
    constructor() {
        this.tabType = "public";
        this.ticket = 0;
        this.price = ethers_1.BigNumber.from(0);
        this.count = ethers_1.BigNumber.from(1);
        this.tabStore = new skydapp_browser_1.Store("tab-store");
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("BUY_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".buy-view", (0, skydapp_browser_1.el)("h1", "Buy / Buyback"), (0, skydapp_browser_1.el)("img", { src: "/images/shared/img/img-logo.png", alt: "logo" }), (0, skydapp_browser_1.el)(".selector-container", this.salesDisplay = (0, skydapp_browser_1.el)("p", "SALES: ... EA"), this.ticketDisplay = (0, skydapp_browser_1.el)("p", "TICKET: ... 개"), this.priceDisplay = (0, skydapp_browser_1.el)("p", "PRICE: ... KUSDT"), this.totalDisplay = (0, skydapp_browser_1.el)("p", "TOTAL: ... KUSDT"), (0, skydapp_browser_1.el)(".select", this.kronosTab = (0, skydapp_browser_1.el)("a.disable", "Kronos", { click: () => this.loadTab("kronos") }), (0, skydapp_browser_1.el)("hr"), this.supernovaTab = (0, skydapp_browser_1.el)("a.disable", "Supernova", { click: () => this.loadTab("supernova") }), (0, skydapp_browser_1.el)("hr"), this.publicTab = (0, skydapp_browser_1.el)("a.disabled", "Public", { click: () => this.loadTab("public") }))), (0, skydapp_browser_1.el)(".input-container", (0, skydapp_browser_1.el)("p", "아직 판매중이 아닙니다."), (0, skydapp_browser_1.el)("input", {
            placeholder: (0, skydapp_browser_1.msg)("BUY_INPUT"),
            change: (event, input) => {
                this.count = ethers_1.BigNumber.from(input.domElement.value);
                this.loadTotal();
            },
        }), (0, skydapp_browser_1.el)(".button-container", this.approveButton = (0, skydapp_browser_1.el)("a.disabled", (0, skydapp_browser_1.msg)("BUY_APPROVE_BUTTON"), {
            click: () => KUSDTContract_1.default.approve(GaiaStableDAOOperatorContract_1.default.address, ethers_1.constants.MaxUint256),
        }), this.buyButton = (0, skydapp_browser_1.el)("a.disabled", (0, skydapp_browser_1.msg)("BUY_NFT_BUTTON"), {
            click: async () => {
                let nft = ethers_1.constants.AddressZero;
                if (this.tabType === "kronos") {
                    nft = GaiaKronosContract_1.default.address;
                }
                if (this.tabType === "supernova") {
                    nft = GaiaSupernovaContract_1.default.address;
                }
                if (this.count.toNumber() > 10) {
                    new Alert_1.default("오류", "한 번에 최대 10개까지 구매가 가능합니다.");
                }
                else if (this.count.toNumber() > this.ticket) {
                    new Alert_1.default("오류", `갖고 계신 티켓 개수는 ${this.ticket}개 입니다.`);
                }
                else {
                    await GaiaStableDAOOperatorContract_1.default.mintStableDAO(this.count, nft);
                    new Alert_1.default("구매 성공!", "Gaia Stable DAO 구매에 성공했습니다. 환영합니다!");
                }
            },
        })), (0, skydapp_browser_1.el)("a.usdt", (0, skydapp_browser_1.msg)("BUY_USDT_BUTTON"), { href: "https://swapscanner.io/ko/swap?from=0x0000000000000000000000000000000000000000&to=0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167", target: "_blank" })), (0, skydapp_browser_1.el)(".nft-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("MY_NFT_TITLE")), (0, skydapp_browser_1.el)("section"))));
        this.interval = setInterval(() => this.loadSales(), 1000);
        if (this.tabStore.get("type") === undefined) {
            this.loadTab("public");
        }
        else {
            this.loadTab(this.tabStore.get("type"));
        }
    }
    async loadSales() {
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
    async loadTab(type) {
        this.tabStore.set("type", this.tabType = type);
        this.kronosTab.addClass("disable");
        this.supernovaTab.addClass("disable");
        this.publicTab.addClass("disable");
        this.ticketDisplay.style({ display: "block" });
        this.ticketDisplay.empty();
        this.ticket = 999999;
        if (type === "kronos") {
            this.kronosTab.deleteClass("disable");
            this.price = await GaiaStableDAOOperatorContract_1.default.BUYBACKPRICE();
            const address = await Wallet_1.default.loadAddress();
            if (address !== undefined) {
                const balance = (await GaiaKronosContract_1.default.balanceOf(address)).toNumber();
                const minted = (await GaiaStableDAOOperatorContract_1.default.mintedAmountWithGaiaKronos(address)).toNumber();
                this.ticket = balance < minted ? 0 : balance - minted;
                this.ticketDisplay.empty().appendText(`TICKET: ${this.ticket} 개`);
            }
        }
        if (type === "supernova") {
            this.supernovaTab.deleteClass("disable");
            this.price = await GaiaStableDAOOperatorContract_1.default.PRICEWITHSUPERNOVA();
            const address = await Wallet_1.default.loadAddress();
            if (address !== undefined) {
                const balance = (await GaiaSupernovaContract_1.default.balanceOf(address)).toNumber();
                const minted = (await GaiaStableDAOOperatorContract_1.default.mintedAmountWithGaiaSupernova(address)).toNumber();
                this.ticket = balance < minted ? 0 : balance - minted;
                this.ticketDisplay.empty().appendText(`TICKET: ${this.ticket} 개`);
            }
        }
        if (type === "public") {
            this.publicTab.deleteClass("disable");
            this.price = await GaiaStableDAOOperatorContract_1.default.PUBLICPRICE();
            this.ticketDisplay.style({ display: "none" });
        }
        this.priceDisplay.empty().appendText(`PRICE: ${ethers_1.utils.formatUnits(this.price, 6)} KUSDT`);
        this.loadTotal();
    }
    async loadTotal() {
        this.totalDisplay.empty().appendText(`TOTAL: ${ethers_1.utils.formatUnits(this.count.mul(this.price), 6)} KUSDT`);
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Buy;
//# sourceMappingURL=Buy.js.map