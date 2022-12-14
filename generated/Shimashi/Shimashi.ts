// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class MetaTransactionExecuted extends ethereum.Event {
  get params(): MetaTransactionExecuted__Params {
    return new MetaTransactionExecuted__Params(this);
  }
}

export class MetaTransactionExecuted__Params {
  _event: MetaTransactionExecuted;

  constructor(event: MetaTransactionExecuted) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get relayerAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get functionSignature(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Shimashi extends ethereum.SmartContract {
  static bind(address: Address): Shimashi {
    return new Shimashi("Shimashi", address);
  }

  ERC712_VERSION(): string {
    let result = super.call("ERC712_VERSION", "ERC712_VERSION():(string)", []);

    return result[0].toString();
  }

  try_ERC712_VERSION(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "ERC712_VERSION",
      "ERC712_VERSION():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  _contractURI(): string {
    let result = super.call("_contractURI", "_contractURI():(string)", []);

    return result[0].toString();
  }

  try__contractURI(): ethereum.CallResult<string> {
    let result = super.tryCall("_contractURI", "_contractURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseTokenURI(): string {
    let result = super.call("baseTokenURI", "baseTokenURI():(string)", []);

    return result[0].toString();
  }

  try_baseTokenURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseTokenURI", "baseTokenURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  contractURI(): string {
    let result = super.call("contractURI", "contractURI():(string)", []);

    return result[0].toString();
  }

  try_contractURI(): ethereum.CallResult<string> {
    let result = super.tryCall("contractURI", "contractURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getChainId(): BigInt {
    let result = super.call("getChainId", "getChainId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getChainId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getChainId", "getChainId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getDomainSeperator(): Bytes {
    let result = super.call(
      "getDomainSeperator",
      "getDomainSeperator():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_getDomainSeperator(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getDomainSeperator",
      "getDomainSeperator():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getNonce(user: Address): BigInt {
    let result = super.call("getNonce", "getNonce(address):(uint256)", [
      ethereum.Value.fromAddress(user)
    ]);

    return result[0].toBigInt();
  }

  try_getNonce(user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getNonce", "getNonce(address):(uint256)", [
      ethereum.Value.fromAddress(user)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isSaleActive(): boolean {
    let result = super.call("isSaleActive", "isSaleActive():(bool)", []);

    return result[0].toBoolean();
  }

  try_isSaleActive(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isSaleActive", "isSaleActive():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxFreePerAcc(): BigInt {
    let result = super.call("maxFreePerAcc", "maxFreePerAcc():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxFreePerAcc(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxFreePerAcc",
      "maxFreePerAcc():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxMintPerTx(): BigInt {
    let result = super.call("maxMintPerTx", "maxMintPerTx():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxMintPerTx(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxMintPerTx", "maxMintPerTx():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxMintPerWallet(): BigInt {
    let result = super.call(
      "maxMintPerWallet",
      "maxMintPerWallet():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxMintPerWallet(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxMintPerWallet",
      "maxMintPerWallet():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxSupply(): BigInt {
    let result = super.call("maxSupply", "maxSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSupply", "maxSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mintPriceInWei(): BigInt {
    let result = super.call("mintPriceInWei", "mintPriceInWei():(uint256)", []);

    return result[0].toBigInt();
  }

  try_mintPriceInWei(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintPriceInWei",
      "mintPriceInWei():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(id: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toString();
  }

  try_tokenURI(id: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _proxyRegistryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AirdropCall extends ethereum.Call {
  get inputs(): AirdropCall__Inputs {
    return new AirdropCall__Inputs(this);
  }

  get outputs(): AirdropCall__Outputs {
    return new AirdropCall__Outputs(this);
  }
}

export class AirdropCall__Inputs {
  _call: AirdropCall;

  constructor(call: AirdropCall) {
    this._call = call;
  }

  get tokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get recipients(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class AirdropCall__Outputs {
  _call: AirdropCall;

  constructor(call: AirdropCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BatchMintCall extends ethereum.Call {
  get inputs(): BatchMintCall__Inputs {
    return new BatchMintCall__Inputs(this);
  }

  get outputs(): BatchMintCall__Outputs {
    return new BatchMintCall__Outputs(this);
  }
}

export class BatchMintCall__Inputs {
  _call: BatchMintCall;

  constructor(call: BatchMintCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BatchMintCall__Outputs {
  _call: BatchMintCall;

  constructor(call: BatchMintCall) {
    this._call = call;
  }
}

export class ExecuteMetaTransactionCall extends ethereum.Call {
  get inputs(): ExecuteMetaTransactionCall__Inputs {
    return new ExecuteMetaTransactionCall__Inputs(this);
  }

  get outputs(): ExecuteMetaTransactionCall__Outputs {
    return new ExecuteMetaTransactionCall__Outputs(this);
  }
}

export class ExecuteMetaTransactionCall__Inputs {
  _call: ExecuteMetaTransactionCall;

  constructor(call: ExecuteMetaTransactionCall) {
    this._call = call;
  }

  get userAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get functionSignature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get sigR(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get sigS(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get sigV(): i32 {
    return this._call.inputValues[4].value.toI32();
  }
}

export class ExecuteMetaTransactionCall__Outputs {
  _call: ExecuteMetaTransactionCall;

  constructor(call: ExecuteMetaTransactionCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MintToCall extends ethereum.Call {
  get inputs(): MintToCall__Inputs {
    return new MintToCall__Inputs(this);
  }

  get outputs(): MintToCall__Outputs {
    return new MintToCall__Outputs(this);
  }
}

export class MintToCall__Inputs {
  _call: MintToCall;

  constructor(call: MintToCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class MintToCall__Outputs {
  _call: MintToCall;

  constructor(call: MintToCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseTokenURICall extends ethereum.Call {
  get inputs(): SetBaseTokenURICall__Inputs {
    return new SetBaseTokenURICall__Inputs(this);
  }

  get outputs(): SetBaseTokenURICall__Outputs {
    return new SetBaseTokenURICall__Outputs(this);
  }
}

export class SetBaseTokenURICall__Inputs {
  _call: SetBaseTokenURICall;

  constructor(call: SetBaseTokenURICall) {
    this._call = call;
  }

  get uri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseTokenURICall__Outputs {
  _call: SetBaseTokenURICall;

  constructor(call: SetBaseTokenURICall) {
    this._call = call;
  }
}

export class SetFreePerWalletCall extends ethereum.Call {
  get inputs(): SetFreePerWalletCall__Inputs {
    return new SetFreePerWalletCall__Inputs(this);
  }

  get outputs(): SetFreePerWalletCall__Outputs {
    return new SetFreePerWalletCall__Outputs(this);
  }
}

export class SetFreePerWalletCall__Inputs {
  _call: SetFreePerWalletCall;

  constructor(call: SetFreePerWalletCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFreePerWalletCall__Outputs {
  _call: SetFreePerWalletCall;

  constructor(call: SetFreePerWalletCall) {
    this._call = call;
  }
}

export class SetFreePerWalletPhaseCall extends ethereum.Call {
  get inputs(): SetFreePerWalletPhaseCall__Inputs {
    return new SetFreePerWalletPhaseCall__Inputs(this);
  }

  get outputs(): SetFreePerWalletPhaseCall__Outputs {
    return new SetFreePerWalletPhaseCall__Outputs(this);
  }
}

export class SetFreePerWalletPhaseCall__Inputs {
  _call: SetFreePerWalletPhaseCall;

  constructor(call: SetFreePerWalletPhaseCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFreePerWalletPhaseCall__Outputs {
  _call: SetFreePerWalletPhaseCall;

  constructor(call: SetFreePerWalletPhaseCall) {
    this._call = call;
  }
}

export class SetPublicSaleCall extends ethereum.Call {
  get inputs(): SetPublicSaleCall__Inputs {
    return new SetPublicSaleCall__Inputs(this);
  }

  get outputs(): SetPublicSaleCall__Outputs {
    return new SetPublicSaleCall__Outputs(this);
  }
}

export class SetPublicSaleCall__Inputs {
  _call: SetPublicSaleCall;

  constructor(call: SetPublicSaleCall) {
    this._call = call;
  }

  get toggle(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetPublicSaleCall__Outputs {
  _call: SetPublicSaleCall;

  constructor(call: SetPublicSaleCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
