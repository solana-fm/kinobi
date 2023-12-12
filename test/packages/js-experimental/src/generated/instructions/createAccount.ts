/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Address,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU32Decoder,
  getU32Encoder,
  getU64Decoder,
  getU64Encoder,
} from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  Context,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type CreateAccountInstruction<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountNewAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountNewAccount extends string
        ? WritableSignerAccount<TAccountNewAccount>
        : TAccountNewAccount,
      ...TRemainingAccounts
    ]
  >;

export type CreateAccountInstructionWithSigners<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountNewAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountNewAccount extends string
        ? WritableSignerAccount<TAccountNewAccount> &
            IAccountSignerMeta<TAccountNewAccount>
        : TAccountNewAccount,
      ...TRemainingAccounts
    ]
  >;

export type CreateAccountInstructionData = {
  discriminator: number;
  lamports: bigint;
  space: bigint;
  programId: Address;
};

export type CreateAccountInstructionDataArgs = {
  lamports: number | bigint;
  space: number | bigint;
  programId: Address;
};

export function getCreateAccountInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      lamports: number | bigint;
      space: number | bigint;
      programId: Address;
    }>([
      ['discriminator', getU32Encoder()],
      ['lamports', getU64Encoder()],
      ['space', getU64Encoder()],
      ['programId', getAddressEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 0 })
  ) satisfies Encoder<CreateAccountInstructionDataArgs>;
}

export function getCreateAccountInstructionDataDecoder() {
  return getStructDecoder<CreateAccountInstructionData>([
    ['discriminator', getU32Decoder()],
    ['lamports', getU64Decoder()],
    ['space', getU64Decoder()],
    ['programId', getAddressDecoder()],
  ]) satisfies Decoder<CreateAccountInstructionData>;
}

export function getCreateAccountInstructionDataCodec(): Codec<
  CreateAccountInstructionDataArgs,
  CreateAccountInstructionData
> {
  return combineCodec(
    getCreateAccountInstructionDataEncoder(),
    getCreateAccountInstructionDataDecoder()
  );
}

export type CreateAccountInput<
  TAccountPayer extends string,
  TAccountNewAccount extends string
> = {
  payer?: Address<TAccountPayer>;
  newAccount: Address<TAccountNewAccount>;
  lamports: CreateAccountInstructionDataArgs['lamports'];
  space: CreateAccountInstructionDataArgs['space'];
  programId: CreateAccountInstructionDataArgs['programId'];
};

export type CreateAccountInputWithSigners<
  TAccountPayer extends string,
  TAccountNewAccount extends string
> = {
  payer?: TransactionSigner<TAccountPayer>;
  newAccount: TransactionSigner<TAccountNewAccount>;
  lamports: CreateAccountInstructionDataArgs['lamports'];
  space: CreateAccountInstructionDataArgs['space'];
  programId: CreateAccountInstructionDataArgs['programId'];
};

export function getCreateAccountInstruction<
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: CreateAccountInputWithSigners<TAccountPayer, TAccountNewAccount>
): CreateAccountInstructionWithSigners<
  TProgram,
  TAccountPayer,
  TAccountNewAccount
>;
export function getCreateAccountInstruction<
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: CreateAccountInput<TAccountPayer, TAccountNewAccount>
): CreateAccountInstruction<TProgram, TAccountPayer, TAccountNewAccount>;
export function getCreateAccountInstruction<
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: CreateAccountInputWithSigners<TAccountPayer, TAccountNewAccount>
): CreateAccountInstructionWithSigners<
  TProgram,
  TAccountPayer,
  TAccountNewAccount
>;
export function getCreateAccountInstruction<
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: CreateAccountInput<TAccountPayer, TAccountNewAccount>
): CreateAccountInstruction<TProgram, TAccountPayer, TAccountNewAccount>;
export function getCreateAccountInstruction<
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | CreateAccountInput<TAccountPayer, TAccountNewAccount>,
  rawInput?: CreateAccountInput<TAccountPayer, TAccountNewAccount>
): IInstruction {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as CreateAccountInput<TAccountPayer, TAccountNewAccount>;

  // Program address.
  const defaultProgramAddress =
    '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  const programAddress = (
    context.getProgramAddress
      ? context.getProgramAddress({
          name: 'splSystem',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCreateAccountInstructionRaw<
      TProgram,
      TAccountPayer,
      TAccountNewAccount
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    payer: { value: input.payer ?? null, isWritable: true },
    newAccount: { value: input.newAccount ?? null, isWritable: true },
  };

  // Original args.
  const args = { ...input };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  return Object.freeze({
    ...getCreateAccountInstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as CreateAccountInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}

export function getCreateAccountInstructionRaw<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountNewAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    newAccount: TAccountNewAccount extends string
      ? Address<TAccountNewAccount>
      : TAccountNewAccount;
  },
  args: CreateAccountInstructionDataArgs,
  programAddress: Address<TProgram> = '11111111111111111111111111111111' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.newAccount, AccountRole.WRITABLE_SIGNER),
      ...(remainingAccounts ?? []),
    ],
    data: getCreateAccountInstructionDataEncoder().encode(args),
    programAddress,
  } as CreateAccountInstruction<
    TProgram,
    TAccountPayer,
    TAccountNewAccount,
    TRemainingAccounts
  >;
}