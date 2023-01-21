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
  Option,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  checkForIsWritableOverride as isWritable,
  mapSerializer,
  publicKey,
} from '@lorisleiva/js-core';
import { findMetadataPda } from '../accounts';
import {
  CollectionDetails,
  CollectionDetailsArgs,
  DataV2,
  DataV2Args,
  getCollectionDetailsSerializer,
  getDataV2Serializer,
} from '../types';

// Accounts.
export type CreateMetadataAccountV3InstructionAccounts = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata?: PublicKey;
  /** Mint of token asset */
  mint: PublicKey;
  /** Mint authority */
  mintAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** update authority info */
  updateAuthority: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Rent info */
  rent?: PublicKey;
};

// Arguments.
export type CreateMetadataAccountV3InstructionData = {
  discriminator: number;
  data: DataV2;
  isMutable: boolean;
  collectionDetails: Option<CollectionDetails>;
};

export type CreateMetadataAccountV3InstructionArgs = {
  data: DataV2Args;
  isMutable: boolean;
  collectionDetails: Option<CollectionDetailsArgs>;
};

export function getCreateMetadataAccountV3InstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  CreateMetadataAccountV3InstructionArgs,
  CreateMetadataAccountV3InstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    CreateMetadataAccountV3InstructionArgs,
    CreateMetadataAccountV3InstructionData,
    CreateMetadataAccountV3InstructionData
  >(
    s.struct<CreateMetadataAccountV3InstructionData>(
      [
        ['discriminator', s.u8],
        ['data', getDataV2Serializer(context)],
        ['isMutable', s.bool()],
        [
          'collectionDetails',
          s.option(getCollectionDetailsSerializer(context)),
        ],
      ],
      'CreateMetadataAccountV3InstructionArgs'
    ),
    (value) =>
      ({
        discriminator: 33,
        ...value,
      } as CreateMetadataAccountV3InstructionData)
  ) as Serializer<
    CreateMetadataAccountV3InstructionArgs,
    CreateMetadataAccountV3InstructionData
  >;
}

// Instruction.
export function createMetadataAccountV3(
  context: Pick<Context, 'serializer' | 'programs' | 'eddsa' | 'payer'>,
  input: CreateMetadataAccountV3InstructionAccounts &
    CreateMetadataAccountV3InstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('mplTokenMetadata').address;

  // Resolved accounts.
  const mintAccount = input.mint;
  const metadataAccount =
    input.metadata ??
    findMetadataPda(context, { mint: publicKey(mintAccount) });
  const mintAuthorityAccount = input.mintAuthority;
  const payerAccount = input.payer ?? context.payer;
  const updateAuthorityAccount = input.updateAuthority;
  const systemProgramAccount = input.systemProgram ?? {
    ...context.programs.get('splSystem').address,
    isWritable: false,
  };
  const rentAccount = input.rent;

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // Mint Authority.
  signers.push(mintAuthorityAccount);
  keys.push({
    pubkey: mintAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(mintAuthorityAccount, false),
  });

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, true),
  });

  // Update Authority.
  keys.push({
    pubkey: updateAuthorityAccount,
    isSigner: false,
    isWritable: isWritable(updateAuthorityAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Rent (optional).
  if (rentAccount) {
    keys.push({
      pubkey: rentAccount,
      isSigner: false,
      isWritable: isWritable(rentAccount, false),
    });
  }

  // Data.
  const data =
    getCreateMetadataAccountV3InstructionDataSerializer(context).serialize(
      input
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
