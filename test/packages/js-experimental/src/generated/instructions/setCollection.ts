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
  ReadonlyAccount,
  ReadonlySignerAccount,
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
  getProgramAddress,
} from '../shared';

// Output.
export type SetCollectionInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountAuthorityPda extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountNewCollectionMint extends string | IAccountMeta<string> = string,
  TAccountNewCollectionMasterEdition extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountTokenMetadataProgram extends
    | string
    | IAccountMeta<string> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
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
      TAccountAuthorityPda extends string
        ? WritableAccount<TAccountAuthorityPda>
        : TAccountAuthorityPda,
      TAccountPayer extends string
        ? ReadonlySignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountCollectionMetadata extends string
        ? ReadonlyAccount<TAccountCollectionMetadata>
        : TAccountCollectionMetadata,
      TAccountCollectionAuthorityRecord extends string
        ? WritableAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      TAccountNewCollectionUpdateAuthority extends string
        ? WritableSignerAccount<TAccountNewCollectionUpdateAuthority>
        : TAccountNewCollectionUpdateAuthority,
      TAccountNewCollectionMetadata extends string
        ? ReadonlyAccount<TAccountNewCollectionMetadata>
        : TAccountNewCollectionMetadata,
      TAccountNewCollectionMint extends string
        ? ReadonlyAccount<TAccountNewCollectionMint>
        : TAccountNewCollectionMint,
      TAccountNewCollectionMasterEdition extends string
        ? ReadonlyAccount<TAccountNewCollectionMasterEdition>
        : TAccountNewCollectionMasterEdition,
      TAccountNewCollectionAuthorityRecord extends string
        ? WritableAccount<TAccountNewCollectionAuthorityRecord>
        : TAccountNewCollectionAuthorityRecord,
      TAccountTokenMetadataProgram extends string
        ? ReadonlyAccount<TAccountTokenMetadataProgram>
        : TAccountTokenMetadataProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts
    ]
  >;

export type SetCollectionInstructionData = { discriminator: Array<number> };

export type SetCollectionInstructionDataArgs = {};

export function getSetCollectionInstructionDataEncoder(): Encoder<SetCollectionInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: Array<number> }>(
      [['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })]],
      { description: 'SetCollectionInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [192, 254, 206, 76, 168, 182, 59, 223],
    })
  ) as Encoder<SetCollectionInstructionDataArgs>;
}

export function getSetCollectionInstructionDataDecoder(): Decoder<SetCollectionInstructionData> {
  return getStructDecoder<SetCollectionInstructionData>(
    [['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })]],
    { description: 'SetCollectionInstructionData' }
  ) as Decoder<SetCollectionInstructionData>;
}

export function getSetCollectionInstructionDataCodec(): Codec<
  SetCollectionInstructionDataArgs,
  SetCollectionInstructionData
> {
  return combineCodec(
    getSetCollectionInstructionDataEncoder(),
    getSetCollectionInstructionDataDecoder()
  );
}

export function setCollectionInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountAuthorityPda extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountNewCollectionMint extends string | IAccountMeta<string> = string,
  TAccountNewCollectionMasterEdition extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountTokenMetadataProgram extends
    | string
    | IAccountMeta<string> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    candyMachine: TAccountCandyMachine extends string
      ? Base58EncodedAddress<TAccountCandyMachine>
      : TAccountCandyMachine;
    authority: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
    authorityPda: TAccountAuthorityPda extends string
      ? Base58EncodedAddress<TAccountAuthorityPda>
      : TAccountAuthorityPda;
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    collectionMint: TAccountCollectionMint extends string
      ? Base58EncodedAddress<TAccountCollectionMint>
      : TAccountCollectionMint;
    collectionMetadata: TAccountCollectionMetadata extends string
      ? Base58EncodedAddress<TAccountCollectionMetadata>
      : TAccountCollectionMetadata;
    collectionAuthorityRecord: TAccountCollectionAuthorityRecord extends string
      ? Base58EncodedAddress<TAccountCollectionAuthorityRecord>
      : TAccountCollectionAuthorityRecord;
    newCollectionUpdateAuthority: TAccountNewCollectionUpdateAuthority extends string
      ? Base58EncodedAddress<TAccountNewCollectionUpdateAuthority>
      : TAccountNewCollectionUpdateAuthority;
    newCollectionMetadata: TAccountNewCollectionMetadata extends string
      ? Base58EncodedAddress<TAccountNewCollectionMetadata>
      : TAccountNewCollectionMetadata;
    newCollectionMint: TAccountNewCollectionMint extends string
      ? Base58EncodedAddress<TAccountNewCollectionMint>
      : TAccountNewCollectionMint;
    newCollectionMasterEdition: TAccountNewCollectionMasterEdition extends string
      ? Base58EncodedAddress<TAccountNewCollectionMasterEdition>
      : TAccountNewCollectionMasterEdition;
    newCollectionAuthorityRecord: TAccountNewCollectionAuthorityRecord extends string
      ? Base58EncodedAddress<TAccountNewCollectionAuthorityRecord>
      : TAccountNewCollectionAuthorityRecord;
    tokenMetadataProgram?: TAccountTokenMetadataProgram extends string
      ? Base58EncodedAddress<TAccountTokenMetadataProgram>
      : TAccountTokenMetadataProgram;
    systemProgram?: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Base58EncodedAddress<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.candyMachine, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(accounts.authorityPda, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.payer, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(accounts.collectionMint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.collectionMetadata, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.collectionAuthorityRecord,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.newCollectionUpdateAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(
        accounts.newCollectionMetadata,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(accounts.newCollectionMint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.newCollectionMasterEdition,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.newCollectionAuthorityRecord,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.tokenMetadataProgram ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
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
      ...(remainingAccounts ?? []),
    ],
    data: getSetCollectionInstructionDataEncoder().encode({}),
    programAddress,
  } as SetCollectionInstruction<
    TProgram,
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountAuthorityPda,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionUpdateAuthority,
    TAccountNewCollectionMetadata,
    TAccountNewCollectionMint,
    TAccountNewCollectionMasterEdition,
    TAccountNewCollectionAuthorityRecord,
    TAccountTokenMetadataProgram,
    TAccountSystemProgram,
    TRemainingAccounts
  >;
}

// Input.
export type SetCollectionInput<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountAuthorityPda extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionUpdateAuthority extends string,
  TAccountNewCollectionMetadata extends string,
  TAccountNewCollectionMint extends string,
  TAccountNewCollectionMasterEdition extends string,
  TAccountNewCollectionAuthorityRecord extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountSystemProgram extends string
> = {
  candyMachine: Base58EncodedAddress<TAccountCandyMachine>;
  authority?: Signer<TAccountAuthority>;
  authorityPda: Base58EncodedAddress<TAccountAuthorityPda>;
  payer?: Signer<TAccountPayer>;
  collectionMint: Base58EncodedAddress<TAccountCollectionMint>;
  collectionMetadata: Base58EncodedAddress<TAccountCollectionMetadata>;
  collectionAuthorityRecord: Base58EncodedAddress<TAccountCollectionAuthorityRecord>;
  newCollectionUpdateAuthority: Signer<TAccountNewCollectionUpdateAuthority>;
  newCollectionMetadata: Base58EncodedAddress<TAccountNewCollectionMetadata>;
  newCollectionMint: Base58EncodedAddress<TAccountNewCollectionMint>;
  newCollectionMasterEdition: Base58EncodedAddress<TAccountNewCollectionMasterEdition>;
  newCollectionAuthorityRecord: Base58EncodedAddress<TAccountNewCollectionAuthorityRecord>;
  tokenMetadataProgram?: Base58EncodedAddress<TAccountTokenMetadataProgram>;
  systemProgram?: Base58EncodedAddress<TAccountSystemProgram>;
};

export async function setCollection<
  TReturn,
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountAuthorityPda extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionUpdateAuthority extends string,
  TAccountNewCollectionMetadata extends string,
  TAccountNewCollectionMint extends string,
  TAccountNewCollectionMasterEdition extends string,
  TAccountNewCollectionAuthorityRecord extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      SetCollectionInstruction<
        TProgram,
        TAccountCandyMachine,
        TAccountAuthority,
        TAccountAuthorityPda,
        TAccountPayer,
        TAccountCollectionMint,
        TAccountCollectionMetadata,
        TAccountCollectionAuthorityRecord,
        TAccountNewCollectionUpdateAuthority,
        TAccountNewCollectionMetadata,
        TAccountNewCollectionMint,
        TAccountNewCollectionMasterEdition,
        TAccountNewCollectionAuthorityRecord,
        TAccountTokenMetadataProgram,
        TAccountSystemProgram
      >,
      TReturn
    >,
  input: SetCollectionInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountAuthorityPda,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionUpdateAuthority,
    TAccountNewCollectionMetadata,
    TAccountNewCollectionMint,
    TAccountNewCollectionMasterEdition,
    TAccountNewCollectionAuthorityRecord,
    TAccountTokenMetadataProgram,
    TAccountSystemProgram
  >
): Promise<TReturn>;
export async function setCollection<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountAuthorityPda extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionUpdateAuthority extends string,
  TAccountNewCollectionMetadata extends string,
  TAccountNewCollectionMint extends string,
  TAccountNewCollectionMasterEdition extends string,
  TAccountNewCollectionAuthorityRecord extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SetCollectionInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountAuthorityPda,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionUpdateAuthority,
    TAccountNewCollectionMetadata,
    TAccountNewCollectionMint,
    TAccountNewCollectionMasterEdition,
    TAccountNewCollectionAuthorityRecord,
    TAccountTokenMetadataProgram,
    TAccountSystemProgram
  >
): Promise<
  WrappedInstruction<
    SetCollectionInstruction<
      TProgram,
      TAccountCandyMachine,
      TAccountAuthority,
      TAccountAuthorityPda,
      TAccountPayer,
      TAccountCollectionMint,
      TAccountCollectionMetadata,
      TAccountCollectionAuthorityRecord,
      TAccountNewCollectionUpdateAuthority,
      TAccountNewCollectionMetadata,
      TAccountNewCollectionMint,
      TAccountNewCollectionMasterEdition,
      TAccountNewCollectionAuthorityRecord,
      TAccountTokenMetadataProgram,
      TAccountSystemProgram
    >
  >
>;
export async function setCollection<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountAuthorityPda extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionUpdateAuthority extends string,
  TAccountNewCollectionMetadata extends string,
  TAccountNewCollectionMint extends string,
  TAccountNewCollectionMasterEdition extends string,
  TAccountNewCollectionAuthorityRecord extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  input: SetCollectionInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountAuthorityPda,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionUpdateAuthority,
    TAccountNewCollectionMetadata,
    TAccountNewCollectionMint,
    TAccountNewCollectionMasterEdition,
    TAccountNewCollectionAuthorityRecord,
    TAccountTokenMetadataProgram,
    TAccountSystemProgram
  >
): Promise<
  WrappedInstruction<
    SetCollectionInstruction<
      TProgram,
      TAccountCandyMachine,
      TAccountAuthority,
      TAccountAuthorityPda,
      TAccountPayer,
      TAccountCollectionMint,
      TAccountCollectionMetadata,
      TAccountCollectionAuthorityRecord,
      TAccountNewCollectionUpdateAuthority,
      TAccountNewCollectionMetadata,
      TAccountNewCollectionMint,
      TAccountNewCollectionMasterEdition,
      TAccountNewCollectionAuthorityRecord,
      TAccountTokenMetadataProgram,
      TAccountSystemProgram
    >
  >
>;
export async function setCollection<
  TReturn,
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountAuthorityPda extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionUpdateAuthority extends string,
  TAccountNewCollectionMetadata extends string,
  TAccountNewCollectionMint extends string,
  TAccountNewCollectionMasterEdition extends string,
  TAccountNewCollectionAuthorityRecord extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | SetCollectionInput<
        TAccountCandyMachine,
        TAccountAuthority,
        TAccountAuthorityPda,
        TAccountPayer,
        TAccountCollectionMint,
        TAccountCollectionMetadata,
        TAccountCollectionAuthorityRecord,
        TAccountNewCollectionUpdateAuthority,
        TAccountNewCollectionMetadata,
        TAccountNewCollectionMint,
        TAccountNewCollectionMasterEdition,
        TAccountNewCollectionAuthorityRecord,
        TAccountTokenMetadataProgram,
        TAccountSystemProgram
      >,
  rawInput?: SetCollectionInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountAuthorityPda,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionUpdateAuthority,
    TAccountNewCollectionMetadata,
    TAccountNewCollectionMint,
    TAccountNewCollectionMasterEdition,
    TAccountNewCollectionAuthorityRecord,
    TAccountTokenMetadataProgram,
    TAccountSystemProgram
  >
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as SetCollectionInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountAuthorityPda,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionUpdateAuthority,
    TAccountNewCollectionMetadata,
    TAccountNewCollectionMint,
    TAccountNewCollectionMasterEdition,
    TAccountNewCollectionAuthorityRecord,
    TAccountTokenMetadataProgram,
    TAccountSystemProgram
  >;

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
    typeof setCollectionInstruction<
      TProgram,
      TAccountCandyMachine,
      TAccountAuthority,
      TAccountAuthorityPda,
      TAccountPayer,
      TAccountCollectionMint,
      TAccountCollectionMetadata,
      TAccountCollectionAuthorityRecord,
      TAccountNewCollectionUpdateAuthority,
      TAccountNewCollectionMetadata,
      TAccountNewCollectionMint,
      TAccountNewCollectionMasterEdition,
      TAccountNewCollectionAuthorityRecord,
      TAccountTokenMetadataProgram,
      TAccountSystemProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    candyMachine: { value: input.candyMachine ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    authorityPda: { value: input.authorityPda ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: false },
    collectionMint: { value: input.collectionMint ?? null, isWritable: false },
    collectionMetadata: {
      value: input.collectionMetadata ?? null,
      isWritable: false,
    },
    collectionAuthorityRecord: {
      value: input.collectionAuthorityRecord ?? null,
      isWritable: true,
    },
    newCollectionUpdateAuthority: {
      value: input.newCollectionUpdateAuthority ?? null,
      isWritable: true,
    },
    newCollectionMetadata: {
      value: input.newCollectionMetadata ?? null,
      isWritable: false,
    },
    newCollectionMint: {
      value: input.newCollectionMint ?? null,
      isWritable: false,
    },
    newCollectionMasterEdition: {
      value: input.newCollectionMasterEdition ?? null,
      isWritable: false,
    },
    newCollectionAuthorityRecord: {
      value: input.newCollectionAuthorityRecord ?? null,
      isWritable: true,
    },
    tokenMetadataProgram: {
      value: input.tokenMetadataProgram ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };

  // Resolve default values.
  if (!accounts.tokenMetadataProgram.value) {
    accounts.tokenMetadataProgram.value = await getProgramAddress(
      context,
      'mplTokenMetadata',
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
    );
    accounts.tokenMetadataProgram.isWritable = false;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = await getProgramAddress(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    );
    accounts.systemProgram.isWritable = false;
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
    instruction: setCollectionInstruction(
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
