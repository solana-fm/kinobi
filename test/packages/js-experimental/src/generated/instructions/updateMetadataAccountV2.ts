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
  getBooleanDecoder,
  getBooleanEncoder,
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
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  Context,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';
import {
  DataV2,
  DataV2Args,
  getDataV2Decoder,
  getDataV2Encoder,
} from '../types';

export type UpdateMetadataAccountV2Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountUpdateAuthority extends string
        ? ReadonlySignerAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      ...TRemainingAccounts
    ]
  >;

export type UpdateMetadataAccountV2InstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountUpdateAuthority extends string
        ? ReadonlySignerAccount<TAccountUpdateAuthority> &
            IAccountSignerMeta<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      ...TRemainingAccounts
    ]
  >;

export type UpdateMetadataAccountV2InstructionData = {
  discriminator: number;
  data: Option<DataV2>;
  updateAuthority: Option<Address>;
  primarySaleHappened: Option<boolean>;
  isMutable: Option<boolean>;
};

export type UpdateMetadataAccountV2InstructionDataArgs = {
  data: OptionOrNullable<DataV2Args>;
  updateAuthority: OptionOrNullable<Address>;
  primarySaleHappened: OptionOrNullable<boolean>;
  isMutable: OptionOrNullable<boolean>;
};

export function getUpdateMetadataAccountV2InstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      data: OptionOrNullable<DataV2Args>;
      updateAuthority: OptionOrNullable<Address>;
      primarySaleHappened: OptionOrNullable<boolean>;
      isMutable: OptionOrNullable<boolean>;
    }>([
      ['discriminator', getU8Encoder()],
      ['data', getOptionEncoder(getDataV2Encoder())],
      ['updateAuthority', getOptionEncoder(getAddressEncoder())],
      ['primarySaleHappened', getOptionEncoder(getBooleanEncoder())],
      ['isMutable', getOptionEncoder(getBooleanEncoder())],
    ]),
    (value) => ({ ...value, discriminator: 15 })
  ) satisfies Encoder<UpdateMetadataAccountV2InstructionDataArgs>;
}

export function getUpdateMetadataAccountV2InstructionDataDecoder() {
  return getStructDecoder<UpdateMetadataAccountV2InstructionData>([
    ['discriminator', getU8Decoder()],
    ['data', getOptionDecoder(getDataV2Decoder())],
    ['updateAuthority', getOptionDecoder(getAddressDecoder())],
    ['primarySaleHappened', getOptionDecoder(getBooleanDecoder())],
    ['isMutable', getOptionDecoder(getBooleanDecoder())],
  ]) satisfies Decoder<UpdateMetadataAccountV2InstructionData>;
}

export function getUpdateMetadataAccountV2InstructionDataCodec(): Codec<
  UpdateMetadataAccountV2InstructionDataArgs,
  UpdateMetadataAccountV2InstructionData
> {
  return combineCodec(
    getUpdateMetadataAccountV2InstructionDataEncoder(),
    getUpdateMetadataAccountV2InstructionDataDecoder()
  );
}

export type UpdateMetadataAccountV2Input<
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string
> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Update authority key */
  updateAuthority: Address<TAccountUpdateAuthority>;
  data: UpdateMetadataAccountV2InstructionDataArgs['data'];
  updateAuthorityArg: UpdateMetadataAccountV2InstructionDataArgs['updateAuthority'];
  primarySaleHappened: UpdateMetadataAccountV2InstructionDataArgs['primarySaleHappened'];
  isMutable: UpdateMetadataAccountV2InstructionDataArgs['isMutable'];
};

export type UpdateMetadataAccountV2InputWithSigners<
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string
> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Update authority key */
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  data: UpdateMetadataAccountV2InstructionDataArgs['data'];
  updateAuthorityArg: UpdateMetadataAccountV2InstructionDataArgs['updateAuthority'];
  primarySaleHappened: UpdateMetadataAccountV2InstructionDataArgs['primarySaleHappened'];
  isMutable: UpdateMetadataAccountV2InstructionDataArgs['isMutable'];
};

export function getUpdateMetadataAccountV2Instruction<
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: UpdateMetadataAccountV2InputWithSigners<
    TAccountMetadata,
    TAccountUpdateAuthority
  >
): UpdateMetadataAccountV2InstructionWithSigners<
  TProgram,
  TAccountMetadata,
  TAccountUpdateAuthority
>;
export function getUpdateMetadataAccountV2Instruction<
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: UpdateMetadataAccountV2Input<TAccountMetadata, TAccountUpdateAuthority>
): UpdateMetadataAccountV2Instruction<
  TProgram,
  TAccountMetadata,
  TAccountUpdateAuthority
>;
export function getUpdateMetadataAccountV2Instruction<
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: UpdateMetadataAccountV2InputWithSigners<
    TAccountMetadata,
    TAccountUpdateAuthority
  >
): UpdateMetadataAccountV2InstructionWithSigners<
  TProgram,
  TAccountMetadata,
  TAccountUpdateAuthority
>;
export function getUpdateMetadataAccountV2Instruction<
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: UpdateMetadataAccountV2Input<TAccountMetadata, TAccountUpdateAuthority>
): UpdateMetadataAccountV2Instruction<
  TProgram,
  TAccountMetadata,
  TAccountUpdateAuthority
>;
export function getUpdateMetadataAccountV2Instruction<
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | UpdateMetadataAccountV2Input<TAccountMetadata, TAccountUpdateAuthority>,
  rawInput?: UpdateMetadataAccountV2Input<
    TAccountMetadata,
    TAccountUpdateAuthority
  >
): IInstruction {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as UpdateMetadataAccountV2Input<TAccountMetadata, TAccountUpdateAuthority>;

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
    typeof getUpdateMetadataAccountV2InstructionRaw<
      TProgram,
      TAccountMetadata,
      TAccountUpdateAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
  };

  // Original args.
  const args = { ...input, updateAuthority: input.updateAuthorityArg };

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
    ...getUpdateMetadataAccountV2InstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as UpdateMetadataAccountV2InstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}

export function getUpdateMetadataAccountV2InstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Address<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
  },
  args: UpdateMetadataAccountV2InstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.updateAuthority,
        AccountRole.READONLY_SIGNER
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getUpdateMetadataAccountV2InstructionDataEncoder().encode(args),
    programAddress,
  } as UpdateMetadataAccountV2Instruction<
    TProgram,
    TAccountMetadata,
    TAccountUpdateAuthority,
    TRemainingAccounts
  >;
}