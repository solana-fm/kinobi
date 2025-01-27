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
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  DelegateRole,
  DelegateRoleArgs,
  getDelegateRoleDecoder,
  getDelegateRoleEncoder,
} from '.';

export type DelegateState = {
  role: DelegateRole;
  delegate: Address;
  hasData: boolean;
};

export type DelegateStateArgs = {
  role: DelegateRoleArgs;
  delegate: Address;
  hasData: boolean;
};

export function getDelegateStateEncoder() {
  return getStructEncoder<DelegateStateArgs>([
    ['role', getDelegateRoleEncoder()],
    ['delegate', getAddressEncoder()],
    ['hasData', getBooleanEncoder()],
  ]) satisfies Encoder<DelegateStateArgs>;
}

export function getDelegateStateDecoder() {
  return getStructDecoder<DelegateState>([
    ['role', getDelegateRoleDecoder()],
    ['delegate', getAddressDecoder()],
    ['hasData', getBooleanDecoder()],
  ]) satisfies Decoder<DelegateState>;
}

export function getDelegateStateCodec(): Codec<
  DelegateStateArgs,
  DelegateState
> {
  return combineCodec(getDelegateStateEncoder(), getDelegateStateDecoder());
}
