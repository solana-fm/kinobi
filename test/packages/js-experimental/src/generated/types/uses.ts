/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Codec, Decoder, Encoder, combineCodec } from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU64Decoder, getU64Encoder } from '@solana/codecs-numbers';
import {
  UseMethod,
  UseMethodArgs,
  getUseMethodDecoder,
  getUseMethodEncoder,
} from '.';

export type Uses = { useMethod: UseMethod; remaining: bigint; total: bigint };

export type UsesArgs = {
  useMethod: UseMethodArgs;
  remaining: number | bigint;
  total: number | bigint;
};

export function getUsesEncoder() {
  return getStructEncoder<UsesArgs>([
    ['useMethod', getUseMethodEncoder()],
    ['remaining', getU64Encoder()],
    ['total', getU64Encoder()],
  ]) satisfies Encoder<UsesArgs>;
}

export function getUsesDecoder() {
  return getStructDecoder<Uses>([
    ['useMethod', getUseMethodDecoder()],
    ['remaining', getU64Decoder()],
    ['total', getU64Decoder()],
  ]) satisfies Decoder<Uses>;
}

export function getUsesCodec(): Codec<UsesArgs, Uses> {
  return combineCodec(getUsesEncoder(), getUsesDecoder());
}
