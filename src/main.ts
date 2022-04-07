import { BrowserInfo, msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import Buy from "./view/Buy";
import BuyMetaverseForum from "./view/BuyMetaverseForum";
import Landing from "./view/Landing";
import Layout from "./view/Layout";
import Portfolio from "./view/Portfolio";

(async () => {

    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout, ["Landing"]);
    SkyRouter.route("", Landing);
    SkyRouter.route("buy", Buy);
    SkyRouter.route("buy-metaverse-forum", BuyMetaverseForum);
    SkyRouter.route("portfolio", Portfolio);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();