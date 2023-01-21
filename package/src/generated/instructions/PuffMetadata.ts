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
export type PuffMetadataInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
};

// Arguments.
export type PuffMetadataInstructionData = { discriminator: number };

export type PuffMetadataInstructionArgs = {};

export function getPuffMetadataInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<PuffMetadataInstructionArgs, PuffMetadataInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    PuffMetadataInstructionArgs,
    PuffMetadataInstructionData,
    PuffMetadataInstructionData
  >(
    s.struct<PuffMetadataInstructionData>(
      [['discriminator', s.u8]],
      'PuffMetadataInstructionArgs'
    ),
    (value) => ({ discriminator: 14, ...value } as PuffMetadataInstructionData)
  ) as Serializer<PuffMetadataInstructionArgs, PuffMetadataInstructionData>;
}

// Instruction.
export function puffMetadata(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: PuffMetadataInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('mplTokenMetadata').address;

  // Resolved accounts.
  const metadataAccount = input.metadata;

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Data.
  const data = getPuffMetadataInstructionDataSerializer(context).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
