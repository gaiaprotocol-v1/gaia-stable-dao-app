import { BigNumber, BigNumberish } from "ethers";
import Config from "../Config";
import GaiaStableDAOOperatorArtifact from "./abi/artifacts/contracts/GaiaStableDAOOperator.sol/GaiaStableDAOOperator.json";
import Contract from "./Contract";

class GaiaStableDAOOperatorContract extends Contract {

    constructor() {
        super(Config.contracts.GaiaStableDAOOperator, GaiaStableDAOOperatorArtifact.abi);
    }

    public async PUBLICPRICE(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("PUBLICPRICE"));
    }

    public async BUYBACKPRICE(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("BUYBACKPRICE"));
    }

    public async PRICEWITHSUPERNOVA(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("PRICEWITHSUPERNOVA"));
    }

    public async mintedAmountWithGaiaKronos(user: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("mintedAmountWithGaiaKronos", user));
    }

    public async mintedAmountWithGaiaSupernova(user: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("mintedAmountWithGaiaSupernova", user));
    }

    public async mintStableDAO(amount: BigNumberish, nft: string): Promise<void> {
        await this.runWalletMethod("mintStableDAO", amount, nft);
    }
}

export default new GaiaStableDAOOperatorContract();
