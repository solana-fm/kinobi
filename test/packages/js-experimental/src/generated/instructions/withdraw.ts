/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type WithdrawInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCandyMachine extends string
        ? WritableAccount<TAccountCandyMachine>
        : TAccountCandyMachine,
      TAccountAuthority extends string
        ? WritableSignerAccount<TAccountAuthority>
        : TAccountAuthority,
      ...TRemainingAccounts
    ]
  >;

export type WithdrawInstructionData = { discriminator: Array<number> };

export type WithdrawInstructionDataArgs = {};

export function getWithdrawInstructionDataEncoder(): Encoder<WithdrawInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: Array<number> }>(
      [['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })]],
      { description: 'WithdrawInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [183, 18, 70, 156, 148, 109, 161, 34],
    })
  ) as Encoder<WithdrawInstructionDataArgs>;
}

export function getWithdrawInstructionDataDecoder(): Decoder<WithdrawInstructionData> {
  return getStructDecoder<WithdrawInstructionData>(
    [['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })]],
    { description: 'WithdrawInstructionData' }
  ) as Decoder<WithdrawInstructionData>;
}

export function getWithdrawInstructionDataCodec(): Codec<
  WithdrawInstructionDataArgs,
  WithdrawInstructionData
> {
  return combineCodec(
    getWithdrawInstructionDataEncoder(),
    getWithdrawInstructionDataDecoder()
  );
}

export function withdrawInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    candyMachine: TAccountCandyMachine extends string
      ? Base58EncodedAddress<TAccountCandyMachine>
      : TAccountCandyMachine;
    authority: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Base58EncodedAddress<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.candyMachine, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.WRITABLE_SIGNER),
      ...(remainingAccounts ?? []),
    ],
    data: getWithdrawInstructionDataEncoder().encode({}),
    programAddress,
  } as WithdrawInstruction<
    TProgram,
    TAccountCandyMachine,
    TAccountAuthority,
    TRemainingAccounts
  >;
}

// Input.
export type WithdrawInput<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string
> = {
  candyMachine: Base58EncodedAddress<TAccountCandyMachine>;
  authority?: Signer<TAccountAuthority>;
};

export async function withdraw<
  TReturn,
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      WithdrawInstruction<TProgram, TAccountCandyMachine, TAccountAuthority>,
      TReturn
    >,
  input: WithdrawInput<TAccountCandyMachine, TAccountAuthority>
): Promise<TReturn>;
export async function withdraw<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: WithdrawInput<TAccountCandyMachine, TAccountAuthority>
): Promise<
  WrappedInstruction<
    WithdrawInstruction<TProgram, TAccountCandyMachine, TAccountAuthority>
  >
>;
export async function withdraw<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  input: WithdrawInput<TAccountCandyMachine, TAccountAuthority>
): Promise<
  WrappedInstruction<
    WithdrawInstruction<TProgram, TAccountCandyMachine, TAccountAuthority>
  >
>;
export async function withdraw<
  TReturn,
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | WithdrawInput<TAccountCandyMachine, TAccountAuthority>,
  rawInput?: WithdrawInput<TAccountCandyMachine, TAccountAuthority>
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as WithdrawInput<TAccountCandyMachine, TAccountAuthority>;

  // Program address.
  const defaultProgramAddress =
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Base58EncodedAddress<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplCandyMachineCore',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof withdrawInstruction<
      TProgram,
      TAccountCandyMachine,
      TAccountAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    candyMachine: { value: input.candyMachine ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: true },
  };

  // Get account metas and signers.
  const [accountMetas, signers] = getAccountMetasAndSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  // Wrapped instruction.
  const wrappedInstruction = {
    instruction: withdrawInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    signers,
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(wrappedInstruction)
    : wrappedInstruction;
}
