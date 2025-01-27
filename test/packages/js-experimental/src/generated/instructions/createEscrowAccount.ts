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
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type CreateEscrowAccountInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEscrow extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountEscrow extends string
        ? WritableAccount<TAccountEscrow>
        : TAccountEscrow,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountTokenAccount extends string
        ? ReadonlyAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountEdition extends string
        ? ReadonlyAccount<TAccountEdition>
        : TAccountEdition,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority,
      ...TRemainingAccounts
    ]
  >;

export type CreateEscrowAccountInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEscrow extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountEscrow extends string
        ? WritableAccount<TAccountEscrow>
        : TAccountEscrow,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountTokenAccount extends string
        ? ReadonlyAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountEdition extends string
        ? ReadonlyAccount<TAccountEdition>
        : TAccountEdition,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      ...TRemainingAccounts
    ]
  >;

export type CreateEscrowAccountInstructionData = { discriminator: number };

export type CreateEscrowAccountInstructionDataArgs = {};

export function getCreateEscrowAccountInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 38 })
  ) satisfies Encoder<CreateEscrowAccountInstructionDataArgs>;
}

export function getCreateEscrowAccountInstructionDataDecoder() {
  return getStructDecoder<CreateEscrowAccountInstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<CreateEscrowAccountInstructionData>;
}

export function getCreateEscrowAccountInstructionDataCodec(): Codec<
  CreateEscrowAccountInstructionDataArgs,
  CreateEscrowAccountInstructionData
> {
  return combineCodec(
    getCreateEscrowAccountInstructionDataEncoder(),
    getCreateEscrowAccountInstructionDataDecoder()
  );
}

export type CreateEscrowAccountInput<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string
> = {
  /** Escrow account */
  escrow: Address<TAccountEscrow>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Mint account */
  mint: Address<TAccountMint>;
  /** Token account of the token */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Edition account */
  edition: Address<TAccountEdition>;
  /** Wallet paying for the transaction and new account */
  payer: Address<TAccountPayer>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
  /** Authority/creator of the escrow account */
  authority?: Address<TAccountAuthority>;
};

export type CreateEscrowAccountInputWithSigners<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string
> = {
  /** Escrow account */
  escrow: Address<TAccountEscrow>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Mint account */
  mint: Address<TAccountMint>;
  /** Token account of the token */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Edition account */
  edition: Address<TAccountEdition>;
  /** Wallet paying for the transaction and new account */
  payer: TransactionSigner<TAccountPayer>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
  /** Authority/creator of the escrow account */
  authority?: TransactionSigner<TAccountAuthority>;
};

export function getCreateEscrowAccountInstruction<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: CreateEscrowAccountInputWithSigners<
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthority
  >
): CreateEscrowAccountInstructionWithSigners<
  TProgram,
  TAccountEscrow,
  TAccountMetadata,
  TAccountMint,
  TAccountTokenAccount,
  TAccountEdition,
  TAccountPayer,
  TAccountSystemProgram,
  TAccountSysvarInstructions,
  TAccountAuthority
>;
export function getCreateEscrowAccountInstruction<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: CreateEscrowAccountInput<
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthority
  >
): CreateEscrowAccountInstruction<
  TProgram,
  TAccountEscrow,
  TAccountMetadata,
  TAccountMint,
  TAccountTokenAccount,
  TAccountEdition,
  TAccountPayer,
  TAccountSystemProgram,
  TAccountSysvarInstructions,
  TAccountAuthority
>;
export function getCreateEscrowAccountInstruction<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: CreateEscrowAccountInput<
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthority
  >
): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCreateEscrowAccountInstructionRaw<
      TProgram,
      TAccountEscrow,
      TAccountMetadata,
      TAccountMint,
      TAccountTokenAccount,
      TAccountEdition,
      TAccountPayer,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    escrow: { value: input.escrow ?? null, isWritable: true },
    metadata: { value: input.metadata ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    tokenAccount: { value: input.tokenAccount ?? null, isWritable: false },
    edition: { value: input.edition ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    sysvarInstructions: {
      value: input.sysvarInstructions ?? null,
      isWritable: false,
    },
    authority: { value: input.authority ?? null, isWritable: false },
  };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
    accounts.systemProgram.isWritable = false;
  }
  if (!accounts.sysvarInstructions.value) {
    accounts.sysvarInstructions.value =
      'Sysvar1nstructions1111111111111111111111111' as Address<'Sysvar1nstructions1111111111111111111111111'>;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getCreateEscrowAccountInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export function getCreateEscrowAccountInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEscrow extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    escrow: TAccountEscrow extends string
      ? Address<TAccountEscrow>
      : TAccountEscrow;
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    tokenAccount: TAccountTokenAccount extends string
      ? Address<TAccountTokenAccount>
      : TAccountTokenAccount;
    edition: TAccountEdition extends string
      ? Address<TAccountEdition>
      : TAccountEdition;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    sysvarInstructions?: TAccountSysvarInstructions extends string
      ? Address<TAccountSysvarInstructions>
      : TAccountSysvarInstructions;
    authority?: TAccountAuthority extends string
      ? Address<TAccountAuthority>
      : TAccountAuthority;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.escrow, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.tokenAccount, AccountRole.READONLY),
      accountMetaWithDefault(accounts.edition, AccountRole.READONLY),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>,
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
        accounts.authority ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY_SIGNER
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getCreateEscrowAccountInstructionDataEncoder().encode({}),
    programAddress,
  } as CreateEscrowAccountInstruction<
    TProgram,
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthority,
    TRemainingAccounts
  >;
}

export type ParsedCreateEscrowAccountInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Escrow account */
    escrow: TAccountMetas[0];
    /** Metadata account */
    metadata: TAccountMetas[1];
    /** Mint account */
    mint: TAccountMetas[2];
    /** Token account of the token */
    tokenAccount: TAccountMetas[3];
    /** Edition account */
    edition: TAccountMetas[4];
    /** Wallet paying for the transaction and new account */
    payer: TAccountMetas[5];
    /** System program */
    systemProgram: TAccountMetas[6];
    /** Instructions sysvar account */
    sysvarInstructions: TAccountMetas[7];
    /** Authority/creator of the escrow account */
    authority?: TAccountMetas[8] | undefined;
  };
  data: CreateEscrowAccountInstructionData;
};

export function parseCreateEscrowAccountInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateEscrowAccountInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 9) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  const getNextOptionalAccount = () => {
    const accountMeta = getNextAccount();
    return accountMeta.address === 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      escrow: getNextAccount(),
      metadata: getNextAccount(),
      mint: getNextAccount(),
      tokenAccount: getNextAccount(),
      edition: getNextAccount(),
      payer: getNextAccount(),
      systemProgram: getNextAccount(),
      sysvarInstructions: getNextAccount(),
      authority: getNextOptionalAccount(),
    },
    data: getCreateEscrowAccountInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
