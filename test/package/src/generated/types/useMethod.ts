/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@metaplex-foundation/umi-core';

export enum UseMethod {
  Burn,
  Multiple,
  Single,
}

export function getUseMethodSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<UseMethod> {
  const s = context.serializer;
  return s.enum<UseMethod>(UseMethod, { description: 'UseMethod' });
}
