import { SkyRouter } from "skyrouter";
import msg from "msg.js";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import Layout from "./view/Layout";
import Landing from "./view/Landing";
import Buy from "./view/Buy";
import Portfolio from "./view/Portfolio";

(async () => {

    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout, ["Landing"]);
    SkyRouter.route("", Landing);
    SkyRouter.route("buy", Buy);
    SkyRouter.route("portfolio", Portfolio);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();