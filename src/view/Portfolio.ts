import { utils } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import CommonUtil from "../CommonUtil";
import GaiaStableDAOOperatorContract from "../contracts/GaiaStableDAOOperatorContract";
import Layout from "./Layout";


export default class Portfolio implements View {

    private container: DomNode;
    private interestKspDisplay: DomNode;
    private interestKusdtDisplay: DomNode;
    private interestKrwDisplay: DomNode;

    constructor() {
        Layout.current.title = msg("PORTFOLIO_TITLE");
        Layout.current.content.append(this.container = el(".portfolio-view",
            el("h1", "Portfolio"),
            el("section.interest-container",
                this.interestKusdtDisplay = el("span", "..."),
                this.interestKspDisplay = el("span.ksp"),
                this.interestKrwDisplay = el("p"),
            ),
            el("section",
                el("h2", "아직 이자를 통한 투자가 이루어지지 않았습니다."),
                //new PortfolioItem()
            ),
        ));
        this.loadInterest();
    }

    private async loadInterest() {
        const kusdtInterest = await GaiaStableDAOOperatorContract.claimableInterest();
        const kspInterest = await GaiaStableDAOOperatorContract.claimableKSPReward();
        const result = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=klayswap-protocol");
        const data = await result.json();
        const dollar = parseInt(utils.formatUnits(kusdtInterest, 6), 10) + data[0].current_price * parseInt(utils.formatEther(kspInterest), 10);
        const result2 = await fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD");
        const data2 = await result2.json();
        const krw = dollar * data2[0].basePrice;
        this.interestKusdtDisplay.empty().appendText(`쌓여진 이자: ${CommonUtil.numberWithCommas(utils.formatUnits(kusdtInterest, 6))} KUSDT`);
        this.interestKrwDisplay.empty().appendText(`총 한화: ${CommonUtil.numberWithCommas(String(krw))} 원`);
        this.interestKspDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatEther(kspInterest))} KSP`);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
