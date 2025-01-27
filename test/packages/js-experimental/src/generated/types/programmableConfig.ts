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
import { Codec, Decoder, Encoder, combineCodec } from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';

export type ProgrammableConfig = { ruleSet: Address };

export type ProgrammableConfigArgs = ProgrammableConfig;

export function getProgrammableConfigEncoder() {
  return getStructEncoder<ProgrammableConfigArgs>([
    ['ruleSet', getAddressEncoder()],
  ]) satisfies Encoder<ProgrammableConfigArgs>;
}

export function getProgrammableConfigDecoder() {
  return getStructDecoder<ProgrammableConfig>([
    ['ruleSet', getAddressDecoder()],
  ]) satisfies Decoder<ProgrammableConfig>;
}

export function getProgrammableConfigCodec(): Codec<
  ProgrammableConfigArgs,
  ProgrammableConfig
> {
  return combineCodec(
    getProgrammableConfigEncoder(),
    getProgrammableConfigDecoder()
  );
}
