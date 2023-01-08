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
export type ConvertMasterEditionV1ToV2InstructionAccounts = {
  /** Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
  masterEdition: PublicKey;
  /** One time authorization mint */
  oneTimeAuth: PublicKey;
  /** Printing mint */
  printingMint: PublicKey;
};

// Arguments.
export type ConvertMasterEditionV1ToV2InstructionData = {
  discriminator: number;
};

export type ConvertMasterEditionV1ToV2InstructionArgs = {};

export function getConvertMasterEditionV1ToV2InstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  ConvertMasterEditionV1ToV2InstructionArgs,
  ConvertMasterEditionV1ToV2InstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    ConvertMasterEditionV1ToV2InstructionArgs,
    ConvertMasterEditionV1ToV2InstructionData,
    ConvertMasterEditionV1ToV2InstructionData
  >(
    s.struct<ConvertMasterEditionV1ToV2InstructionData>(
      [['discriminator', s.u8]],
      'ConvertMasterEditionV1ToV2InstructionArgs'
    ),
    (value) =>
      ({
        discriminator: 12,
        ...value,
      } as ConvertMasterEditionV1ToV2InstructionData)
  ) as Serializer<
    ConvertMasterEditionV1ToV2InstructionArgs,
    ConvertMasterEditionV1ToV2InstructionData
  >;
}

// Instruction.
export function convertMasterEditionV1ToV2(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: ConvertMasterEditionV1ToV2InstructionAccounts &
    ConvertMasterEditionV1ToV2InstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Master Edition.
  keys.push({
    pubkey: input.masterEdition,
    isSigner: false,
    isWritable: false,
  });

  // One Time Auth.
  keys.push({ pubkey: input.oneTimeAuth, isSigner: false, isWritable: false });

  // Printing Mint.
  keys.push({ pubkey: input.printingMint, isSigner: false, isWritable: false });

  // Data.
  const data =
    getConvertMasterEditionV1ToV2InstructionDataSerializer(context).serialize(
      input
    );

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
