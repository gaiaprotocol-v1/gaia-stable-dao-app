"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const GaiaStableDAOOperator_json_1 = __importDefault(require("./abi/artifacts/contracts/GaiaStableDAOOperator.sol/GaiaStableDAOOperator.json"));
const Contract_1 = __importDefault(require("./Contract"));
const GaiaStableDAOContract_1 = __importDefault(require("./GaiaStableDAOContract"));
class GaiaStableDAOOperatorContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.GaiaStableDAOOperator, GaiaStableDAOOperator_json_1.default.abi);
    }
    async claimableInterest() {
        return ethers_1.BigNumber.from(await this.runMethod("claimableInterest"));
    }
    async claimableKSPReward() {
        return ethers_1.BigNumber.from(await this.runMethod("claimableKSPReward"));
    }
    async mintedAmountWithGaiaKronos(user) {
        return ethers_1.BigNumber.from(await this.runMethod("mintedAmountWithGaiaKronos", user));
    }
    async mintedAmountWithGaiaSupernova(user) {
        return ethers_1.BigNumber.from(await this.runMethod("mintedAmountWithGaiaSupernova", user));
    }
    async whitelistedAmount(user) {
        return ethers_1.BigNumber.from(await this.runMethod("whitelistedAmount", user));
    }
    async mintStableDAO(amount, nft) {
        await this.runWalletMethod2("mintStableDAO", amount, nft);
    }
    async buyBack(ids) {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            if (await GaiaStableDAOContract_1.default.isApprovedForAll(owner, this.address) !== true) {
                await GaiaStableDAOContract_1.default.setApprovalForAll(this.address, true);
            }
            await this.runWalletMethod("buyBack", ids);
        }
    }
}
exports.default = new GaiaStableDAOOperatorContract();
//# sourceMappingURL=GaiaStableDAOOperatorContract.js.map