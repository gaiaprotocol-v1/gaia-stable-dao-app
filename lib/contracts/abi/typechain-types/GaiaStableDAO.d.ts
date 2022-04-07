import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GaiaStableDAOInterface extends utils.Interface {
    contractName: "GaiaStableDAO";
    functions: {
        "addMinter(address)": FunctionFragment;
        "addPauser(address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "baseURI()": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "exists(uint256)": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isBlacklist(address)": FunctionFragment;
        "isBurnable()": FunctionFragment;
        "isMintable()": FunctionFragment;
        "isMinter(address)": FunctionFragment;
        "isOwner()": FunctionFragment;
        "isPauser(address)": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "mintedAtBlock(uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "renounceMinter()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "renouncePauser()": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setBaseURI(string)": FunctionFragment;
        "setBlacklist(address,bool)": FunctionFragment;
        "setBurnable(bool)": FunctionFragment;
        "setMintable(bool)": FunctionFragment;
        "setName(string)": FunctionFragment;
        "setSymbol(string)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "tokensOfOwner(address)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addMinter", values: [string]): string;
    encodeFunctionData(functionFragment: "addPauser", values: [string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "exists", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isBlacklist", values: [string]): string;
    encodeFunctionData(functionFragment: "isBurnable", values?: undefined): string;
    encodeFunctionData(functionFragment: "isMintable", values?: undefined): string;
    encodeFunctionData(functionFragment: "isMinter", values: [string]): string;
    encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPauser", values: [string]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintedAtBlock", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceMinter", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renouncePauser", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string;
    encodeFunctionData(functionFragment: "setBlacklist", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setBurnable", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setMintable", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setName", values: [string]): string;
    encodeFunctionData(functionFragment: "setSymbol", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenOfOwnerByIndex", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokensOfOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBurnable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMintable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintedAtBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renouncePauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBurnable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMintable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSymbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenOfOwnerByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensOfOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "MinterAdded(address)": EventFragment;
        "MinterRemoved(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "PauserAdded(address)": EventFragment;
        "PauserRemoved(address)": EventFragment;
        "SetBaseURI(string)": EventFragment;
        "SetBlacklist(address,bool)": EventFragment;
        "SetBurnable(bool)": EventFragment;
        "SetMintable(bool)": EventFragment;
        "SetName(string)": EventFragment;
        "SetSymbol(string)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinterAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinterRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetBaseURI"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetBlacklist"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetBurnable"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMintable"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetName"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetSymbol"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], {
    owner: string;
    operator: string;
    approved: boolean;
}>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export declare type MinterAddedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type MinterAddedEventFilter = TypedEventFilter<MinterAddedEvent>;
export declare type MinterRemovedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type MinterRemovedEventFilter = TypedEventFilter<MinterRemovedEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type PauserAddedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PauserAddedEventFilter = TypedEventFilter<PauserAddedEvent>;
export declare type PauserRemovedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PauserRemovedEventFilter = TypedEventFilter<PauserRemovedEvent>;
export declare type SetBaseURIEvent = TypedEvent<[string], {
    baseURI: string;
}>;
export declare type SetBaseURIEventFilter = TypedEventFilter<SetBaseURIEvent>;
export declare type SetBlacklistEvent = TypedEvent<[
    string,
    boolean
], {
    user: string;
    status: boolean;
}>;
export declare type SetBlacklistEventFilter = TypedEventFilter<SetBlacklistEvent>;
export declare type SetBurnableEvent = TypedEvent<[boolean], {
    status: boolean;
}>;
export declare type SetBurnableEventFilter = TypedEventFilter<SetBurnableEvent>;
export declare type SetMintableEvent = TypedEvent<[boolean], {
    status: boolean;
}>;
export declare type SetMintableEventFilter = TypedEventFilter<SetMintableEvent>;
export declare type SetNameEvent = TypedEvent<[string], {
    name: string;
}>;
export declare type SetNameEventFilter = TypedEventFilter<SetNameEvent>;
export declare type SetSymbolEvent = TypedEvent<[string], {
    symbol: string;
}>;
export declare type SetSymbolEventFilter = TypedEventFilter<SetSymbolEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    tokenId: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface GaiaStableDAO extends BaseContract {
    contractName: "GaiaStableDAO";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GaiaStableDAOInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        baseURI(overrides?: CallOverrides): Promise<[string]>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        isBlacklist(user: string, overrides?: CallOverrides): Promise<[boolean]>;
        isBurnable(overrides?: CallOverrides): Promise<[boolean]>;
        isMintable(overrides?: CallOverrides): Promise<[boolean]>;
        isMinter(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isOwner(overrides?: CallOverrides): Promise<[boolean]>;
        isPauser(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        mint(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintedAtBlock(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            blockNumber: BigNumber;
        }>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(to: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBaseURI(_baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBlacklist(user: string, status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBurnable(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMintable(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setName(_name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSymbol(_symbol: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        tokensOfOwner(owner: string, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addMinter(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addPauser(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    baseURI(overrides?: CallOverrides): Promise<string>;
    burn(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    isBlacklist(user: string, overrides?: CallOverrides): Promise<boolean>;
    isBurnable(overrides?: CallOverrides): Promise<boolean>;
    isMintable(overrides?: CallOverrides): Promise<boolean>;
    isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;
    isOwner(overrides?: CallOverrides): Promise<boolean>;
    isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;
    mint(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintedAtBlock(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    renounceMinter(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renouncePauser(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(to: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBaseURI(_baseURI: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBlacklist(user: string, status: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBurnable(status: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMintable(status: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setName(_name: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSymbol(_symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    tokensOfOwner(owner: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addMinter(account: string, overrides?: CallOverrides): Promise<void>;
        addPauser(account: string, overrides?: CallOverrides): Promise<void>;
        approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        baseURI(overrides?: CallOverrides): Promise<string>;
        burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        isBlacklist(user: string, overrides?: CallOverrides): Promise<boolean>;
        isBurnable(overrides?: CallOverrides): Promise<boolean>;
        isMintable(overrides?: CallOverrides): Promise<boolean>;
        isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;
        isOwner(overrides?: CallOverrides): Promise<boolean>;
        isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;
        mint(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        mintedAtBlock(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        renounceMinter(overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        renouncePauser(overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(to: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setBaseURI(_baseURI: string, overrides?: CallOverrides): Promise<void>;
        setBlacklist(user: string, status: boolean, overrides?: CallOverrides): Promise<void>;
        setBurnable(status: boolean, overrides?: CallOverrides): Promise<void>;
        setMintable(status: boolean, overrides?: CallOverrides): Promise<void>;
        setName(_name: string, overrides?: CallOverrides): Promise<void>;
        setSymbol(_symbol: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        tokensOfOwner(owner: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "MinterAdded(address)"(account?: string | null): MinterAddedEventFilter;
        MinterAdded(account?: string | null): MinterAddedEventFilter;
        "MinterRemoved(address)"(account?: string | null): MinterRemovedEventFilter;
        MinterRemoved(account?: string | null): MinterRemovedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "PauserAdded(address)"(account?: string | null): PauserAddedEventFilter;
        PauserAdded(account?: string | null): PauserAddedEventFilter;
        "PauserRemoved(address)"(account?: string | null): PauserRemovedEventFilter;
        PauserRemoved(account?: string | null): PauserRemovedEventFilter;
        "SetBaseURI(string)"(baseURI?: null): SetBaseURIEventFilter;
        SetBaseURI(baseURI?: null): SetBaseURIEventFilter;
        "SetBlacklist(address,bool)"(user?: null, status?: null): SetBlacklistEventFilter;
        SetBlacklist(user?: null, status?: null): SetBlacklistEventFilter;
        "SetBurnable(bool)"(status?: null): SetBurnableEventFilter;
        SetBurnable(status?: null): SetBurnableEventFilter;
        "SetMintable(bool)"(status?: null): SetMintableEventFilter;
        SetMintable(status?: null): SetMintableEventFilter;
        "SetName(string)"(name?: null): SetNameEventFilter;
        SetName(name?: null): SetNameEventFilter;
        "SetSymbol(string)"(symbol?: null): SetSymbolEventFilter;
        SetSymbol(symbol?: null): SetSymbolEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        baseURI(overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        isBlacklist(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        isBurnable(overrides?: CallOverrides): Promise<BigNumber>;
        isMintable(overrides?: CallOverrides): Promise<BigNumber>;
        isMinter(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(overrides?: CallOverrides): Promise<BigNumber>;
        isPauser(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintedAtBlock(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(to: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBaseURI(_baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBlacklist(user: string, status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBurnable(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMintable(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setName(_name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSymbol(_symbol: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokensOfOwner(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBlacklist(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBurnable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isMintable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isMinter(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPauser(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintedAtBlock(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(to: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBaseURI(_baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBlacklist(user: string, status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBurnable(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMintable(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setName(_name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSymbol(_symbol: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokensOfOwner(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=GaiaStableDAO.d.ts.map