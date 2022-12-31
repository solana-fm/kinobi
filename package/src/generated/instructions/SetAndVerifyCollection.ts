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
export type SetAndVerifyCollectionInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
  /** Collection Update authority */
  collectionAuthority: Signer;
  /** Payer */
  payer: Signer;
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
      [['discriminator', s.u8]],
      'SetAndVerifyCollectionInstructionArgs'
    ),
    (value) =>
      ({ discriminator: 25, ...value } as SetAndVerifyCollectionInstructionData)
  ) as Serializer<
    SetAndVerifyCollectionInstructionArgs,
    SetAndVerifyCollectionInstructionData
  >;
}

// Instruction.
export function setAndVerifyCollection(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: SetAndVerifyCollectionInstructionAccounts &
    SetAndVerifyCollectionInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplDigitalAsset',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Metadata.
  keys.push({ pubkey: input.metadata, isSigner: false, isWritable: false });

  // Collection Authority.
  signers.push(input.collectionAuthority);
  keys.push({
    pubkey: input.collectionAuthority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Payer.
  signers.push(input.payer);
  keys.push({
    pubkey: input.payer.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Update Authority.
  keys.push({
    pubkey: input.updateAuthority,
    isSigner: false,
    isWritable: false,
  });

  // Collection Mint.
  keys.push({
    pubkey: input.collectionMint,
    isSigner: false,
    isWritable: false,
  });

  // Collection.
  keys.push({ pubkey: input.collection, isSigner: false, isWritable: false });

  // Collection Master Edition Account.
  keys.push({
    pubkey: input.collectionMasterEditionAccount,
    isSigner: false,
    isWritable: false,
  });

  // Collection Authority Record (optional).
  if (input.collectionAuthorityRecord) {
    keys.push({
      pubkey: input.collectionAuthorityRecord,
      isSigner: false,
      isWritable: false,
    });
  }

  // Data.
  const data =
    getSetAndVerifyCollectionInstructionDataSerializer(context).serialize(
      input
    );

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
