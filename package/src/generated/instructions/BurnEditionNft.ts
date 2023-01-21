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
export type BurnEditionNftInstructionAccounts = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey;
  /** NFT owner */
  owner: Signer;
  /** Mint of the print edition NFT */
  printEditionMint: PublicKey;
  /** Mint of the original/master NFT */
  masterEditionMint: PublicKey;
  /** Token account the print edition NFT is in */
  printEditionTokenAccount: PublicKey;
  /** Token account the Master Edition NFT is in */
  masterEditionTokenAccount: PublicKey;
  /** MasterEdition2 of the original NFT */
  masterEditionAccount: PublicKey;
  /** Print Edition account of the NFT */
  printEditionAccount: PublicKey;
  /** Edition Marker PDA of the NFT */
  editionMarkerAccount: PublicKey;
  /** SPL Token Program */
  splTokenProgram?: PublicKey;
};

// Arguments.
export type BurnEditionNftInstructionData = { discriminator: number };

export type BurnEditionNftInstructionArgs = {};

export function getBurnEditionNftInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<BurnEditionNftInstructionArgs, BurnEditionNftInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    BurnEditionNftInstructionArgs,
    BurnEditionNftInstructionData,
    BurnEditionNftInstructionData
  >(
    s.struct<BurnEditionNftInstructionData>(
      [['discriminator', s.u8]],
      'BurnEditionNftInstructionArgs'
    ),
    (value) =>
      ({ discriminator: 37, ...value } as BurnEditionNftInstructionData)
  ) as Serializer<BurnEditionNftInstructionArgs, BurnEditionNftInstructionData>;
}

// Instruction.
export function burnEditionNft(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: BurnEditionNftInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('mplTokenMetadata').address;

  // Resolved accounts.
  const metadataAccount = input.metadata;
  const ownerAccount = input.owner;
  const printEditionMintAccount = input.printEditionMint;
  const masterEditionMintAccount = input.masterEditionMint;
  const printEditionTokenAccountAccount = input.printEditionTokenAccount;
  const masterEditionTokenAccountAccount = input.masterEditionTokenAccount;
  const masterEditionAccountAccount = input.masterEditionAccount;
  const printEditionAccountAccount = input.printEditionAccount;
  const editionMarkerAccountAccount = input.editionMarkerAccount;
  const splTokenProgramAccount = input.splTokenProgram ?? {
    ...context.programs.get('splToken').address,
    isWritable: false,
  };

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Owner.
  signers.push(ownerAccount);
  keys.push({
    pubkey: ownerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(ownerAccount, true),
  });

  // Print Edition Mint.
  keys.push({
    pubkey: printEditionMintAccount,
    isSigner: false,
    isWritable: isWritable(printEditionMintAccount, true),
  });

  // Master Edition Mint.
  keys.push({
    pubkey: masterEditionMintAccount,
    isSigner: false,
    isWritable: isWritable(masterEditionMintAccount, false),
  });

  // Print Edition Token Account.
  keys.push({
    pubkey: printEditionTokenAccountAccount,
    isSigner: false,
    isWritable: isWritable(printEditionTokenAccountAccount, true),
  });

  // Master Edition Token Account.
  keys.push({
    pubkey: masterEditionTokenAccountAccount,
    isSigner: false,
    isWritable: isWritable(masterEditionTokenAccountAccount, false),
  });

  // Master Edition Account.
  keys.push({
    pubkey: masterEditionAccountAccount,
    isSigner: false,
    isWritable: isWritable(masterEditionAccountAccount, true),
  });

  // Print Edition Account.
  keys.push({
    pubkey: printEditionAccountAccount,
    isSigner: false,
    isWritable: isWritable(printEditionAccountAccount, true),
  });

  // Edition Marker Account.
  keys.push({
    pubkey: editionMarkerAccountAccount,
    isSigner: false,
    isWritable: isWritable(editionMarkerAccountAccount, true),
  });

  // Spl Token Program.
  keys.push({
    pubkey: splTokenProgramAccount,
    isSigner: false,
    isWritable: isWritable(splTokenProgramAccount, false),
  });

  // Data.
  const data = getBurnEditionNftInstructionDataSerializer(context).serialize(
    {}
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
