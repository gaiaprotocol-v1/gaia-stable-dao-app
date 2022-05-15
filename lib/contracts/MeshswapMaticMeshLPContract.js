"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ERC20Contract_1 = __importDefault(require("./polygon-standard/ERC20Contract"));
class MeshswapMaticMeshLPContract extends ERC20Contract_1.default {
    constructor() {
        super("0x07a7ab21b582058b71d2aee1b1719926e3451adf", require("./MeshswapUSDCPairLPContractABI.json"), []);
    }
    async miningIndex() {
        return await this.contract.miningIndex();
    }
    async userLastIndex(user) {
        return await this.contract.userLastIndex(user);
    }
}
exports.default = new MeshswapMaticMeshLPContract();
//# sourceMappingURL=MeshswapMaticMeshLPContract.js.map