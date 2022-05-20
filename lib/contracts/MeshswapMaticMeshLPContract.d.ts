import { BigNumber } from "ethers";
import { ERC20 } from "./polygon-abi/typechain";
import ERC20Contract from "./polygon-standard/ERC20Contract";
declare class MeshswapMaticMeshLPContract extends ERC20Contract<ERC20> {
    constructor();
    miningIndex(): Promise<BigNumber>;
    userLastIndex(user: string): Promise<BigNumber>;
}
declare const _default: MeshswapMaticMeshLPContract;
export default _default;
//# sourceMappingURL=MeshswapMaticMeshLPContract.d.ts.map