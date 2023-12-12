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
  Context,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';
import {
  MintNewEditionFromMasterEditionViaTokenArgs,
  MintNewEditionFromMasterEditionViaTokenArgsArgs,
  getMintNewEditionFromMasterEditionViaTokenArgsDecoder,
  getMintNewEditionFromMasterEditionViaTokenArgsEncoder,
} from '../types';

export type MintNewEditionFromMasterEditionViaTokenInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountNewMetadata extends string | IAccountMeta<string> = string,
  TAccountNewEdition extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountNewMint extends string | IAccountMeta<string> = string,
  TAccountEditionMarkPda extends string | IAccountMeta<string> = string,
  TAccountNewMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountTokenAccountOwner extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountNewMetadataUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountNewMetadata extends string
        ? WritableAccount<TAccountNewMetadata>
        : TAccountNewMetadata,
      TAccountNewEdition extends string
        ? WritableAccount<TAccountNewEdition>
        : TAccountNewEdition,
      TAccountMasterEdition extends string
        ? WritableAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountNewMint extends string
        ? WritableAccount<TAccountNewMint>
        : TAccountNewMint,
      TAccountEditionMarkPda extends string
        ? WritableAccount<TAccountEditionMarkPda>
        : TAccountEditionMarkPda,
      TAccountNewMintAuthority extends string
        ? ReadonlySignerAccount<TAccountNewMintAuthority>
        : TAccountNewMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountTokenAccountOwner extends string
        ? ReadonlySignerAccount<TAccountTokenAccountOwner>
        : TAccountTokenAccountOwner,
      TAccountTokenAccount extends string
        ? ReadonlyAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountNewMetadataUpdateAuthority extends string
        ? ReadonlyAccount<TAccountNewMetadataUpdateAuthority>
        : TAccountNewMetadataUpdateAuthority,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts
    ]
  >;

export type MintNewEditionFromMasterEditionViaTokenInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountNewMetadata extends string | IAccountMeta<string> = string,
  TAccountNewEdition extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountNewMint extends string | IAccountMeta<string> = string,
  TAccountEditionMarkPda extends string | IAccountMeta<string> = string,
  TAccountNewMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountTokenAccountOwner extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountNewMetadataUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountNewMetadata extends string
        ? WritableAccount<TAccountNewMetadata>
        : TAccountNewMetadata,
      TAccountNewEdition extends string
        ? WritableAccount<TAccountNewEdition>
        : TAccountNewEdition,
      TAccountMasterEdition extends string
        ? WritableAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountNewMint extends string
        ? WritableAccount<TAccountNewMint>
        : TAccountNewMint,
      TAccountEditionMarkPda extends string
        ? WritableAccount<TAccountEditionMarkPda>
        : TAccountEditionMarkPda,
      TAccountNewMintAuthority extends string
        ? ReadonlySignerAccount<TAccountNewMintAuthority> &
            IAccountSignerMeta<TAccountNewMintAuthority>
        : TAccountNewMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountTokenAccountOwner extends string
        ? ReadonlySignerAccount<TAccountTokenAccountOwner> &
            IAccountSignerMeta<TAccountTokenAccountOwner>
        : TAccountTokenAccountOwner,
      TAccountTokenAccount extends string
        ? ReadonlyAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountNewMetadataUpdateAuthority extends string
        ? ReadonlyAccount<TAccountNewMetadataUpdateAuthority>
        : TAccountNewMetadataUpdateAuthority,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts
    ]
  >;

export type MintNewEditionFromMasterEditionViaTokenInstructionData = {
  discriminator: number;
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgs;
};

export type MintNewEditionFromMasterEditionViaTokenInstructionDataArgs = {
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgsArgs;
};

export function getMintNewEditionFromMasterEditionViaTokenInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgsArgs;
    }>([
      ['discriminator', getU8Encoder()],
      [
        'mintNewEditionFromMasterEditionViaTokenArgs',
        getMintNewEditionFromMasterEditionViaTokenArgsEncoder(),
      ],
    ]),
    (value) => ({ ...value, discriminator: 11 })
  ) satisfies Encoder<MintNewEditionFromMasterEditionViaTokenInstructionDataArgs>;
}

export function getMintNewEditionFromMasterEditionViaTokenInstructionDataDecoder() {
  return getStructDecoder<MintNewEditionFromMasterEditionViaTokenInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      [
        'mintNewEditionFromMasterEditionViaTokenArgs',
        getMintNewEditionFromMasterEditionViaTokenArgsDecoder(),
      ],
    ]
  ) satisfies Decoder<MintNewEditionFromMasterEditionViaTokenInstructionData>;
}

export function getMintNewEditionFromMasterEditionViaTokenInstructionDataCodec(): Codec<
  MintNewEditionFromMasterEditionViaTokenInstructionDataArgs,
  MintNewEditionFromMasterEditionViaTokenInstructionData
> {
  return combineCodec(
    getMintNewEditionFromMasterEditionViaTokenInstructionDataEncoder(),
    getMintNewEditionFromMasterEditionViaTokenInstructionDataDecoder()
  );
}

export type MintNewEditionFromMasterEditionViaTokenInput<
  TAccountNewMetadata extends string,
  TAccountNewEdition extends string,
  TAccountMasterEdition extends string,
  TAccountNewMint extends string,
  TAccountEditionMarkPda extends string,
  TAccountNewMintAuthority extends string,
  TAccountPayer extends string,
  TAccountTokenAccountOwner extends string,
  TAccountTokenAccount extends string,
  TAccountNewMetadataUpdateAuthority extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** New Metadata key (pda of ['metadata', program id, mint id]) */
  newMetadata: Address<TAccountNewMetadata>;
  /** New Edition (pda of ['metadata', program id, mint id, 'edition']) */
  newEdition: Address<TAccountNewEdition>;
  /** Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
  masterEdition: Address<TAccountMasterEdition>;
  /** Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
  newMint: Address<TAccountNewMint>;
  /** Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE). */
  editionMarkPda: Address<TAccountEditionMarkPda>;
  /** Mint authority of new mint */
  newMintAuthority: Address<TAccountNewMintAuthority>;
  /** payer */
  payer?: Address<TAccountPayer>;
  /** owner of token account containing master token (#8) */
  tokenAccountOwner: Address<TAccountTokenAccountOwner>;
  /** token account containing token from master metadata mint */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Update authority info for new metadata */
  newMetadataUpdateAuthority: Address<TAccountNewMetadataUpdateAuthority>;
  /** Master record metadata account */
  metadata: Address<TAccountMetadata>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenInstructionDataArgs['mintNewEditionFromMasterEditionViaTokenArgs'];
};

export type MintNewEditionFromMasterEditionViaTokenInputWithSigners<
  TAccountNewMetadata extends string,
  TAccountNewEdition extends string,
  TAccountMasterEdition extends string,
  TAccountNewMint extends string,
  TAccountEditionMarkPda extends string,
  TAccountNewMintAuthority extends string,
  TAccountPayer extends string,
  TAccountTokenAccountOwner extends string,
  TAccountTokenAccount extends string,
  TAccountNewMetadataUpdateAuthority extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** New Metadata key (pda of ['metadata', program id, mint id]) */
  newMetadata: Address<TAccountNewMetadata>;
  /** New Edition (pda of ['metadata', program id, mint id, 'edition']) */
  newEdition: Address<TAccountNewEdition>;
  /** Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
  masterEdition: Address<TAccountMasterEdition>;
  /** Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
  newMint: Address<TAccountNewMint>;
  /** Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE). */
  editionMarkPda: Address<TAccountEditionMarkPda>;
  /** Mint authority of new mint */
  newMintAuthority: TransactionSigner<TAccountNewMintAuthority>;
  /** payer */
  payer?: TransactionSigner<TAccountPayer>;
  /** owner of token account containing master token (#8) */
  tokenAccountOwner: TransactionSigner<TAccountTokenAccountOwner>;
  /** token account containing token from master metadata mint */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Update authority info for new metadata */
  newMetadataUpdateAuthority: Address<TAccountNewMetadataUpdateAuthority>;
  /** Master record metadata account */
  metadata: Address<TAccountMetadata>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenInstructionDataArgs['mintNewEditionFromMasterEditionViaTokenArgs'];
};

export function getMintNewEditionFromMasterEditionViaTokenInstruction<
  TAccountNewMetadata extends string,
  TAccountNewEdition extends string,
  TAccountMasterEdition extends string,
  TAccountNewMint extends string,
  TAccountEditionMarkPda extends string,
  TAccountNewMintAuthority extends string,
  TAccountPayer extends string,
  TAccountTokenAccountOwner extends string,
  TAccountTokenAccount extends string,
  TAccountNewMetadataUpdateAuthority extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: MintNewEditionFromMasterEditionViaTokenInputWithSigners<
    TAccountNewMetadata,
    TAccountNewEdition,
    TAccountMasterEdition,
    TAccountNewMint,
    TAccountEditionMarkPda,
    TAccountNewMintAuthority,
    TAccountPayer,
    TAccountTokenAccountOwner,
    TAccountTokenAccount,
    TAccountNewMetadataUpdateAuthority,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): MintNewEditionFromMasterEditionViaTokenInstructionWithSigners<
  TProgram,
  TAccountNewMetadata,
  TAccountNewEdition,
  TAccountMasterEdition,
  TAccountNewMint,
  TAccountEditionMarkPda,
  TAccountNewMintAuthority,
  TAccountPayer,
  TAccountTokenAccountOwner,
  TAccountTokenAccount,
  TAccountNewMetadataUpdateAuthority,
  TAccountMetadata,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
>;
export function getMintNewEditionFromMasterEditionViaTokenInstruction<
  TAccountNewMetadata extends string,
  TAccountNewEdition extends string,
  TAccountMasterEdition extends string,
  TAccountNewMint extends string,
  TAccountEditionMarkPda extends string,
  TAccountNewMintAuthority extends string,
  TAccountPayer extends string,
  TAccountTokenAccountOwner extends string,
  TAccountTokenAccount extends string,
  TAccountNewMetadataUpdateAuthority extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: MintNewEditionFromMasterEditionViaTokenInput<
    TAccountNewMetadata,
    TAccountNewEdition,
    TAccountMasterEdition,
    TAccountNewMint,
    TAccountEditionMarkPda,
    TAccountNewMintAuthority,
    TAccountPayer,
    TAccountTokenAccountOwner,
    TAccountTokenAccount,
    TAccountNewMetadataUpdateAuthority,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): MintNewEditionFromMasterEditionViaTokenInstruction<
  TProgram,
  TAccountNewMetadata,
  TAccountNewEdition,
  TAccountMasterEdition,
  TAccountNewMint,
  TAccountEditionMarkPda,
  TAccountNewMintAuthority,
  TAccountPayer,
  TAccountTokenAccountOwner,
  TAccountTokenAccount,
  TAccountNewMetadataUpdateAuthority,
  TAccountMetadata,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
>;
export function getMintNewEditionFromMasterEditionViaTokenInstruction<
  TAccountNewMetadata extends string,
  TAccountNewEdition extends string,
  TAccountMasterEdition extends string,
  TAccountNewMint extends string,
  TAccountEditionMarkPda extends string,
  TAccountNewMintAuthority extends string,
  TAccountPayer extends string,
  TAccountTokenAccountOwner extends string,
  TAccountTokenAccount extends string,
  TAccountNewMetadataUpdateAuthority extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: MintNewEditionFromMasterEditionViaTokenInputWithSigners<
    TAccountNewMetadata,
    TAccountNewEdition,
    TAccountMasterEdition,
    TAccountNewMint,
    TAccountEditionMarkPda,
    TAccountNewMintAuthority,
    TAccountPayer,
    TAccountTokenAccountOwner,
    TAccountTokenAccount,
    TAccountNewMetadataUpdateAuthority,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): MintNewEditionFromMasterEditionViaTokenInstructionWithSigners<
  TProgram,
  TAccountNewMetadata,
  TAccountNewEdition,
  TAccountMasterEdition,
  TAccountNewMint,
  TAccountEditionMarkPda,
  TAccountNewMintAuthority,
  TAccountPayer,
  TAccountTokenAccountOwner,
  TAccountTokenAccount,
  TAccountNewMetadataUpdateAuthority,
  TAccountMetadata,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
>;
export function getMintNewEditionFromMasterEditionViaTokenInstruction<
  TAccountNewMetadata extends string,
  TAccountNewEdition extends string,
  TAccountMasterEdition extends string,
  TAccountNewMint extends string,
  TAccountEditionMarkPda extends string,
  TAccountNewMintAuthority extends string,
  TAccountPayer extends string,
  TAccountTokenAccountOwner extends string,
  TAccountTokenAccount extends string,
  TAccountNewMetadataUpdateAuthority extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: MintNewEditionFromMasterEditionViaTokenInput<
    TAccountNewMetadata,
    TAccountNewEdition,
    TAccountMasterEdition,
    TAccountNewMint,
    TAccountEditionMarkPda,
    TAccountNewMintAuthority,
    TAccountPayer,
    TAccountTokenAccountOwner,
    TAccountTokenAccount,
    TAccountNewMetadataUpdateAuthority,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): MintNewEditionFromMasterEditionViaTokenInstruction<
  TProgram,
  TAccountNewMetadata,
  TAccountNewEdition,
  TAccountMasterEdition,
  TAccountNewMint,
  TAccountEditionMarkPda,
  TAccountNewMintAuthority,
  TAccountPayer,
  TAccountTokenAccountOwner,
  TAccountTokenAccount,
  TAccountNewMetadataUpdateAuthority,
  TAccountMetadata,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
>;
export function getMintNewEditionFromMasterEditionViaTokenInstruction<
  TAccountNewMetadata extends string,
  TAccountNewEdition extends string,
  TAccountMasterEdition extends string,
  TAccountNewMint extends string,
  TAccountEditionMarkPda extends string,
  TAccountNewMintAuthority extends string,
  TAccountPayer extends string,
  TAccountTokenAccountOwner extends string,
  TAccountTokenAccount extends string,
  TAccountNewMetadataUpdateAuthority extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | MintNewEditionFromMasterEditionViaTokenInput<
        TAccountNewMetadata,
        TAccountNewEdition,
        TAccountMasterEdition,
        TAccountNewMint,
        TAccountEditionMarkPda,
        TAccountNewMintAuthority,
        TAccountPayer,
        TAccountTokenAccountOwner,
        TAccountTokenAccount,
        TAccountNewMetadataUpdateAuthority,
        TAccountMetadata,
        TAccountTokenProgram,
        TAccountSystemProgram,
        TAccountRent
      >,
  rawInput?: MintNewEditionFromMasterEditionViaTokenInput<
    TAccountNewMetadata,
    TAccountNewEdition,
    TAccountMasterEdition,
    TAccountNewMint,
    TAccountEditionMarkPda,
    TAccountNewMintAuthority,
    TAccountPayer,
    TAccountTokenAccountOwner,
    TAccountTokenAccount,
    TAccountNewMetadataUpdateAuthority,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): IInstruction {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as MintNewEditionFromMasterEditionViaTokenInput<
    TAccountNewMetadata,
    TAccountNewEdition,
    TAccountMasterEdition,
    TAccountNewMint,
    TAccountEditionMarkPda,
    TAccountNewMintAuthority,
    TAccountPayer,
    TAccountTokenAccountOwner,
    TAccountTokenAccount,
    TAccountNewMetadataUpdateAuthority,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getMintNewEditionFromMasterEditionViaTokenInstructionRaw<
      TProgram,
      TAccountNewMetadata,
      TAccountNewEdition,
      TAccountMasterEdition,
      TAccountNewMint,
      TAccountEditionMarkPda,
      TAccountNewMintAuthority,
      TAccountPayer,
      TAccountTokenAccountOwner,
      TAccountTokenAccount,
      TAccountNewMetadataUpdateAuthority,
      TAccountMetadata,
      TAccountTokenProgram,
      TAccountSystemProgram,
      TAccountRent
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    newMetadata: { value: input.newMetadata ?? null, isWritable: true },
    newEdition: { value: input.newEdition ?? null, isWritable: true },
    masterEdition: { value: input.masterEdition ?? null, isWritable: true },
    newMint: { value: input.newMint ?? null, isWritable: true },
    editionMarkPda: { value: input.editionMarkPda ?? null, isWritable: true },
    newMintAuthority: {
      value: input.newMintAuthority ?? null,
      isWritable: false,
    },
    payer: { value: input.payer ?? null, isWritable: true },
    tokenAccountOwner: {
      value: input.tokenAccountOwner ?? null,
      isWritable: false,
    },
    tokenAccount: { value: input.tokenAccount ?? null, isWritable: false },
    newMetadataUpdateAuthority: {
      value: input.newMetadataUpdateAuthority ?? null,
      isWritable: false,
    },
    metadata: { value: input.metadata ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = getProgramAddress(
      context,
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    accounts.tokenProgram.isWritable = false;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = getProgramAddress(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    );
    accounts.systemProgram.isWritable = false;
  }

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
    ...getMintNewEditionFromMasterEditionViaTokenInstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as MintNewEditionFromMasterEditionViaTokenInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}

export function getMintNewEditionFromMasterEditionViaTokenInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountNewMetadata extends string | IAccountMeta<string> = string,
  TAccountNewEdition extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountNewMint extends string | IAccountMeta<string> = string,
  TAccountEditionMarkPda extends string | IAccountMeta<string> = string,
  TAccountNewMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountTokenAccountOwner extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountNewMetadataUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    newMetadata: TAccountNewMetadata extends string
      ? Address<TAccountNewMetadata>
      : TAccountNewMetadata;
    newEdition: TAccountNewEdition extends string
      ? Address<TAccountNewEdition>
      : TAccountNewEdition;
    masterEdition: TAccountMasterEdition extends string
      ? Address<TAccountMasterEdition>
      : TAccountMasterEdition;
    newMint: TAccountNewMint extends string
      ? Address<TAccountNewMint>
      : TAccountNewMint;
    editionMarkPda: TAccountEditionMarkPda extends string
      ? Address<TAccountEditionMarkPda>
      : TAccountEditionMarkPda;
    newMintAuthority: TAccountNewMintAuthority extends string
      ? Address<TAccountNewMintAuthority>
      : TAccountNewMintAuthority;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    tokenAccountOwner: TAccountTokenAccountOwner extends string
      ? Address<TAccountTokenAccountOwner>
      : TAccountTokenAccountOwner;
    tokenAccount: TAccountTokenAccount extends string
      ? Address<TAccountTokenAccount>
      : TAccountTokenAccount;
    newMetadataUpdateAuthority: TAccountNewMetadataUpdateAuthority extends string
      ? Address<TAccountNewMetadataUpdateAuthority>
      : TAccountNewMetadataUpdateAuthority;
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    tokenProgram?: TAccountTokenProgram extends string
      ? Address<TAccountTokenProgram>
      : TAccountTokenProgram;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    rent?: TAccountRent extends string ? Address<TAccountRent> : TAccountRent;
  },
  args: MintNewEditionFromMasterEditionViaTokenInstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.newMetadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.newEdition, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.masterEdition, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.newMint, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.editionMarkPda, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.newMintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(
        accounts.tokenAccountOwner,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.tokenAccount, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.newMetadataUpdateAuthority,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(accounts.metadata, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.tokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.rent ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getMintNewEditionFromMasterEditionViaTokenInstructionDataEncoder().encode(
      args
    ),
    programAddress,
  } as MintNewEditionFromMasterEditionViaTokenInstruction<
    TProgram,
    TAccountNewMetadata,
    TAccountNewEdition,
    TAccountMasterEdition,
    TAccountNewMint,
    TAccountEditionMarkPda,
    TAccountNewMintAuthority,
    TAccountPayer,
    TAccountTokenAccountOwner,
    TAccountTokenAccount,
    TAccountNewMetadataUpdateAuthority,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TRemainingAccounts
  >;
}