/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Base58EncodedAddress,
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
  ReadonlySignerAccount,
  WritableAccount,
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
export type SetAuthorityInstruction<
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
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority,
      ...TRemainingAccounts
    ]
  >;

export type SetAuthorityInstructionData = {
  discriminator: Array<number>;
  newAuthority: Base58EncodedAddress;
};

export type SetAuthorityInstructionDataArgs = {
  newAuthority: Base58EncodedAddress;
};

export function getSetAuthorityInstructionDataEncoder(): Encoder<SetAuthorityInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{
      discriminator: Array<number>;
      newAuthority: Base58EncodedAddress;
    }>(
      [
        ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
        ['newAuthority', getAddressEncoder()],
      ],
      { description: 'SetAuthorityInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [133, 250, 37, 21, 110, 163, 26, 121],
    })
  ) as Encoder<SetAuthorityInstructionDataArgs>;
}

export function getSetAuthorityInstructionDataDecoder(): Decoder<SetAuthorityInstructionData> {
  return getStructDecoder<SetAuthorityInstructionData>(
    [
      ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
      ['newAuthority', getAddressDecoder()],
    ],
    { description: 'SetAuthorityInstructionData' }
  ) as Decoder<SetAuthorityInstructionData>;
}

export function getSetAuthorityInstructionDataCodec(): Codec<
  SetAuthorityInstructionDataArgs,
  SetAuthorityInstructionData
> {
  return combineCodec(
    getSetAuthorityInstructionDataEncoder(),
    getSetAuthorityInstructionDataDecoder()
  );
}

export function setAuthorityInstruction<
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
  args: SetAuthorityInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Base58EncodedAddress<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.candyMachine, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
      ...(remainingAccounts ?? []),
    ],
    data: getSetAuthorityInstructionDataEncoder().encode(args),
    programAddress,
  } as SetAuthorityInstruction<
    TProgram,
    TAccountCandyMachine,
    TAccountAuthority,
    TRemainingAccounts
  >;
}

// Input.
export type SetAuthorityInput<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string
> = {
  candyMachine: Base58EncodedAddress<TAccountCandyMachine>;
  authority?: Signer<TAccountAuthority>;
  newAuthority: SetAuthorityInstructionDataArgs['newAuthority'];
};

export async function setAuthority<
  TReturn,
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      SetAuthorityInstruction<
        TProgram,
        TAccountCandyMachine,
        TAccountAuthority
      >,
      TReturn
    >,
  input: SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>
): Promise<TReturn>;
export async function setAuthority<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>
): Promise<
  WrappedInstruction<
    SetAuthorityInstruction<TProgram, TAccountCandyMachine, TAccountAuthority>
  >
>;
export async function setAuthority<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  input: SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>
): Promise<
  WrappedInstruction<
    SetAuthorityInstruction<TProgram, TAccountCandyMachine, TAccountAuthority>
  >
>;
export async function setAuthority<
  TReturn,
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>,
  rawInput?: SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>;

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
    typeof setAuthorityInstruction<
      TProgram,
      TAccountCandyMachine,
      TAccountAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    candyMachine: { value: input.candyMachine ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

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
    instruction: setAuthorityInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as SetAuthorityInstructionDataArgs,
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
