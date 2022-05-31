"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const PortfolioItem_1 = __importDefault(require("../component/PortfolioItem"));
const MaticContract_1 = __importDefault(require("../contracts/MaticContract"));
const MeshContract_1 = __importDefault(require("../contracts/MeshContract"));
const MeshswapUSDCPairLPContract_1 = __importDefault(require("../contracts/MeshswapUSDCPairLPContract"));
const Layout_1 = __importDefault(require("./Layout"));
class Portfolio {
    constructor() {
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("PORTFOLIO_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".portfolio-view", (0, skydapp_browser_1.el)("h1", "Portfolio"), (0, skydapp_browser_1.el)("section.interest-container", this.interestMeshDisplay = (0, skydapp_browser_1.el)("span", "..."), this.interestKrwDisplay = (0, skydapp_browser_1.el)("p")), (0, skydapp_browser_1.el)("section", new PortfolioItem_1.default(1, "stepn", "gmt", 3403, 2.67, "₩6,593,031.06 (1938.279905549 GMT)", "2022.05.08 ~ 2022.08.08"))));
        this.loadInterest();
    }
    async loadInterest() {
        const balance = await MeshswapUSDCPairLPContract_1.default.balanceOf("0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1");
        const miningIndex = await MeshswapUSDCPairLPContract_1.default.miningIndex();
        const userLastIndex = await MeshswapUSDCPairLPContract_1.default.userLastIndex("0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1");
        const mesh = balance.mul(miningIndex.sub(userLastIndex)).div(ethers_1.utils.parseEther("1"));
        const totalMatic = await MaticContract_1.default.balanceOf("0x07a7ab21b582058b71d2aee1b1719926e3451adf");
        const totalMesh = await MeshContract_1.default.balanceOf("0x07a7ab21b582058b71d2aee1b1719926e3451adf");
        const result = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network");
        const data = await result.json();
        const price = data[0].current_price * parseFloat(ethers_1.utils.formatEther(totalMatic.mul(ethers_1.utils.parseEther("1")).div(totalMesh)));
        const interest = price * parseFloat(ethers_1.utils.formatEther(mesh));
        const result2 = await fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD");
        const data2 = await result2.json();
        const krw = interest * data2[0].basePrice;
        this.interestMeshDisplay.empty().appendText(`쌓여진 이자: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(mesh))} MESH`);
        this.interestKrwDisplay.empty().appendText(`총 한화: ${CommonUtil_1.default.numberWithCommas(String(krw))} 원`);
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Portfolio;
//# sourceMappingURL=Portfolio.js.map