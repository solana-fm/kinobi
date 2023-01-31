/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Option,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  Serializer,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  mapSerializer,
} from '@lorisleiva/js-core';
import { TmKey, getTmKeySerializer } from '../types';

export type MasterEditionV1 = Account<MasterEditionV1AccountData>;

export type MasterEditionV1AccountData = {
  key: TmKey;
  supply: bigint;
  maxSupply: Option<bigint>;
  printingMint: PublicKey;
  oneTimePrintingAuthorizationMint: PublicKey;
};

export type MasterEditionV1AccountArgs = {
  supply: number | bigint;
  maxSupply: Option<number | bigint>;
  printingMint: PublicKey;
  oneTimePrintingAuthorizationMint: PublicKey;
};

export async function fetchMasterEditionV1(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<MasterEditionV1> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  assertAccountExists(maybeAccount, 'MasterEditionV1');
  return deserializeMasterEditionV1(context, maybeAccount);
}

export async function safeFetchMasterEditionV1(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<MasterEditionV1 | null> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  return maybeAccount.exists
    ? deserializeMasterEditionV1(context, maybeAccount)
    : null;
}

export async function fetchAllMasterEditionV1(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<MasterEditionV1[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'MasterEditionV1');
    return deserializeMasterEditionV1(context, maybeAccount);
  });
}

export async function safeFetchAllMasterEditionV1(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<MasterEditionV1[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeMasterEditionV1(context, maybeAccount as RpcAccount)
    );
}

export async function getMasterEditionV1GpaBuilder(
  context: Pick<Context, 'rpc' | 'serializer' | 'programs'>,
  publicKey: PublicKey
) {
  const s = context.serializer;
  return gpaBuilder<{
    key: TmKey;
    supply: number | bigint;
    maxSupply: Option<number | bigint>;
    printingMint: PublicKey;
    oneTimePrintingAuthorizationMint: PublicKey;
  }>(context, context.programs.get('mplTokenMetadata').publicKey, [
    ['key', getTmKeySerializer(context)],
    ['supply', s.u64],
    ['maxSupply', s.option(s.u64)],
    ['printingMint', s.publicKey],
    ['oneTimePrintingAuthorizationMint', s.publicKey],
  ]).whereField('key', TmKey.MasterEditionV1);
}

export function deserializeMasterEditionV1(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): MasterEditionV1 {
  return deserializeAccount(
    rawAccount,
    getMasterEditionV1AccountDataSerializer(context)
  );
}

export function getMasterEditionV1AccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<MasterEditionV1AccountArgs, MasterEditionV1AccountData> {
  const s = context.serializer;
  return mapSerializer<
    MasterEditionV1AccountArgs,
    MasterEditionV1AccountData,
    MasterEditionV1AccountData
  >(
    s.struct<MasterEditionV1AccountData>(
      [
        ['key', getTmKeySerializer(context)],
        ['supply', s.u64],
        ['maxSupply', s.option(s.u64)],
        ['printingMint', s.publicKey],
        ['oneTimePrintingAuthorizationMint', s.publicKey],
      ],
      'MasterEditionV1'
    ),
    (value) =>
      ({ ...value, key: TmKey.MasterEditionV1 } as MasterEditionV1AccountData)
  ) as Serializer<MasterEditionV1AccountArgs, MasterEditionV1AccountData>;
}

export function getMasterEditionV1Size(
  context: Pick<Context, 'serializer'>
): number | null {
  return getMasterEditionV1AccountDataSerializer(context).fixedSize;
}
