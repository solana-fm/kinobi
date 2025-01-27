/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
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
  getI64Decoder,
  getI64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import { getStringDecoder, getStringEncoder } from '@solana/codecs-strings';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type CreateFrequencyRuleInstruction<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountFrequencyPda extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountFrequencyPda extends string
        ? WritableAccount<TAccountFrequencyPda>
        : TAccountFrequencyPda,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts
    ]
  >;

export type CreateFrequencyRuleInstructionWithSigners<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountFrequencyPda extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountFrequencyPda extends string
        ? WritableAccount<TAccountFrequencyPda>
        : TAccountFrequencyPda,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts
    ]
  >;

export type CreateFrequencyRuleInstructionData = {
  discriminator: number;
  ruleSetName: string;
  freqRuleName: string;
  lastUpdate: bigint;
  period: bigint;
};

export type CreateFrequencyRuleInstructionDataArgs = {
  ruleSetName: string;
  freqRuleName: string;
  lastUpdate: number | bigint;
  period: number | bigint;
};

export function getCreateFrequencyRuleInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      ruleSetName: string;
      freqRuleName: string;
      lastUpdate: number | bigint;
      period: number | bigint;
    }>([
      ['discriminator', getU8Encoder()],
      ['ruleSetName', getStringEncoder()],
      ['freqRuleName', getStringEncoder()],
      ['lastUpdate', getI64Encoder()],
      ['period', getI64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 2 })
  ) satisfies Encoder<CreateFrequencyRuleInstructionDataArgs>;
}

export function getCreateFrequencyRuleInstructionDataDecoder() {
  return getStructDecoder<CreateFrequencyRuleInstructionData>([
    ['discriminator', getU8Decoder()],
    ['ruleSetName', getStringDecoder()],
    ['freqRuleName', getStringDecoder()],
    ['lastUpdate', getI64Decoder()],
    ['period', getI64Decoder()],
  ]) satisfies Decoder<CreateFrequencyRuleInstructionData>;
}

export function getCreateFrequencyRuleInstructionDataCodec(): Codec<
  CreateFrequencyRuleInstructionDataArgs,
  CreateFrequencyRuleInstructionData
> {
  return combineCodec(
    getCreateFrequencyRuleInstructionDataEncoder(),
    getCreateFrequencyRuleInstructionDataDecoder()
  );
}

export type CreateFrequencyRuleInput<
  TAccountPayer extends string,
  TAccountFrequencyPda extends string,
  TAccountSystemProgram extends string
> = {
  /** Payer and creator of the Frequency Rule */
  payer: Address<TAccountPayer>;
  /** The PDA account where the Frequency Rule is stored */
  frequencyPda: Address<TAccountFrequencyPda>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  ruleSetName: CreateFrequencyRuleInstructionDataArgs['ruleSetName'];
  freqRuleName: CreateFrequencyRuleInstructionDataArgs['freqRuleName'];
  lastUpdate: CreateFrequencyRuleInstructionDataArgs['lastUpdate'];
  period: CreateFrequencyRuleInstructionDataArgs['period'];
};

export type CreateFrequencyRuleInputWithSigners<
  TAccountPayer extends string,
  TAccountFrequencyPda extends string,
  TAccountSystemProgram extends string
> = {
  /** Payer and creator of the Frequency Rule */
  payer: TransactionSigner<TAccountPayer>;
  /** The PDA account where the Frequency Rule is stored */
  frequencyPda: Address<TAccountFrequencyPda>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  ruleSetName: CreateFrequencyRuleInstructionDataArgs['ruleSetName'];
  freqRuleName: CreateFrequencyRuleInstructionDataArgs['freqRuleName'];
  lastUpdate: CreateFrequencyRuleInstructionDataArgs['lastUpdate'];
  period: CreateFrequencyRuleInstructionDataArgs['period'];
};

export function getCreateFrequencyRuleInstruction<
  TAccountPayer extends string,
  TAccountFrequencyPda extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
>(
  input: CreateFrequencyRuleInputWithSigners<
    TAccountPayer,
    TAccountFrequencyPda,
    TAccountSystemProgram
  >
): CreateFrequencyRuleInstructionWithSigners<
  TProgram,
  TAccountPayer,
  TAccountFrequencyPda,
  TAccountSystemProgram
>;
export function getCreateFrequencyRuleInstruction<
  TAccountPayer extends string,
  TAccountFrequencyPda extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
>(
  input: CreateFrequencyRuleInput<
    TAccountPayer,
    TAccountFrequencyPda,
    TAccountSystemProgram
  >
): CreateFrequencyRuleInstruction<
  TProgram,
  TAccountPayer,
  TAccountFrequencyPda,
  TAccountSystemProgram
>;
export function getCreateFrequencyRuleInstruction<
  TAccountPayer extends string,
  TAccountFrequencyPda extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
>(
  input: CreateFrequencyRuleInput<
    TAccountPayer,
    TAccountFrequencyPda,
    TAccountSystemProgram
  >
): IInstruction {
  // Program address.
  const programAddress =
    'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg' as Address<'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCreateFrequencyRuleInstructionRaw<
      TProgram,
      TAccountPayer,
      TAccountFrequencyPda,
      TAccountSystemProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    payer: { value: input.payer ?? null, isWritable: true },
    frequencyPda: { value: input.frequencyPda ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
    accounts.systemProgram.isWritable = false;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getCreateFrequencyRuleInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as CreateFrequencyRuleInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getCreateFrequencyRuleInstructionRaw<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountFrequencyPda extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    frequencyPda: TAccountFrequencyPda extends string
      ? Address<TAccountFrequencyPda>
      : TAccountFrequencyPda;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
  },
  args: CreateFrequencyRuleInstructionDataArgs,
  programAddress: Address<TProgram> = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.frequencyPda, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getCreateFrequencyRuleInstructionDataEncoder().encode(args),
    programAddress,
  } as CreateFrequencyRuleInstruction<
    TProgram,
    TAccountPayer,
    TAccountFrequencyPda,
    TAccountSystemProgram,
    TRemainingAccounts
  >;
}

export type ParsedCreateFrequencyRuleInstruction<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Payer and creator of the Frequency Rule */
    payer: TAccountMetas[0];
    /** The PDA account where the Frequency Rule is stored */
    frequencyPda: TAccountMetas[1];
    /** System program */
    systemProgram: TAccountMetas[2];
  };
  data: CreateFrequencyRuleInstructionData;
};

export function parseCreateFrequencyRuleInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateFrequencyRuleInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 3) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      payer: getNextAccount(),
      frequencyPda: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getCreateFrequencyRuleInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
