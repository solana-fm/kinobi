/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@metaplex-foundation/umi-core';

export enum MigrateArgs {
  V1,
}

export function getMigrateArgsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<MigrateArgs> {
  const s = context.serializer;
  return s.enum<MigrateArgs>(MigrateArgs, { description: 'MigrateArgs' });
}
