/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  EncodedAccount,
  FetchAccountConfig,
  FetchAccountsConfig,
  assertAccountExists,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
} from '@solana/accounts';
import {
  Address,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import {
  CandyMachineData,
  CandyMachineDataArgs,
  getCandyMachineDataDecoder,
  getCandyMachineDataEncoder,
} from '../types';

export type CandyMachine<TAddress extends string = string> = Account<
  CandyMachineAccountData,
  TAddress
>;

export type CandyMachineAccountData = {
  discriminator: Array<number>;
  /** Features versioning flags. */
  features: bigint;
  /** Authority address. */
  authority: Address;
  /** Authority address allowed to mint from the candy machine. */
  mintAuthority: Address;
  /** The collection mint for the candy machine. */
  collectionMint: Address;
  /** Number of assets redeemed. */
  itemsRedeemed: bigint;
  /** Candy machine configuration data. */
  data: CandyMachineData;
};

export type CandyMachineAccountDataArgs = {
  /** Features versioning flags. */
  features: number | bigint;
  /** Authority address. */
  authority: Address;
  /** Authority address allowed to mint from the candy machine. */
  mintAuthority: Address;
  /** The collection mint for the candy machine. */
  collectionMint: Address;
  /** Number of assets redeemed. */
  itemsRedeemed: number | bigint;
  /** Candy machine configuration data. */
  data: CandyMachineDataArgs;
};

export function getCandyMachineAccountDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: Array<number>;
      /** Features versioning flags. */
      features: number | bigint;
      /** Authority address. */
      authority: Address;
      /** Authority address allowed to mint from the candy machine. */
      mintAuthority: Address;
      /** The collection mint for the candy machine. */
      collectionMint: Address;
      /** Number of assets redeemed. */
      itemsRedeemed: number | bigint;
      /** Candy machine configuration data. */
      data: CandyMachineDataArgs;
    }>([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['features', getU64Encoder()],
      ['authority', getAddressEncoder()],
      ['mintAuthority', getAddressEncoder()],
      ['collectionMint', getAddressEncoder()],
      ['itemsRedeemed', getU64Encoder()],
      ['data', getCandyMachineDataEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: [51, 173, 177, 113, 25, 241, 109, 189],
    })
  ) satisfies Encoder<CandyMachineAccountDataArgs>;
}

export function getCandyMachineAccountDataDecoder() {
  return getStructDecoder<CandyMachineAccountData>([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['features', getU64Decoder()],
    ['authority', getAddressDecoder()],
    ['mintAuthority', getAddressDecoder()],
    ['collectionMint', getAddressDecoder()],
    ['itemsRedeemed', getU64Decoder()],
    ['data', getCandyMachineDataDecoder()],
  ]) satisfies Decoder<CandyMachineAccountData>;
}

export function getCandyMachineAccountDataCodec(): Codec<
  CandyMachineAccountDataArgs,
  CandyMachineAccountData
> {
  return combineCodec(
    getCandyMachineAccountDataEncoder(),
    getCandyMachineAccountDataDecoder()
  );
}

export function decodeCandyMachine<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): CandyMachine<TAddress> {
  return decodeAccount(encodedAccount, getCandyMachineAccountDataDecoder());
}

export async function fetchCandyMachine<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<CandyMachine<TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  assertAccountExists(maybeAccount);
  return decodeCandyMachine(maybeAccount);
}

export async function safeFetchCandyMachine<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<CandyMachine<TAddress> | null> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return maybeAccount.exists ? decodeCandyMachine(maybeAccount) : null;
}

export async function fetchAllCandyMachine(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<CandyMachine[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount);
    return decodeCandyMachine(maybeAccount);
  });
}

export async function safeFetchAllCandyMachine(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<CandyMachine[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) => decodeCandyMachine(maybeAccount as EncodedAccount));
}
