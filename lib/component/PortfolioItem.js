"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class PortfolioItem extends skydapp_browser_1.DomNode {
    constructor() {
        super(".portfolio-item");
        this.append((0, skydapp_browser_1.el)(".title", this.titleDisplay = (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("PORTFOLIO_ITEM_TITLE")), this.imageDisplay = (0, skydapp_browser_1.el)("img", { src: "/images/shared/img/img-logo.png", alt: "logo" })), (0, skydapp_browser_1.el)(".content", this.desc1Display = (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("PORTFOLIO_ITEM_DESC1")), this.desc2Display = (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("PORTFOLIO_ITEM_DESC2")), this.desc3Display = (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("PORTFOLIO_ITEM_DESC3")), this.desc4Display = (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("PORTFOLIO_ITEM_DESC4")), this.desc5Display = (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("PORTFOLIO_ITEM_DESC5"))), this.claimButton = (0, skydapp_browser_1.el)("button", (0, skydapp_browser_1.msg)("PORTFOLIO_BUTTON")));
    }
    delete() {
        super.delete();
    }
}
exports.default = PortfolioItem;
//# sourceMappingURL=PortfolioItem.js.map