"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("./Layout"));
class BuyMetaverseForum {
    constructor() {
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("BUY_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".buy-view", (0, skydapp_browser_1.el)("h1", "메타포 패스 구매"), (0, skydapp_browser_1.el)("img", { src: "/images/shared/img/img-logo.png", alt: "logo" }), (0, skydapp_browser_1.el)(".selector-container", this.salesDisplay = (0, skydapp_browser_1.el)("p", "SALES: ... EA"), this.ticketDisplay = (0, skydapp_browser_1.el)("p", "TICKET: ... 개"), this.priceDisplay = (0, skydapp_browser_1.el)("p", "PRICE: ... KUSDT")), (0, skydapp_browser_1.el)(".input-container", (0, skydapp_browser_1.el)("input", { placeholder: (0, skydapp_browser_1.msg)("BUY_INPUT") }), (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("a.disabled", (0, skydapp_browser_1.msg)("BUY_APPROVE_BUTTON")), (0, skydapp_browser_1.el)("a", (0, skydapp_browser_1.msg)("BUY_NFT_BUTTON"))), (0, skydapp_browser_1.el)("a.usdt", (0, skydapp_browser_1.msg)("BUY_USDT_BUTTON"), { href: "https://swapscanner.io/ko/swap?from=0x0000000000000000000000000000000000000000&to=0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167", target: "_blank" })), (0, skydapp_browser_1.el)(".nft-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("MY_NFT_TITLE")), (0, skydapp_browser_1.el)("section"))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = BuyMetaverseForum;
//# sourceMappingURL=BuyMetaverseForum.js.map