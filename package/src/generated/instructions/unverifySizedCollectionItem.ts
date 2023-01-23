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
export type UnverifySizedCollectionItemInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
  /** Collection Authority */
  collectionAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** Mint of the Collection */
  collectionMint: PublicKey;
  /** Metadata Account of the Collection */
  collection: PublicKey;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: PublicKey;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: PublicKey;
};

// Arguments.
export type UnverifySizedCollectionItemInstructionData = {
  discriminator: number;
};

export type UnverifySizedCollectionItemInstructionArgs = {};

export function getUnverifySizedCollectionItemInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  UnverifySizedCollectionItemInstructionArgs,
  UnverifySizedCollectionItemInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    UnverifySizedCollectionItemInstructionArgs,
    UnverifySizedCollectionItemInstructionData,
    UnverifySizedCollectionItemInstructionData
  >(
    s.struct<UnverifySizedCollectionItemInstructionData>(
      [['discriminator', s.u8]],
      'UnverifySizedCollectionItemInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: 31,
        ...value,
      } as UnverifySizedCollectionItemInstructionData)
  ) as Serializer<
    UnverifySizedCollectionItemInstructionArgs,
    UnverifySizedCollectionItemInstructionData
  >;
}

// Instruction.
export function unverifySizedCollectionItem(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: UnverifySizedCollectionItemInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey =
    context.programs.get('mplTokenMetadata').publicKey;

  // Resolved accounts.
  const metadataAccount = input.metadata;
  const collectionAuthorityAccount = input.collectionAuthority;
  const payerAccount = input.payer ?? context.payer;
  const collectionMintAccount = input.collectionMint;
  const collectionAccount = input.collection;
  const collectionMasterEditionAccountAccount =
    input.collectionMasterEditionAccount;
  const collectionAuthorityRecordAccount = input.collectionAuthorityRecord;

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Collection Authority.
  signers.push(collectionAuthorityAccount);
  keys.push({
    pubkey: collectionAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(collectionAuthorityAccount, false),
  });

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, true),
  });

  // Collection Mint.
  keys.push({
    pubkey: collectionMintAccount,
    isSigner: false,
    isWritable: isWritable(collectionMintAccount, false),
  });

  // Collection.
  keys.push({
    pubkey: collectionAccount,
    isSigner: false,
    isWritable: isWritable(collectionAccount, true),
  });

  // Collection Master Edition Account.
  keys.push({
    pubkey: collectionMasterEditionAccountAccount,
    isSigner: false,
    isWritable: isWritable(collectionMasterEditionAccountAccount, false),
  });

  // Collection Authority Record (optional).
  if (collectionAuthorityRecordAccount) {
    keys.push({
      pubkey: collectionAuthorityRecordAccount,
      isSigner: false,
      isWritable: isWritable(collectionAuthorityRecordAccount, false),
    });
  }

  // Data.
  const data = getUnverifySizedCollectionItemInstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
