/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, PublicKey, Serializer } from '@lorisleiva/js-core';
import { DelegateRole, getDelegateRoleSerializer } from '.';

export type DelegateState = {
  role: DelegateRole;
  delegate: PublicKey;
  hasData: boolean;
};

export function getDelegateStateSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<DelegateState> {
  const s = context.serializer;
  return s.struct<DelegateState>(
    [
      ['role', getDelegateRoleSerializer(context)],
      ['delegate', s.publicKey],
      ['hasData', s.bool()],
    ],
    'DelegateState'
  );
}
