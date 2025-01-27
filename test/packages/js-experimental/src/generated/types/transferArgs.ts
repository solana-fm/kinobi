/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Codec, Decoder, Encoder, combineCodec } from '@solana/codecs-core';
import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  getDataEnumDecoder,
  getDataEnumEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU64Decoder, getU64Encoder } from '@solana/codecs-numbers';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import {
  AuthorizationData,
  AuthorizationDataArgs,
  getAuthorizationDataDecoder,
  getAuthorizationDataEncoder,
} from '.';

export type TransferArgs = {
  __kind: 'V1';
  authorizationData: Option<AuthorizationData>;
  amount: bigint;
};

export type TransferArgsArgs = {
  __kind: 'V1';
  authorizationData: OptionOrNullable<AuthorizationDataArgs>;
  amount: number | bigint;
};

export function getTransferArgsEncoder() {
  return getDataEnumEncoder<TransferArgsArgs>([
    [
      'V1',
      getStructEncoder<GetDataEnumKindContent<TransferArgsArgs, 'V1'>>([
        ['authorizationData', getOptionEncoder(getAuthorizationDataEncoder())],
        ['amount', getU64Encoder()],
      ]),
    ],
  ]) satisfies Encoder<TransferArgsArgs>;
}

export function getTransferArgsDecoder() {
  return getDataEnumDecoder<TransferArgs>([
    [
      'V1',
      getStructDecoder<GetDataEnumKindContent<TransferArgs, 'V1'>>([
        ['authorizationData', getOptionDecoder(getAuthorizationDataDecoder())],
        ['amount', getU64Decoder()],
      ]),
    ],
  ]) satisfies Decoder<TransferArgs>;
}

export function getTransferArgsCodec(): Codec<TransferArgsArgs, TransferArgs> {
  return combineCodec(getTransferArgsEncoder(), getTransferArgsDecoder());
}

// Data Enum Helpers.
export function transferArgs(
  kind: 'V1',
  data: GetDataEnumKindContent<TransferArgsArgs, 'V1'>
): GetDataEnumKind<TransferArgsArgs, 'V1'>;
export function transferArgs<K extends TransferArgsArgs['__kind']>(
  kind: K,
  data?: any
): Extract<TransferArgsArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isTransferArgs<K extends TransferArgs['__kind']>(
  kind: K,
  value: TransferArgs
): value is TransferArgs & { __kind: K } {
  return value.__kind === kind;
}
