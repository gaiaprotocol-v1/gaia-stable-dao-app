import { utils } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import CommonUtil from "../CommonUtil";
import PortfolioItem from "../component/PortfolioItem";
import GaiaStableDAOOperatorContract from "../contracts/GaiaStableDAOOperatorContract";
import MaticContract from "../contracts/MaticContract";
import MeshContract from "../contracts/MeshContract";
import MeshswapUSDCPairLPContract from "../contracts/MeshswapUSDCPairLPContract";
import Layout from "./Layout";


export default class Portfolio implements View {

    private container: DomNode;
    private interestKusdtDisplay: DomNode;
    private interestKrwDisplay: DomNode;

    constructor() {
        Layout.current.title = msg("PORTFOLIO_TITLE");
        Layout.current.content.append(this.container = el(".portfolio-view",
            el("h1", "Portfolio"),
            el("section.interest-container",
                this.interestKusdtDisplay = el("span", "..."),
                this.interestKrwDisplay = el("p"),
            ),
            el("section",
                new PortfolioItem(1, "stepn", "gmt", 3403, 2.67, "₩6,593,031.06 (1938.279905549 GMT)", "2022.05.08 ~ 2022.08.08"),
            ),
        ));
        this.loadInterest();
    }

    private async loadInterest() {
        const balance = await MeshswapUSDCPairLPContract.balanceOf("0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1");
        const miningIndex = await MeshswapUSDCPairLPContract.miningIndex();
        const userLastIndex = await MeshswapUSDCPairLPContract.userLastIndex("0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1");
        const mesh = balance.mul(miningIndex.sub(userLastIndex)).div(utils.parseEther("1"));
        const totalMatic = await MaticContract.balanceOf("0x07a7ab21b582058b71d2aee1b1719926e3451adf");
        const totalMesh = await MeshContract.balanceOf("0x07a7ab21b582058b71d2aee1b1719926e3451adf");
        const result = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network");
        const data = await result.json();
        const price = data[0].current_price * parseFloat(utils.formatEther(totalMatic.mul(utils.parseEther("1")).div(totalMesh)));
        const interest = price * parseFloat(utils.formatEther(mesh));
        const result2 = await fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD");
        const data2 = await result2.json();
        const krw = interest * data2[0].basePrice;
        this.interestKusdtDisplay.empty().appendText(`쌓여진 이자: ${CommonUtil.numberWithCommas(utils.formatEther(mesh))} MESH`);
        this.interestKrwDisplay.empty().appendText(`총 한화: ${CommonUtil.numberWithCommas(String(krw))} 원`);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
