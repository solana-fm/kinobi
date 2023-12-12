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

export type MintFromCandyMachineInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthorityPda extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountNftMint extends string | IAccountMeta<string> = string,
  TAccountNftMintAuthority extends string | IAccountMeta<string> = string,
  TAccountNftMetadata extends string | IAccountMeta<string> = string,
  TAccountNftMasterEdition extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionMasterEdition extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountTokenMetadataProgram extends
    | string
    | IAccountMeta<string> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRecentSlothashes extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCandyMachine extends string
        ? WritableAccount<TAccountCandyMachine>
        : TAccountCandyMachine,
      TAccountAuthorityPda extends string
        ? WritableAccount<TAccountAuthorityPda>
        : TAccountAuthorityPda,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountNftMint extends string
        ? WritableAccount<TAccountNftMint>
        : TAccountNftMint,
      TAccountNftMintAuthority extends string
        ? ReadonlySignerAccount<TAccountNftMintAuthority>
        : TAccountNftMintAuthority,
      TAccountNftMetadata extends string
        ? WritableAccount<TAccountNftMetadata>
        : TAccountNftMetadata,
      TAccountNftMasterEdition extends string
        ? WritableAccount<TAccountNftMasterEdition>
        : TAccountNftMasterEdition,
      TAccountCollectionAuthorityRecord extends string
        ? ReadonlyAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountCollectionMetadata extends string
        ? WritableAccount<TAccountCollectionMetadata>
        : TAccountCollectionMetadata,
      TAccountCollectionMasterEdition extends string
        ? ReadonlyAccount<TAccountCollectionMasterEdition>
        : TAccountCollectionMasterEdition,
      TAccountCollectionUpdateAuthority extends string
        ? ReadonlyAccount<TAccountCollectionUpdateAuthority>
        : TAccountCollectionUpdateAuthority,
      TAccountTokenMetadataProgram extends string
        ? ReadonlyAccount<TAccountTokenMetadataProgram>
        : TAccountTokenMetadataProgram,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRecentSlothashes extends string
        ? ReadonlyAccount<TAccountRecentSlothashes>
        : TAccountRecentSlothashes,
      ...TRemainingAccounts
    ]
  >;

export type MintFromCandyMachineInstructionWithSigners<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthorityPda extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountNftMint extends string | IAccountMeta<string> = string,
  TAccountNftMintAuthority extends string | IAccountMeta<string> = string,
  TAccountNftMetadata extends string | IAccountMeta<string> = string,
  TAccountNftMasterEdition extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionMasterEdition extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountTokenMetadataProgram extends
    | string
    | IAccountMeta<string> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRecentSlothashes extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCandyMachine extends string
        ? WritableAccount<TAccountCandyMachine>
        : TAccountCandyMachine,
      TAccountAuthorityPda extends string
        ? WritableAccount<TAccountAuthorityPda>
        : TAccountAuthorityPda,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority> &
            IAccountSignerMeta<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountNftMint extends string
        ? WritableAccount<TAccountNftMint>
        : TAccountNftMint,
      TAccountNftMintAuthority extends string
        ? ReadonlySignerAccount<TAccountNftMintAuthority> &
            IAccountSignerMeta<TAccountNftMintAuthority>
        : TAccountNftMintAuthority,
      TAccountNftMetadata extends string
        ? WritableAccount<TAccountNftMetadata>
        : TAccountNftMetadata,
      TAccountNftMasterEdition extends string
        ? WritableAccount<TAccountNftMasterEdition>
        : TAccountNftMasterEdition,
      TAccountCollectionAuthorityRecord extends string
        ? ReadonlyAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountCollectionMetadata extends string
        ? WritableAccount<TAccountCollectionMetadata>
        : TAccountCollectionMetadata,
      TAccountCollectionMasterEdition extends string
        ? ReadonlyAccount<TAccountCollectionMasterEdition>
        : TAccountCollectionMasterEdition,
      TAccountCollectionUpdateAuthority extends string
        ? ReadonlyAccount<TAccountCollectionUpdateAuthority>
        : TAccountCollectionUpdateAuthority,
      TAccountTokenMetadataProgram extends string
        ? ReadonlyAccount<TAccountTokenMetadataProgram>
        : TAccountTokenMetadataProgram,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRecentSlothashes extends string
        ? ReadonlyAccount<TAccountRecentSlothashes>
        : TAccountRecentSlothashes,
      ...TRemainingAccounts
    ]
  >;

export type MintFromCandyMachineInstructionData = {
  discriminator: Array<number>;
};

export type MintFromCandyMachineInstructionDataArgs = {};

export function getMintFromCandyMachineInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: Array<number> }>([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
    ]),
    (value) => ({
      ...value,
      discriminator: [51, 57, 225, 47, 182, 146, 137, 166],
    })
  ) satisfies Encoder<MintFromCandyMachineInstructionDataArgs>;
}

export function getMintFromCandyMachineInstructionDataDecoder() {
  return getStructDecoder<MintFromCandyMachineInstructionData>([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
  ]) satisfies Decoder<MintFromCandyMachineInstructionData>;
}

export function getMintFromCandyMachineInstructionDataCodec(): Codec<
  MintFromCandyMachineInstructionDataArgs,
  MintFromCandyMachineInstructionData
> {
  return combineCodec(
    getMintFromCandyMachineInstructionDataEncoder(),
    getMintFromCandyMachineInstructionDataDecoder()
  );
}

export type MintFromCandyMachineInput<
  TAccountCandyMachine extends string,
  TAccountAuthorityPda extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountNftMint extends string,
  TAccountNftMintAuthority extends string,
  TAccountNftMetadata extends string,
  TAccountNftMasterEdition extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionMasterEdition extends string,
  TAccountCollectionUpdateAuthority extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRecentSlothashes extends string
> = {
  candyMachine: Address<TAccountCandyMachine>;
  authorityPda: Address<TAccountAuthorityPda>;
  mintAuthority: Address<TAccountMintAuthority>;
  payer?: Address<TAccountPayer>;
  nftMint: Address<TAccountNftMint>;
  nftMintAuthority?: Address<TAccountNftMintAuthority>;
  nftMetadata: Address<TAccountNftMetadata>;
  nftMasterEdition: Address<TAccountNftMasterEdition>;
  collectionAuthorityRecord: Address<TAccountCollectionAuthorityRecord>;
  collectionMint: Address<TAccountCollectionMint>;
  collectionMetadata: Address<TAccountCollectionMetadata>;
  collectionMasterEdition: Address<TAccountCollectionMasterEdition>;
  collectionUpdateAuthority: Address<TAccountCollectionUpdateAuthority>;
  tokenMetadataProgram?: Address<TAccountTokenMetadataProgram>;
  tokenProgram?: Address<TAccountTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  recentSlothashes: Address<TAccountRecentSlothashes>;
};

export type MintFromCandyMachineInputWithSigners<
  TAccountCandyMachine extends string,
  TAccountAuthorityPda extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountNftMint extends string,
  TAccountNftMintAuthority extends string,
  TAccountNftMetadata extends string,
  TAccountNftMasterEdition extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionMasterEdition extends string,
  TAccountCollectionUpdateAuthority extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRecentSlothashes extends string
> = {
  candyMachine: Address<TAccountCandyMachine>;
  authorityPda: Address<TAccountAuthorityPda>;
  mintAuthority: TransactionSigner<TAccountMintAuthority>;
  payer?: TransactionSigner<TAccountPayer>;
  nftMint: Address<TAccountNftMint>;
  nftMintAuthority?: TransactionSigner<TAccountNftMintAuthority>;
  nftMetadata: Address<TAccountNftMetadata>;
  nftMasterEdition: Address<TAccountNftMasterEdition>;
  collectionAuthorityRecord: Address<TAccountCollectionAuthorityRecord>;
  collectionMint: Address<TAccountCollectionMint>;
  collectionMetadata: Address<TAccountCollectionMetadata>;
  collectionMasterEdition: Address<TAccountCollectionMasterEdition>;
  collectionUpdateAuthority: Address<TAccountCollectionUpdateAuthority>;
  tokenMetadataProgram?: Address<TAccountTokenMetadataProgram>;
  tokenProgram?: Address<TAccountTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  recentSlothashes: Address<TAccountRecentSlothashes>;
};

export function getMintFromCandyMachineInstruction<
  TAccountCandyMachine extends string,
  TAccountAuthorityPda extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountNftMint extends string,
  TAccountNftMintAuthority extends string,
  TAccountNftMetadata extends string,
  TAccountNftMasterEdition extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionMasterEdition extends string,
  TAccountCollectionUpdateAuthority extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRecentSlothashes extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: MintFromCandyMachineInputWithSigners<
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountNftMint,
    TAccountNftMintAuthority,
    TAccountNftMetadata,
    TAccountNftMasterEdition,
    TAccountCollectionAuthorityRecord,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRecentSlothashes
  >
): MintFromCandyMachineInstructionWithSigners<
  TProgram,
  TAccountCandyMachine,
  TAccountAuthorityPda,
  TAccountMintAuthority,
  TAccountPayer,
  TAccountNftMint,
  TAccountNftMintAuthority,
  TAccountNftMetadata,
  TAccountNftMasterEdition,
  TAccountCollectionAuthorityRecord,
  TAccountCollectionMint,
  TAccountCollectionMetadata,
  TAccountCollectionMasterEdition,
  TAccountCollectionUpdateAuthority,
  TAccountTokenMetadataProgram,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRecentSlothashes
>;
export function getMintFromCandyMachineInstruction<
  TAccountCandyMachine extends string,
  TAccountAuthorityPda extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountNftMint extends string,
  TAccountNftMintAuthority extends string,
  TAccountNftMetadata extends string,
  TAccountNftMasterEdition extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionMasterEdition extends string,
  TAccountCollectionUpdateAuthority extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRecentSlothashes extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: MintFromCandyMachineInput<
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountNftMint,
    TAccountNftMintAuthority,
    TAccountNftMetadata,
    TAccountNftMasterEdition,
    TAccountCollectionAuthorityRecord,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRecentSlothashes
  >
): MintFromCandyMachineInstruction<
  TProgram,
  TAccountCandyMachine,
  TAccountAuthorityPda,
  TAccountMintAuthority,
  TAccountPayer,
  TAccountNftMint,
  TAccountNftMintAuthority,
  TAccountNftMetadata,
  TAccountNftMasterEdition,
  TAccountCollectionAuthorityRecord,
  TAccountCollectionMint,
  TAccountCollectionMetadata,
  TAccountCollectionMasterEdition,
  TAccountCollectionUpdateAuthority,
  TAccountTokenMetadataProgram,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRecentSlothashes
>;
export function getMintFromCandyMachineInstruction<
  TAccountCandyMachine extends string,
  TAccountAuthorityPda extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountNftMint extends string,
  TAccountNftMintAuthority extends string,
  TAccountNftMetadata extends string,
  TAccountNftMasterEdition extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionMasterEdition extends string,
  TAccountCollectionUpdateAuthority extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRecentSlothashes extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  input: MintFromCandyMachineInputWithSigners<
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountNftMint,
    TAccountNftMintAuthority,
    TAccountNftMetadata,
    TAccountNftMasterEdition,
    TAccountCollectionAuthorityRecord,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRecentSlothashes
  >
): MintFromCandyMachineInstructionWithSigners<
  TProgram,
  TAccountCandyMachine,
  TAccountAuthorityPda,
  TAccountMintAuthority,
  TAccountPayer,
  TAccountNftMint,
  TAccountNftMintAuthority,
  TAccountNftMetadata,
  TAccountNftMasterEdition,
  TAccountCollectionAuthorityRecord,
  TAccountCollectionMint,
  TAccountCollectionMetadata,
  TAccountCollectionMasterEdition,
  TAccountCollectionUpdateAuthority,
  TAccountTokenMetadataProgram,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRecentSlothashes
>;
export function getMintFromCandyMachineInstruction<
  TAccountCandyMachine extends string,
  TAccountAuthorityPda extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountNftMint extends string,
  TAccountNftMintAuthority extends string,
  TAccountNftMetadata extends string,
  TAccountNftMasterEdition extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionMasterEdition extends string,
  TAccountCollectionUpdateAuthority extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRecentSlothashes extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  input: MintFromCandyMachineInput<
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountNftMint,
    TAccountNftMintAuthority,
    TAccountNftMetadata,
    TAccountNftMasterEdition,
    TAccountCollectionAuthorityRecord,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRecentSlothashes
  >
): MintFromCandyMachineInstruction<
  TProgram,
  TAccountCandyMachine,
  TAccountAuthorityPda,
  TAccountMintAuthority,
  TAccountPayer,
  TAccountNftMint,
  TAccountNftMintAuthority,
  TAccountNftMetadata,
  TAccountNftMasterEdition,
  TAccountCollectionAuthorityRecord,
  TAccountCollectionMint,
  TAccountCollectionMetadata,
  TAccountCollectionMasterEdition,
  TAccountCollectionUpdateAuthority,
  TAccountTokenMetadataProgram,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRecentSlothashes
>;
export function getMintFromCandyMachineInstruction<
  TAccountCandyMachine extends string,
  TAccountAuthorityPda extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountNftMint extends string,
  TAccountNftMintAuthority extends string,
  TAccountNftMetadata extends string,
  TAccountNftMasterEdition extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionMasterEdition extends string,
  TAccountCollectionUpdateAuthority extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRecentSlothashes extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | MintFromCandyMachineInput<
        TAccountCandyMachine,
        TAccountAuthorityPda,
        TAccountMintAuthority,
        TAccountPayer,
        TAccountNftMint,
        TAccountNftMintAuthority,
        TAccountNftMetadata,
        TAccountNftMasterEdition,
        TAccountCollectionAuthorityRecord,
        TAccountCollectionMint,
        TAccountCollectionMetadata,
        TAccountCollectionMasterEdition,
        TAccountCollectionUpdateAuthority,
        TAccountTokenMetadataProgram,
        TAccountTokenProgram,
        TAccountSystemProgram,
        TAccountRecentSlothashes
      >,
  rawInput?: MintFromCandyMachineInput<
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountNftMint,
    TAccountNftMintAuthority,
    TAccountNftMetadata,
    TAccountNftMasterEdition,
    TAccountCollectionAuthorityRecord,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRecentSlothashes
  >
): IInstruction {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as MintFromCandyMachineInput<
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountNftMint,
    TAccountNftMintAuthority,
    TAccountNftMetadata,
    TAccountNftMasterEdition,
    TAccountCollectionAuthorityRecord,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRecentSlothashes
  >;

  // Program address.
  const defaultProgramAddress =
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'>;
  const programAddress = (
    context.getProgramAddress
      ? context.getProgramAddress({
          name: 'mplCandyMachineCore',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getMintFromCandyMachineInstructionRaw<
      TProgram,
      TAccountCandyMachine,
      TAccountAuthorityPda,
      TAccountMintAuthority,
      TAccountPayer,
      TAccountNftMint,
      TAccountNftMintAuthority,
      TAccountNftMetadata,
      TAccountNftMasterEdition,
      TAccountCollectionAuthorityRecord,
      TAccountCollectionMint,
      TAccountCollectionMetadata,
      TAccountCollectionMasterEdition,
      TAccountCollectionUpdateAuthority,
      TAccountTokenMetadataProgram,
      TAccountTokenProgram,
      TAccountSystemProgram,
      TAccountRecentSlothashes
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    candyMachine: { value: input.candyMachine ?? null, isWritable: true },
    authorityPda: { value: input.authorityPda ?? null, isWritable: true },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    nftMint: { value: input.nftMint ?? null, isWritable: true },
    nftMintAuthority: {
      value: input.nftMintAuthority ?? null,
      isWritable: false,
    },
    nftMetadata: { value: input.nftMetadata ?? null, isWritable: true },
    nftMasterEdition: {
      value: input.nftMasterEdition ?? null,
      isWritable: true,
    },
    collectionAuthorityRecord: {
      value: input.collectionAuthorityRecord ?? null,
      isWritable: false,
    },
    collectionMint: { value: input.collectionMint ?? null, isWritable: false },
    collectionMetadata: {
      value: input.collectionMetadata ?? null,
      isWritable: true,
    },
    collectionMasterEdition: {
      value: input.collectionMasterEdition ?? null,
      isWritable: false,
    },
    collectionUpdateAuthority: {
      value: input.collectionUpdateAuthority ?? null,
      isWritable: false,
    },
    tokenMetadataProgram: {
      value: input.tokenMetadataProgram ?? null,
      isWritable: false,
    },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    recentSlothashes: {
      value: input.recentSlothashes ?? null,
      isWritable: false,
    },
  };

  // Resolve default values.
  if (!accounts.tokenMetadataProgram.value) {
    accounts.tokenMetadataProgram.value = getProgramAddress(
      context,
      'mplTokenMetadata',
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
    );
    accounts.tokenMetadataProgram.isWritable = false;
  }
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
    ...getMintFromCandyMachineInstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}

export function getMintFromCandyMachineInstructionRaw<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthorityPda extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountNftMint extends string | IAccountMeta<string> = string,
  TAccountNftMintAuthority extends string | IAccountMeta<string> = string,
  TAccountNftMetadata extends string | IAccountMeta<string> = string,
  TAccountNftMasterEdition extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionMasterEdition extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountTokenMetadataProgram extends
    | string
    | IAccountMeta<string> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRecentSlothashes extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    candyMachine: TAccountCandyMachine extends string
      ? Address<TAccountCandyMachine>
      : TAccountCandyMachine;
    authorityPda: TAccountAuthorityPda extends string
      ? Address<TAccountAuthorityPda>
      : TAccountAuthorityPda;
    mintAuthority: TAccountMintAuthority extends string
      ? Address<TAccountMintAuthority>
      : TAccountMintAuthority;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    nftMint: TAccountNftMint extends string
      ? Address<TAccountNftMint>
      : TAccountNftMint;
    nftMintAuthority: TAccountNftMintAuthority extends string
      ? Address<TAccountNftMintAuthority>
      : TAccountNftMintAuthority;
    nftMetadata: TAccountNftMetadata extends string
      ? Address<TAccountNftMetadata>
      : TAccountNftMetadata;
    nftMasterEdition: TAccountNftMasterEdition extends string
      ? Address<TAccountNftMasterEdition>
      : TAccountNftMasterEdition;
    collectionAuthorityRecord: TAccountCollectionAuthorityRecord extends string
      ? Address<TAccountCollectionAuthorityRecord>
      : TAccountCollectionAuthorityRecord;
    collectionMint: TAccountCollectionMint extends string
      ? Address<TAccountCollectionMint>
      : TAccountCollectionMint;
    collectionMetadata: TAccountCollectionMetadata extends string
      ? Address<TAccountCollectionMetadata>
      : TAccountCollectionMetadata;
    collectionMasterEdition: TAccountCollectionMasterEdition extends string
      ? Address<TAccountCollectionMasterEdition>
      : TAccountCollectionMasterEdition;
    collectionUpdateAuthority: TAccountCollectionUpdateAuthority extends string
      ? Address<TAccountCollectionUpdateAuthority>
      : TAccountCollectionUpdateAuthority;
    tokenMetadataProgram?: TAccountTokenMetadataProgram extends string
      ? Address<TAccountTokenMetadataProgram>
      : TAccountTokenMetadataProgram;
    tokenProgram?: TAccountTokenProgram extends string
      ? Address<TAccountTokenProgram>
      : TAccountTokenProgram;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    recentSlothashes: TAccountRecentSlothashes extends string
      ? Address<TAccountRecentSlothashes>
      : TAccountRecentSlothashes;
  },
  programAddress: Address<TProgram> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.candyMachine, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authorityPda, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.mintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.nftMint, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.nftMintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.nftMetadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.nftMasterEdition, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.collectionAuthorityRecord,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(accounts.collectionMint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.collectionMetadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.collectionMasterEdition,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.collectionUpdateAuthority,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.tokenMetadataProgram ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
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
      accountMetaWithDefault(accounts.recentSlothashes, AccountRole.READONLY),
      ...(remainingAccounts ?? []),
    ],
    data: getMintFromCandyMachineInstructionDataEncoder().encode({}),
    programAddress,
  } as MintFromCandyMachineInstruction<
    TProgram,
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountNftMint,
    TAccountNftMintAuthority,
    TAccountNftMetadata,
    TAccountNftMasterEdition,
    TAccountCollectionAuthorityRecord,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRecentSlothashes,
    TRemainingAccounts
  >;
}