"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const GaiaStableDAOOperator_json_1 = __importDefault(require("./abi/artifacts/contracts/GaiaStableDAOOperator.sol/GaiaStableDAOOperator.json"));
const Contract_1 = __importDefault(require("./Contract"));
class GaiaStableDAOOperatorContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.GaiaStableDAOOperator, GaiaStableDAOOperator_json_1.default.abi);
    }
    async PUBLICPRICE() {
        return ethers_1.BigNumber.from(await this.runMethod("PUBLICPRICE"));
    }
    async BUYBACKPRICE() {
        return ethers_1.BigNumber.from(await this.runMethod("BUYBACKPRICE"));
    }
    async PRICEWITHSUPERNOVA() {
        return ethers_1.BigNumber.from(await this.runMethod("PRICEWITHSUPERNOVA"));
    }
    async mintedAmountWithGaiaKronos(user) {
        return ethers_1.BigNumber.from(await this.runMethod("mintedAmountWithGaiaKronos", user));
    }
    async mintedAmountWithGaiaSupernova(user) {
        return ethers_1.BigNumber.from(await this.runMethod("mintedAmountWithGaiaSupernova", user));
    }
    async mintStableDAO(amount, nft) {
        await this.runWalletMethod("mintStableDAO", amount, nft);
    }
}
exports.default = new GaiaStableDAOOperatorContract();
//# sourceMappingURL=GaiaStableDAOOperatorContract.js.map