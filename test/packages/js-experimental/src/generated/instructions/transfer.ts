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
  ReadonlyAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { resolveMasterEditionFromTokenStandard } from '../../hooked';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
  getProgramAddress,
} from '../shared';
import {
  TokenStandard,
  TokenStandardArgs,
  TransferArgs,
  TransferArgsArgs,
  getTransferArgsDecoder,
  getTransferArgsEncoder,
} from '../types';

// Output.
export type TransferInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountTokenOwner extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountDestinationOwner extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSplAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAuthority extends string
        ? WritableSignerAccount<TAccountAuthority>
        : TAccountAuthority,
      TAccountDelegateRecord extends string
        ? WritableAccount<TAccountDelegateRecord>
        : TAccountDelegateRecord,
      TAccountToken extends string
        ? WritableAccount<TAccountToken>
        : TAccountToken,
      TAccountTokenOwner extends string
        ? ReadonlyAccount<TAccountTokenOwner>
        : TAccountTokenOwner,
      TAccountDestination extends string
        ? WritableAccount<TAccountDestination>
        : TAccountDestination,
      TAccountDestinationOwner extends string
        ? ReadonlyAccount<TAccountDestinationOwner>
        : TAccountDestinationOwner,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMasterEdition extends string
        ? ReadonlyAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      TAccountSplAtaProgram extends string
        ? ReadonlyAccount<TAccountSplAtaProgram>
        : TAccountSplAtaProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules extends string
        ? ReadonlyAccount<TAccountAuthorizationRules>
        : TAccountAuthorizationRules,
      ...TRemainingAccounts
    ]
  >;

export type TransferInstructionData = {
  discriminator: number;
  transferArgs: TransferArgs;
};

export type TransferInstructionDataArgs = { transferArgs: TransferArgsArgs };

export function getTransferInstructionDataEncoder(): Encoder<TransferInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; transferArgs: TransferArgsArgs }>(
      [
        ['discriminator', getU8Encoder()],
        ['transferArgs', getTransferArgsEncoder()],
      ],
      { description: 'TransferInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 46 })
  ) as Encoder<TransferInstructionDataArgs>;
}

export function getTransferInstructionDataDecoder(): Decoder<TransferInstructionData> {
  return getStructDecoder<TransferInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['transferArgs', getTransferArgsDecoder()],
    ],
    { description: 'TransferInstructionData' }
  ) as Decoder<TransferInstructionData>;
}

export function getTransferInstructionDataCodec(): Codec<
  TransferInstructionDataArgs,
  TransferInstructionData
> {
  return combineCodec(
    getTransferInstructionDataEncoder(),
    getTransferInstructionDataDecoder()
  );
}

export type TransferInstructionExtraArgs = { tokenStandard: TokenStandardArgs };

export function transferInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountTokenOwner extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountDestinationOwner extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSplAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    authority: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
    delegateRecord?: TAccountDelegateRecord extends string
      ? Base58EncodedAddress<TAccountDelegateRecord>
      : TAccountDelegateRecord;
    token: TAccountToken extends string
      ? Base58EncodedAddress<TAccountToken>
      : TAccountToken;
    tokenOwner: TAccountTokenOwner extends string
      ? Base58EncodedAddress<TAccountTokenOwner>
      : TAccountTokenOwner;
    destination: TAccountDestination extends string
      ? Base58EncodedAddress<TAccountDestination>
      : TAccountDestination;
    destinationOwner: TAccountDestinationOwner extends string
      ? Base58EncodedAddress<TAccountDestinationOwner>
      : TAccountDestinationOwner;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    masterEdition?: TAccountMasterEdition extends string
      ? Base58EncodedAddress<TAccountMasterEdition>
      : TAccountMasterEdition;
    splTokenProgram?: TAccountSplTokenProgram extends string
      ? Base58EncodedAddress<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
    splAtaProgram?: TAccountSplAtaProgram extends string
      ? Base58EncodedAddress<TAccountSplAtaProgram>
      : TAccountSplAtaProgram;
    systemProgram?: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    sysvarInstructions?: TAccountSysvarInstructions extends string
      ? Base58EncodedAddress<TAccountSysvarInstructions>
      : TAccountSysvarInstructions;
    authorizationRulesProgram?: TAccountAuthorizationRulesProgram extends string
      ? Base58EncodedAddress<TAccountAuthorizationRulesProgram>
      : TAccountAuthorizationRulesProgram;
    authorizationRules?: TAccountAuthorizationRules extends string
      ? Base58EncodedAddress<TAccountAuthorizationRules>
      : TAccountAuthorizationRules;
  },
  args: TransferInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.authority, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(
        accounts.delegateRecord ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(accounts.token, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.tokenOwner, AccountRole.READONLY),
      accountMetaWithDefault(accounts.destination, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.destinationOwner, AccountRole.READONLY),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.masterEdition ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.splTokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.splAtaProgram ?? {
          address:
            'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Base58EncodedAddress<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Base58EncodedAddress<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.sysvarInstructions ??
          'Sysvar1nstructions1111111111111111111111111',
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.authorizationRulesProgram ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.authorizationRules ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getTransferInstructionDataEncoder().encode(args),
    programAddress,
  } as TransferInstruction<
    TProgram,
    TAccountAuthority,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules,
    TRemainingAccounts
  >;
}

// Input.
export type TransferInput<
  TAccountAuthority extends string,
  TAccountDelegateRecord extends string,
  TAccountToken extends string,
  TAccountTokenOwner extends string,
  TAccountDestination extends string,
  TAccountDestinationOwner extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string
> = {
  /** Transfer authority (token or delegate owner) */
  authority?: Signer<TAccountAuthority>;
  /** Delegate record PDA */
  delegateRecord?: Base58EncodedAddress<TAccountDelegateRecord>;
  /** Token account */
  token: Base58EncodedAddress<TAccountToken>;
  /** Token account owner */
  tokenOwner: Base58EncodedAddress<TAccountTokenOwner>;
  /** Destination token account */
  destination: Base58EncodedAddress<TAccountDestination>;
  /** Destination token account owner */
  destinationOwner: Base58EncodedAddress<TAccountDestinationOwner>;
  /** Mint of token asset */
  mint: Base58EncodedAddress<TAccountMint>;
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Master Edition of token asset */
  masterEdition?: Base58EncodedAddress<TAccountMasterEdition>;
  /** SPL Token Program */
  splTokenProgram?: Base58EncodedAddress<TAccountSplTokenProgram>;
  /** SPL Associated Token Account program */
  splAtaProgram?: Base58EncodedAddress<TAccountSplAtaProgram>;
  /** System Program */
  systemProgram?: Base58EncodedAddress<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Base58EncodedAddress<TAccountSysvarInstructions>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Base58EncodedAddress<TAccountAuthorizationRulesProgram>;
  /** Token Authorization Rules account */
  authorizationRules?: Base58EncodedAddress<TAccountAuthorizationRules>;
  transferArgs: TransferInstructionDataArgs['transferArgs'];
  tokenStandard?: TransferInstructionExtraArgs['tokenStandard'];
};

export async function transfer<
  TReturn,
  TAccountAuthority extends string,
  TAccountDelegateRecord extends string,
  TAccountToken extends string,
  TAccountTokenOwner extends string,
  TAccountDestination extends string,
  TAccountDestinationOwner extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'> &
    CustomGeneratedInstruction<
      TransferInstruction<
        TProgram,
        TAccountAuthority,
        TAccountDelegateRecord,
        TAccountToken,
        TAccountTokenOwner,
        TAccountDestination,
        TAccountDestinationOwner,
        TAccountMint,
        TAccountMetadata,
        TAccountMasterEdition,
        TAccountSplTokenProgram,
        TAccountSplAtaProgram,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountAuthorizationRulesProgram,
        TAccountAuthorizationRules
      >,
      TReturn
    >,
  input: TransferInput<
    TAccountAuthority,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<TReturn>;
export async function transfer<
  TAccountAuthority extends string,
  TAccountDelegateRecord extends string,
  TAccountToken extends string,
  TAccountTokenOwner extends string,
  TAccountDestination extends string,
  TAccountDestinationOwner extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'>,
  input: TransferInput<
    TAccountAuthority,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<
  WrappedInstruction<
    TransferInstruction<
      TProgram,
      TAccountAuthority,
      TAccountDelegateRecord,
      TAccountToken,
      TAccountTokenOwner,
      TAccountDestination,
      TAccountDestinationOwner,
      TAccountMint,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountSplTokenProgram,
      TAccountSplAtaProgram,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules
    >
  >
>;
export async function transfer<
  TAccountAuthority extends string,
  TAccountDelegateRecord extends string,
  TAccountToken extends string,
  TAccountTokenOwner extends string,
  TAccountDestination extends string,
  TAccountDestinationOwner extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: TransferInput<
    TAccountAuthority,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<
  WrappedInstruction<
    TransferInstruction<
      TProgram,
      TAccountAuthority,
      TAccountDelegateRecord,
      TAccountToken,
      TAccountTokenOwner,
      TAccountDestination,
      TAccountDestinationOwner,
      TAccountMint,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountSplTokenProgram,
      TAccountSplAtaProgram,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules
    >
  >
>;
export async function transfer<
  TReturn,
  TAccountAuthority extends string,
  TAccountDelegateRecord extends string,
  TAccountToken extends string,
  TAccountTokenOwner extends string,
  TAccountDestination extends string,
  TAccountDestinationOwner extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'>
    | (Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | TransferInput<
        TAccountAuthority,
        TAccountDelegateRecord,
        TAccountToken,
        TAccountTokenOwner,
        TAccountDestination,
        TAccountDestinationOwner,
        TAccountMint,
        TAccountMetadata,
        TAccountMasterEdition,
        TAccountSplTokenProgram,
        TAccountSplAtaProgram,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountAuthorizationRulesProgram,
        TAccountAuthorizationRules
      >,
  rawInput?: TransferInput<
    TAccountAuthority,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'>
    | (Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as TransferInput<
    TAccountAuthority,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof transferInstruction<
      TProgram,
      TAccountAuthority,
      TAccountDelegateRecord,
      TAccountToken,
      TAccountTokenOwner,
      TAccountDestination,
      TAccountDestinationOwner,
      TAccountMint,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountSplTokenProgram,
      TAccountSplAtaProgram,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    authority: { value: input.authority ?? null, isWritable: true },
    delegateRecord: { value: input.delegateRecord ?? null, isWritable: true },
    token: { value: input.token ?? null, isWritable: true },
    tokenOwner: { value: input.tokenOwner ?? null, isWritable: false },
    destination: { value: input.destination ?? null, isWritable: true },
    destinationOwner: {
      value: input.destinationOwner ?? null,
      isWritable: false,
    },
    mint: { value: input.mint ?? null, isWritable: false },
    metadata: { value: input.metadata ?? null, isWritable: true },
    masterEdition: { value: input.masterEdition ?? null, isWritable: false },
    splTokenProgram: {
      value: input.splTokenProgram ?? null,
      isWritable: false,
    },
    splAtaProgram: { value: input.splAtaProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    sysvarInstructions: {
      value: input.sysvarInstructions ?? null,
      isWritable: false,
    },
    authorizationRulesProgram: {
      value: input.authorizationRulesProgram ?? null,
      isWritable: false,
    },
    authorizationRules: {
      value: input.authorizationRules ?? null,
      isWritable: false,
    },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!args.tokenStandard) {
    args.tokenStandard = TokenStandard.NonFungible;
  }
  if (!accounts.masterEdition.value) {
    accounts.masterEdition = {
      ...accounts.masterEdition,
      ...(await resolveMasterEditionFromTokenStandard(
        context,
        accounts,
        args,
        programAddress,
        false
      )),
    };
  }
  if (!accounts.splTokenProgram.value) {
    accounts.splTokenProgram.value = await getProgramAddress(
      context,
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    accounts.splTokenProgram.isWritable = false;
  }
  if (!accounts.splAtaProgram.value) {
    accounts.splAtaProgram.value = await getProgramAddress(
      context,
      'splAssociatedToken',
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
    );
    accounts.splAtaProgram.isWritable = false;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = await getProgramAddress(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    );
    accounts.systemProgram.isWritable = false;
  }
  if (!accounts.sysvarInstructions.value) {
    accounts.sysvarInstructions.value =
      'Sysvar1nstructions1111111111111111111111111' as Base58EncodedAddress<'Sysvar1nstructions1111111111111111111111111'>;
  }

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
    instruction: transferInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as TransferInstructionDataArgs,
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
