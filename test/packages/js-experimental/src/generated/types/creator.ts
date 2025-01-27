/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

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
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';

export type Creator = { address: Address; verified: boolean; share: number };

export type CreatorArgs = {
  address: Address;
  verified?: boolean;
  share?: number;
};

export function getCreatorEncoder() {
  return mapEncoder(
    getStructEncoder<{ address: Address; verified: boolean; share: number }>([
      ['address', getAddressEncoder()],
      ['verified', getBooleanEncoder()],
      ['share', getU8Encoder()],
    ]),
    (value) => ({
      ...value,
      verified: value.verified ?? false,
      share: value.share ?? 42,
    })
  ) satisfies Encoder<CreatorArgs>;
}

export function getCreatorDecoder() {
  return getStructDecoder<Creator>([
    ['address', getAddressDecoder()],
    ['verified', getBooleanDecoder()],
    ['share', getU8Decoder()],
  ]) satisfies Decoder<Creator>;
}

export function getCreatorCodec(): Codec<CreatorArgs, Creator> {
  return combineCodec(getCreatorEncoder(), getCreatorDecoder());
}
