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
export type DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionAccounts =
  {
    /** New Metadata key (pda of ['metadata', program id, mint id]) */
    metadata: PublicKey;
    /** New Edition V1 (pda of ['metadata', program id, mint id, 'edition']) */
    edition: PublicKey;
    /** Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
    masterEdition: PublicKey;
    /** Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
    mint: PublicKey;
    /** Mint authority of new mint */
    mintAuthority: Signer;
    /** Printing Mint of master record edition */
    printingMint: PublicKey;
    /** Token account containing Printing mint token to be transferred */
    masterTokenAccount: PublicKey;
    /** Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master mint id, edition_number]) */
    editionMarker: PublicKey;
    /** Burn authority for this token */
    burnAuthority: Signer;
    /** payer */
    payer: Signer;
    /** update authority info for new metadata account */
    masterUpdateAuthority: PublicKey;
    /** Master record metadata account */
    masterMetadata: PublicKey;
    /** Token program */
    tokenProgram?: PublicKey;
    /** System program */
    systemProgram?: PublicKey;
    /** Rent info */
    rent?: PublicKey;
    /** Reservation List - If present, and you are on this list, you can get an edition number given by your position on the list. */
    reservationList?: PublicKey;
  };

// Arguments.
export type DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData =
  { discriminator: number };

export type DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionArgs =
  {};

export function getDeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionArgs,
  DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionArgs,
    DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData,
    DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData
  >(
    s.struct<DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData>(
      [['discriminator', s.u8]],
      'DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: 3,
        ...value,
      } as DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData)
  ) as Serializer<
    DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionArgs,
    DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData
  >;
}

// Instruction.
export function deprecatedMintNewEditionFromMasterEditionViaPrintingToken(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionAccounts &
    DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Metadata.
  keys.push({ pubkey: input.metadata, isSigner: false, isWritable: false });

  // Edition.
  keys.push({ pubkey: input.edition, isSigner: false, isWritable: false });

  // Master Edition.
  keys.push({
    pubkey: input.masterEdition,
    isSigner: false,
    isWritable: false,
  });

  // Mint.
  keys.push({ pubkey: input.mint, isSigner: false, isWritable: false });

  // Mint Authority.
  signers.push(input.mintAuthority);
  keys.push({
    pubkey: input.mintAuthority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Printing Mint.
  keys.push({ pubkey: input.printingMint, isSigner: false, isWritable: false });

  // Master Token Account.
  keys.push({
    pubkey: input.masterTokenAccount,
    isSigner: false,
    isWritable: false,
  });

  // Edition Marker.
  keys.push({
    pubkey: input.editionMarker,
    isSigner: false,
    isWritable: false,
  });

  // Burn Authority.
  signers.push(input.burnAuthority);
  keys.push({
    pubkey: input.burnAuthority.publicKey,
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

  // Master Update Authority.
  keys.push({
    pubkey: input.masterUpdateAuthority,
    isSigner: false,
    isWritable: false,
  });

  // Master Metadata.
  keys.push({
    pubkey: input.masterMetadata,
    isSigner: false,
    isWritable: false,
  });

  // Token Program.
  keys.push({
    pubkey:
      input.tokenProgram ??
      getProgramAddressWithFallback(
        context,
        'splToken',
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
      ),
    isSigner: false,
    isWritable: false,
  });

  // System Program.
  keys.push({
    pubkey:
      input.systemProgram ??
      getProgramAddressWithFallback(
        context,
        'splSystem',
        '11111111111111111111111111111111'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Rent.
  keys.push({
    pubkey:
      input.rent ??
      context.eddsa.createPublicKey(
        'SysvarRent111111111111111111111111111111111'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Reservation List (optional).
  if (input.reservationList) {
    keys.push({
      pubkey: input.reservationList,
      isSigner: false,
      isWritable: false,
    });
  }

  // Data.
  const data =
    getDeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataSerializer(
      context
    ).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
