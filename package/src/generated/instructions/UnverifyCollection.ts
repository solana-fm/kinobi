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
export type UnverifyCollectionInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
  /** Collection Authority */
  collectionAuthority: Signer;
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
export type UnverifyCollectionInstructionData = { discriminator: number };
export type UnverifyCollectionInstructionArgs = {};

export function getUnverifyCollectionInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  UnverifyCollectionInstructionArgs,
  UnverifyCollectionInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    UnverifyCollectionInstructionArgs,
    UnverifyCollectionInstructionData,
    UnverifyCollectionInstructionData
  >(
    s.struct<UnverifyCollectionInstructionData>(
      [['discriminator', s.u8]],
      'UnverifyCollectionInstructionArgs'
    ),
    (value) =>
      ({ discriminator: 22, ...value } as UnverifyCollectionInstructionData)
  ) as Serializer<
    UnverifyCollectionInstructionArgs,
    UnverifyCollectionInstructionData
  >;
}

// Instruction.
export function unverifyCollection(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: UnverifyCollectionInstructionAccounts &
    UnverifyCollectionInstructionArgs
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
    getUnverifyCollectionInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
