import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import msg from "msg.js";
import Layout from "./Layout";
import PortfolioItem from "../component/PortfolioItem";

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
