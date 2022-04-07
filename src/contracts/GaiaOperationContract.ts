import Config from "../Config";
import GaiaStableDAOOperatorArtifact from "./abi/artifacts/contracts/GaiaStableDAOOperator.sol/GaiaStableDAOOperator.json";
import Contract from "./Contract";

class GaiaStableDAOOperatorContract extends Contract {

    constructor() {
        super(Config.contracts.GaiaStableDAOOperator, GaiaStableDAOOperatorArtifact.abi);
    }

}

export default new GaiaStableDAOOperatorContract();
