import { utils } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import GaiaStableDAOOperatorContract from "../contracts/GaiaStableDAOOperatorContract";
import Layout from "./Layout";


export default class Portfolio implements View {

    private container: DomNode;
    private interestDisplay: DomNode;

    constructor() {
        Layout.current.title = msg("PORTFOLIO_TITLE");
        Layout.current.content.append(this.container = el(".portfolio-view",
            el("h1", "Portfolio"),
            this.interestDisplay = el("p"),
            el("section",
                "아직 이자를 통한 투자가 이루어지지 않았습니다.",
                //new PortfolioItem()
            ),
        ));
        this.loadInterest();
    }

    private async loadInterest() {
        const kusdtInterest = await GaiaStableDAOOperatorContract.claimableInterest();
        const kspInterest = await GaiaStableDAOOperatorContract.claimableKSPReward();
        this.interestDisplay.empty().appendText(`쌓여진 이자: ${utils.formatUnits(kusdtInterest, 6)} KUSDT, ${utils.formatEther(kspInterest)} KSP`);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
