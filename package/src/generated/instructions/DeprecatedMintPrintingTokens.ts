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
} from '@lorisleiva/js-core';
import {
  MintPrintingTokensViaTokenArgs,
  MintPrintingTokensViaTokenArgsArgs,
  getMintPrintingTokensViaTokenArgsSerializer,
} from '../types';

// Accounts.
export type DeprecatedMintPrintingTokensInstructionAccounts = {
  /** Destination account */
  destination: PublicKey;
  /** Printing mint */
  printingMint: PublicKey;
  /** Update authority */
  updateAuthority: Signer;
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey;
  /** Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition']) */
  masterEdition: PublicKey;
  /** Token program */
  tokenProgram?: PublicKey;
  /** Rent */
  rent?: PublicKey;
};

// Arguments.
export type DeprecatedMintPrintingTokensInstructionData = {
  discriminator: number;
  mintPrintingTokensViaTokenArgs: MintPrintingTokensViaTokenArgs;
};

export type DeprecatedMintPrintingTokensInstructionArgs = {
  mintPrintingTokensViaTokenArgs: MintPrintingTokensViaTokenArgsArgs;
};

export function getDeprecatedMintPrintingTokensInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  DeprecatedMintPrintingTokensInstructionArgs,
  DeprecatedMintPrintingTokensInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    DeprecatedMintPrintingTokensInstructionArgs,
    DeprecatedMintPrintingTokensInstructionData,
    DeprecatedMintPrintingTokensInstructionData
  >(
    s.struct<DeprecatedMintPrintingTokensInstructionData>(
      [
        ['discriminator', s.u8],
        [
          'mintPrintingTokensViaTokenArgs',
          getMintPrintingTokensViaTokenArgsSerializer(context),
        ],
      ],
      'DeprecatedMintPrintingTokensInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: 9,
        ...value,
      } as DeprecatedMintPrintingTokensInstructionData)
  ) as Serializer<
    DeprecatedMintPrintingTokensInstructionArgs,
    DeprecatedMintPrintingTokensInstructionData
  >;
}

// Instruction.
export function deprecatedMintPrintingTokens(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: DeprecatedMintPrintingTokensInstructionAccounts &
    DeprecatedMintPrintingTokensInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('mplTokenMetadata').address;

  // Resolved accounts.
  const destinationAccount = input.destination;
  const printingMintAccount = input.printingMint;
  const updateAuthorityAccount = input.updateAuthority;
  const metadataAccount = input.metadata;
  const masterEditionAccount = input.masterEdition;
  const tokenProgramAccount = input.tokenProgram ?? {
    ...context.programs.get('splToken').address,
    isWritable: false,
  };
  const rentAccount =
    input.rent ?? publicKey('SysvarRent111111111111111111111111111111111');

  // Destination.
  keys.push({
    pubkey: destinationAccount,
    isSigner: false,
    isWritable: isWritable(destinationAccount, true),
  });

  // Printing Mint.
  keys.push({
    pubkey: printingMintAccount,
    isSigner: false,
    isWritable: isWritable(printingMintAccount, true),
  });

  // Update Authority.
  signers.push(updateAuthorityAccount);
  keys.push({
    pubkey: updateAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(updateAuthorityAccount, false),
  });

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, false),
  });

  // Master Edition.
  keys.push({
    pubkey: masterEditionAccount,
    isSigner: false,
    isWritable: isWritable(masterEditionAccount, false),
  });

  // Token Program.
  keys.push({
    pubkey: tokenProgramAccount,
    isSigner: false,
    isWritable: isWritable(tokenProgramAccount, false),
  });

  // Rent.
  keys.push({
    pubkey: rentAccount,
    isSigner: false,
    isWritable: isWritable(rentAccount, false),
  });

  // Data.
  const data =
    getDeprecatedMintPrintingTokensInstructionDataSerializer(context).serialize(
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
