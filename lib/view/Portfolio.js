"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const PortfolioItem_1 = __importDefault(require("../component/PortfolioItem"));
const Layout_1 = __importDefault(require("./Layout"));
class Portfolio {
    constructor() {
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("PORTFOLIO_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".portfolio-view", (0, skydapp_browser_1.el)("h1", "Portfolio"), (0, skydapp_browser_1.el)("section", new PortfolioItem_1.default())));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Portfolio;
//# sourceMappingURL=Portfolio.js.map