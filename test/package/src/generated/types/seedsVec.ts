/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@metaplex-foundation/umi-core';

export type SeedsVec = { seeds: Array<Uint8Array> };

export function getSeedsVecSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<SeedsVec> {
  const s = context.serializer;
  return s.struct<SeedsVec>([['seeds', s.array(s.bytes())]], {
    description: 'SeedsVec',
  });
}
