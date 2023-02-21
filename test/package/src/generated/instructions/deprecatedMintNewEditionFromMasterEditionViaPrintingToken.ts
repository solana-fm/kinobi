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
  publicKey,
} from '@metaplex-foundation/umi-core';

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
    payer?: Signer;
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
      [['discriminator', s.u8()]],
      {
        description:
          'DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionArgs',
      }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 3,
      } as DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData)
  ) as Serializer<
    DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionArgs,
    DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData
  >;
}

// Instruction.
export function deprecatedMintNewEditionFromMasterEditionViaPrintingToken(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey =
    context.programs.get('mplTokenMetadata').publicKey;

  // Resolved accounts.
  const metadataAccount = input.metadata;
  const editionAccount = input.edition;
  const masterEditionAccount = input.masterEdition;
  const mintAccount = input.mint;
  const mintAuthorityAccount = input.mintAuthority;
  const printingMintAccount = input.printingMint;
  const masterTokenAccountAccount = input.masterTokenAccount;
  const editionMarkerAccount = input.editionMarker;
  const burnAuthorityAccount = input.burnAuthority;
  const payerAccount = input.payer ?? context.payer;
  const masterUpdateAuthorityAccount = input.masterUpdateAuthority;
  const masterMetadataAccount = input.masterMetadata;
  const tokenProgramAccount = input.tokenProgram ?? {
    ...context.programs.get('splToken').publicKey,
    isWritable: false,
  };
  const systemProgramAccount = input.systemProgram ?? {
    ...context.programs.get('splSystem').publicKey,
    isWritable: false,
  };
  const rentAccount =
    input.rent ?? publicKey('SysvarRent111111111111111111111111111111111');
  const reservationListAccount = input.reservationList;

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Edition.
  keys.push({
    pubkey: editionAccount,
    isSigner: false,
    isWritable: isWritable(editionAccount, true),
  });

  // Master Edition.
  keys.push({
    pubkey: masterEditionAccount,
    isSigner: false,
    isWritable: isWritable(masterEditionAccount, true),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, true),
  });

  // Mint Authority.
  signers.push(mintAuthorityAccount);
  keys.push({
    pubkey: mintAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(mintAuthorityAccount, false),
  });

  // Printing Mint.
  keys.push({
    pubkey: printingMintAccount,
    isSigner: false,
    isWritable: isWritable(printingMintAccount, true),
  });

  // Master Token Account.
  keys.push({
    pubkey: masterTokenAccountAccount,
    isSigner: false,
    isWritable: isWritable(masterTokenAccountAccount, true),
  });

  // Edition Marker.
  keys.push({
    pubkey: editionMarkerAccount,
    isSigner: false,
    isWritable: isWritable(editionMarkerAccount, true),
  });

  // Burn Authority.
  signers.push(burnAuthorityAccount);
  keys.push({
    pubkey: burnAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(burnAuthorityAccount, false),
  });

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, false),
  });

  // Master Update Authority.
  keys.push({
    pubkey: masterUpdateAuthorityAccount,
    isSigner: false,
    isWritable: isWritable(masterUpdateAuthorityAccount, false),
  });

  // Master Metadata.
  keys.push({
    pubkey: masterMetadataAccount,
    isSigner: false,
    isWritable: isWritable(masterMetadataAccount, false),
  });

  // Token Program.
  keys.push({
    pubkey: tokenProgramAccount,
    isSigner: false,
    isWritable: isWritable(tokenProgramAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Rent.
  keys.push({
    pubkey: rentAccount,
    isSigner: false,
    isWritable: isWritable(rentAccount, false),
  });

  // Reservation List (optional).
  if (reservationListAccount) {
    keys.push({
      pubkey: reservationListAccount,
      isSigner: false,
      isWritable: isWritable(reservationListAccount, true),
    });
  }

  // Data.
  const data =
    getDeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataSerializer(
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
