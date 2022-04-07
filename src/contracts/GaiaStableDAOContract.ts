import { BigNumber } from "ethers";
import Config from "../Config";
import GaiaStableDAOArtifact from "./abi/artifacts/contracts/GaiaStableDAO.sol/GaiaStableDAO.json";
import KIP17Contract from "./standard/KIP17Contract";

class GaiaStableDAOContract extends KIP17Contract {

    constructor() {
        super(Config.contracts.GaiaStableDAO, GaiaStableDAOArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }
}

export default new GaiaStableDAOContract();
