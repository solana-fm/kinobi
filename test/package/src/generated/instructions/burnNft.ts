/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { addAccountMeta, addObjectProperty } from '../shared';

// Accounts.
export type BurnNftInstructionAccounts = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey | Pda;
  /** NFT owner */
  owner: Signer;
  /** Mint of the NFT */
  mint: PublicKey | Pda;
  /** Token account to close */
  tokenAccount: PublicKey | Pda;
  /** MasterEdition2 of the NFT */
  masterEditionAccount: PublicKey | Pda;
  /** SPL Token Program */
  splTokenProgram?: PublicKey | Pda;
  /** Metadata of the Collection */
  collectionMetadata?: PublicKey | Pda;
};

// Data.
export type BurnNftInstructionData = { discriminator: number };

export type BurnNftInstructionDataArgs = {};

/** @deprecated Use `getBurnNftInstructionDataSerializer()` without any argument instead. */
export function getBurnNftInstructionDataSerializer(
  _context: object
): Serializer<BurnNftInstructionDataArgs, BurnNftInstructionData>;
export function getBurnNftInstructionDataSerializer(): Serializer<
  BurnNftInstructionDataArgs,
  BurnNftInstructionData
>;
export function getBurnNftInstructionDataSerializer(
  _context: object = {}
): Serializer<BurnNftInstructionDataArgs, BurnNftInstructionData> {
  return mapSerializer<BurnNftInstructionDataArgs, any, BurnNftInstructionData>(
    struct<BurnNftInstructionData>([['discriminator', u8()]], {
      description: 'BurnNftInstructionData',
    }),
    (value) => ({ ...value, discriminator: 29 })
  ) as Serializer<BurnNftInstructionDataArgs, BurnNftInstructionData>;
}

// Instruction.
export function burnNft(
  context: Pick<Context, 'programs'>,
  input: BurnNftInstructionAccounts
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    metadata: [input.metadata, true] as const,
    owner: [input.owner, true] as const,
    mint: [input.mint, true] as const,
    tokenAccount: [input.tokenAccount, true] as const,
    masterEditionAccount: [input.masterEditionAccount, true] as const,
  };
  addObjectProperty(
    resolvedAccounts,
    'splTokenProgram',
    input.splTokenProgram
      ? ([input.splTokenProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splToken',
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'collectionMetadata',
    input.collectionMetadata
      ? ([input.collectionMetadata, true] as const)
      : ([programId, false] as const)
  );

  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.owner, false);
  addAccountMeta(keys, signers, resolvedAccounts.mint, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenAccount, false);
  addAccountMeta(keys, signers, resolvedAccounts.masterEditionAccount, false);
  addAccountMeta(keys, signers, resolvedAccounts.splTokenProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionMetadata, false);

  // Data.
  const data = getBurnNftInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
