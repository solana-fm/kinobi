/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import { Context, Program, getProgramAddress } from '../shared';

export const SPL_SYSTEM_PROGRAM_ADDRESS =
  '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;

export type SplSystemProgram = Program<'11111111111111111111111111111111'>;

export function createSplSystemProgram(): SplSystemProgram {
  return {
    name: 'splSystem',
    address: SPL_SYSTEM_PROGRAM_ADDRESS,
  };
}

export async function getSplSystemProgramAddress(
  context: Pick<Context, 'getProgramAddress'> = {}
): Promise<Address> {
  return getProgramAddress(context, 'splSystem', SPL_SYSTEM_PROGRAM_ADDRESS);
}