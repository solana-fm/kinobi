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
  TransferArgs,
  TransferArgsArgs,
  getTransferArgsSerializer,
} from '../types';

// Accounts.
export type TransferInstructionAccounts = {
  /** Transfer authority (token or delegate owner) */
  authority?: Signer;
  /** Delegate record PDA */
  delegateRecord?: PublicKey;
  /** Token account */
  token: PublicKey;
  /** Token account owner */
  tokenOwner: PublicKey;
  /** Destination token account */
  destination: PublicKey;
  /** Destination token account owner */
  destinationOwner: PublicKey;
  /** Mint of token asset */
  mint: PublicKey;
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey;
  /** Master Edition of token asset */
  masterEdition?: PublicKey;
  /** SPL Token Program */
  splTokenProgram?: PublicKey;
  /** SPL Associated Token Account program */
  splAtaProgram?: PublicKey;
  /** System Program */
  systemProgram?: PublicKey;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey;
};

// Arguments.
export type TransferInstructionData = {
  discriminator: number;
  transferArgs: TransferArgs;
};

export type TransferInstructionArgs = { transferArgs: TransferArgsArgs };

export function getTransferInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<TransferInstructionArgs, TransferInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    TransferInstructionArgs,
    TransferInstructionData,
    TransferInstructionData
  >(
    s.struct<TransferInstructionData>(
      [
        ['discriminator', s.u8],
        ['transferArgs', getTransferArgsSerializer(context)],
      ],
      'TransferInstructionArgs'
    ),
    (value) => ({ discriminator: 46, ...value } as TransferInstructionData)
  ) as Serializer<TransferInstructionArgs, TransferInstructionData>;
}

// Instruction.
export function transfer(
  context: Pick<Context, 'serializer' | 'programs' | 'identity'>,
  input: TransferInstructionAccounts & TransferInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('mplTokenMetadata').address;

  // Resolved accounts.
  const authorityAccount = input.authority ?? context.identity;
  const delegateRecordAccount = input.delegateRecord;
  const tokenAccount = input.token;
  const tokenOwnerAccount = input.tokenOwner;
  const destinationAccount = input.destination;
  const destinationOwnerAccount = input.destinationOwner;
  const mintAccount = input.mint;
  const metadataAccount = input.metadata;
  const masterEditionAccount = input.masterEdition;
  const splTokenProgramAccount = input.splTokenProgram ?? {
    ...context.programs.get('splToken').address,
    isWritable: false,
  };
  const splAtaProgramAccount = input.splAtaProgram ?? {
    ...context.programs.get('splAssociatedToken').address,
    isWritable: false,
  };
  const systemProgramAccount = input.systemProgram ?? {
    ...context.programs.get('splSystem').address,
    isWritable: false,
  };
  const sysvarInstructionsAccount =
    input.sysvarInstructions ??
    publicKey('Sysvar1nstructions1111111111111111111111111');
  const authorizationRulesProgramAccount = input.authorizationRulesProgram;
  const authorizationRulesAccount = input.authorizationRules;

  // Authority.
  signers.push(authorityAccount);
  keys.push({
    pubkey: authorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(authorityAccount, true),
  });

  // Delegate Record (optional).
  if (delegateRecordAccount) {
    keys.push({
      pubkey: delegateRecordAccount,
      isSigner: false,
      isWritable: isWritable(delegateRecordAccount, true),
    });
  }

  // Token.
  keys.push({
    pubkey: tokenAccount,
    isSigner: false,
    isWritable: isWritable(tokenAccount, true),
  });

  // Token Owner.
  keys.push({
    pubkey: tokenOwnerAccount,
    isSigner: false,
    isWritable: isWritable(tokenOwnerAccount, false),
  });

  // Destination.
  keys.push({
    pubkey: destinationAccount,
    isSigner: false,
    isWritable: isWritable(destinationAccount, true),
  });

  // Destination Owner.
  keys.push({
    pubkey: destinationOwnerAccount,
    isSigner: false,
    isWritable: isWritable(destinationOwnerAccount, false),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Master Edition (optional).
  if (masterEditionAccount) {
    keys.push({
      pubkey: masterEditionAccount,
      isSigner: false,
      isWritable: isWritable(masterEditionAccount, false),
    });
  }

  // Spl Token Program.
  keys.push({
    pubkey: splTokenProgramAccount,
    isSigner: false,
    isWritable: isWritable(splTokenProgramAccount, false),
  });

  // Spl Ata Program.
  keys.push({
    pubkey: splAtaProgramAccount,
    isSigner: false,
    isWritable: isWritable(splAtaProgramAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Sysvar Instructions.
  keys.push({
    pubkey: sysvarInstructionsAccount,
    isSigner: false,
    isWritable: isWritable(sysvarInstructionsAccount, false),
  });

  // Authorization Rules Program (optional).
  if (authorizationRulesProgramAccount) {
    keys.push({
      pubkey: authorizationRulesProgramAccount,
      isSigner: false,
      isWritable: isWritable(authorizationRulesProgramAccount, false),
    });
  }

  // Authorization Rules (optional).
  if (authorizationRulesAccount) {
    keys.push({
      pubkey: authorizationRulesAccount,
      isSigner: false,
      isWritable: isWritable(authorizationRulesAccount, false),
    });
  }

  // Data.
  const data = getTransferInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
