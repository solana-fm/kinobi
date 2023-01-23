/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  checkForIsWritableOverride as isWritable,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type SetAuthorityInstructionAccounts = {
  candyMachine: PublicKey;
  authority?: Signer;
};

// Arguments.
export type SetAuthorityInstructionData = {
  discriminator: Array<number>;
  newAuthority: PublicKey;
};

export type SetAuthorityInstructionArgs = { newAuthority: PublicKey };

export function getSetAuthorityInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<SetAuthorityInstructionArgs, SetAuthorityInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    SetAuthorityInstructionArgs,
    SetAuthorityInstructionData,
    SetAuthorityInstructionData
  >(
    s.struct<SetAuthorityInstructionData>(
      [
        ['discriminator', s.array(s.u8, 8)],
        ['newAuthority', s.publicKey],
      ],
      'SetAuthorityInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: [133, 250, 37, 21, 110, 163, 26, 121],
        ...value,
      } as SetAuthorityInstructionData)
  ) as Serializer<SetAuthorityInstructionArgs, SetAuthorityInstructionData>;
}

// Instruction.
export function setAuthority(
  context: Pick<Context, 'serializer' | 'programs' | 'identity'>,
  input: SetAuthorityInstructionAccounts & SetAuthorityInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get(
    'mplCandyMachineCore'
  ).publicKey;

  // Resolved accounts.
  const candyMachineAccount = input.candyMachine;
  const authorityAccount = input.authority ?? context.identity;

  // Candy Machine.
  keys.push({
    pubkey: candyMachineAccount,
    isSigner: false,
    isWritable: isWritable(candyMachineAccount, true),
  });

  // Authority.
  signers.push(authorityAccount);
  keys.push({
    pubkey: authorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(authorityAccount, false),
  });

  // Data.
  const data =
    getSetAuthorityInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
