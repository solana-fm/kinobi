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
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type SetAuthorityInstructionAccounts = {
  candyMachine: PublicKey;
  authority: Signer;
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
      'setAuthorityInstructionArgs'
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
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: SetAuthorityInstructionAccounts & SetAuthorityInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplCandyMachineCore',
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
  );

  // Candy Machine.
  keys.push({ pubkey: input.candyMachine, isSigner: false, isWritable: false });

  // Authority.
  signers.push(input.authority);
  keys.push({
    pubkey: input.authority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Data.
  const data =
    getSetAuthorityInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
