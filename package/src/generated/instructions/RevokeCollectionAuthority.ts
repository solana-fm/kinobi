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
export type RevokeCollectionAuthorityInstructionAccounts = {
  /** Collection Authority Record PDA */
  collectionAuthorityRecord: PublicKey;
  /** Delegated Collection Authority */
  delegateAuthority: PublicKey;
  /** Update Authority, or Delegated Authority, of Collection NFT */
  revokeAuthority: Signer;
  /** Metadata account */
  metadata: PublicKey;
  /** Mint of Metadata */
  mint: PublicKey;
};

// Arguments.
export type RevokeCollectionAuthorityInstructionData = {
  discriminator: number;
};
export type RevokeCollectionAuthorityInstructionArgs = {};

export function getRevokeCollectionAuthorityInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  RevokeCollectionAuthorityInstructionArgs,
  RevokeCollectionAuthorityInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    RevokeCollectionAuthorityInstructionArgs,
    RevokeCollectionAuthorityInstructionData,
    RevokeCollectionAuthorityInstructionData
  >(
    s.struct<RevokeCollectionAuthorityInstructionData>(
      [['discriminator', s.u8]],
      'RevokeCollectionAuthorityInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: 24,
        ...value,
      } as RevokeCollectionAuthorityInstructionData)
  ) as Serializer<
    RevokeCollectionAuthorityInstructionArgs,
    RevokeCollectionAuthorityInstructionData
  >;
}

// Instruction.
export function revokeCollectionAuthority(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: RevokeCollectionAuthorityInstructionAccounts &
    RevokeCollectionAuthorityInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplDigitalAsset',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Collection Authority Record.
  keys.push({
    pubkey: input.collectionAuthorityRecord,
    isSigner: false,
    isWritable: false,
  });

  // Delegate Authority.
  keys.push({
    pubkey: input.delegateAuthority,
    isSigner: false,
    isWritable: false,
  });

  // Revoke Authority.
  signers.push(input.revokeAuthority);
  keys.push({
    pubkey: input.revokeAuthority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Metadata.
  keys.push({ pubkey: input.metadata, isSigner: false, isWritable: false });

  // Mint.
  keys.push({ pubkey: input.mint, isSigner: false, isWritable: false });

  // Data.
  const data =
    getRevokeCollectionAuthorityInstructionDataSerializer(context).serialize(
      input
    );

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
