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
export type FreezeDelegatedAccountInstructionAccounts = {
  /** Delegate */
  delegate: Signer;
  /** Token account to freeze */
  tokenAccount: PublicKey;
  /** Edition */
  edition: PublicKey;
  /** Token mint */
  mint: PublicKey;
  /** Token Program */
  tokenProgram?: PublicKey;
};

// Arguments.
export type FreezeDelegatedAccountInstructionData = { discriminator: number };

export type FreezeDelegatedAccountInstructionArgs = {};

export function getFreezeDelegatedAccountInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  FreezeDelegatedAccountInstructionArgs,
  FreezeDelegatedAccountInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    FreezeDelegatedAccountInstructionArgs,
    FreezeDelegatedAccountInstructionData,
    FreezeDelegatedAccountInstructionData
  >(
    s.struct<FreezeDelegatedAccountInstructionData>(
      [['discriminator', s.u8]],
      'FreezeDelegatedAccountInstructionArgs'
    ),
    (value) =>
      ({ discriminator: 26, ...value } as FreezeDelegatedAccountInstructionData)
  ) as Serializer<
    FreezeDelegatedAccountInstructionArgs,
    FreezeDelegatedAccountInstructionData
  >;
}

// Instruction.
export function freezeDelegatedAccount(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: FreezeDelegatedAccountInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('mplTokenMetadata').address;

  // Resolved accounts.
  const delegateAccount = input.delegate;
  const tokenAccountAccount = input.tokenAccount;
  const editionAccount = input.edition;
  const mintAccount = input.mint;
  const tokenProgramAccount = input.tokenProgram ?? {
    ...context.programs.get('splToken').address,
    isWritable: false,
  };

  // Delegate.
  signers.push(delegateAccount);
  keys.push({
    pubkey: delegateAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(delegateAccount, true),
  });

  // Token Account.
  keys.push({
    pubkey: tokenAccountAccount,
    isSigner: false,
    isWritable: isWritable(tokenAccountAccount, true),
  });

  // Edition.
  keys.push({
    pubkey: editionAccount,
    isSigner: false,
    isWritable: isWritable(editionAccount, false),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // Token Program.
  keys.push({
    pubkey: tokenProgramAccount,
    isSigner: false,
    isWritable: isWritable(tokenProgramAccount, false),
  });

  // Data.
  const data = getFreezeDelegatedAccountInstructionDataSerializer(
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
