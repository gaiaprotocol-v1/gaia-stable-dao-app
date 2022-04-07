import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import PortfolioItem from "../component/PortfolioItem";
import Layout from "./Layout";


export default class Portfolio implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = msg("PORTFOLIO_TITLE");
        Layout.current.content.append(this.container = el(".portfolio-view",
            el("h1", "Portfolio"),
            el("section",
                new PortfolioItem()
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
