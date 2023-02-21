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
} from '@metaplex-foundation/umi-core';

// Accounts.
export type SetAndVerifyCollectionInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
  /** Collection Update authority */
  collectionAuthority: Signer;
  /** Payer */
  payer?: Signer;
  /** Update Authority of Collection NFT and NFT */
  updateAuthority: PublicKey;
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
export type SetAndVerifyCollectionInstructionData = { discriminator: number };

export type SetAndVerifyCollectionInstructionArgs = {};

export function getSetAndVerifyCollectionInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  SetAndVerifyCollectionInstructionArgs,
  SetAndVerifyCollectionInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    SetAndVerifyCollectionInstructionArgs,
    SetAndVerifyCollectionInstructionData,
    SetAndVerifyCollectionInstructionData
  >(
    s.struct<SetAndVerifyCollectionInstructionData>(
      [['discriminator', s.u8()]],
      { description: 'SetAndVerifyCollectionInstructionArgs' }
    ),
    (value) =>
      ({ ...value, discriminator: 25 } as SetAndVerifyCollectionInstructionData)
  ) as Serializer<
    SetAndVerifyCollectionInstructionArgs,
    SetAndVerifyCollectionInstructionData
  >;
}

// Instruction.
export function setAndVerifyCollection(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: SetAndVerifyCollectionInstructionAccounts
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
  const updateAuthorityAccount = input.updateAuthority;
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
    isWritable: isWritable(collectionAuthorityAccount, true),
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
    isWritable: isWritable(collectionAccount, false),
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
  const data = getSetAndVerifyCollectionInstructionDataSerializer(
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
