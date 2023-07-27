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
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u64,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { addAccountMeta, addObjectProperty } from '../shared';

// Accounts.
export type UtilizeInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Token Account Of NFT */
  tokenAccount: PublicKey | Pda;
  /** Mint of the Metadata */
  mint: PublicKey | Pda;
  /** A Use Authority / Can be the current Owner of the NFT */
  useAuthority: Signer;
  /** Owner */
  owner: PublicKey | Pda;
  /** Token program */
  tokenProgram?: PublicKey | Pda;
  /** Associated Token program */
  ataProgram?: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Rent info */
  rent?: PublicKey | Pda;
  /** Use Authority Record PDA If present the program Assumes a delegated use authority */
  useAuthorityRecord?: PublicKey | Pda;
  /** Program As Signer (Burner) */
  burner?: PublicKey | Pda;
};

// Data.
export type UtilizeInstructionData = {
  discriminator: number;
  numberOfUses: bigint;
};

export type UtilizeInstructionDataArgs = { numberOfUses: number | bigint };

/** @deprecated Use `getUtilizeInstructionDataSerializer()` without any argument instead. */
export function getUtilizeInstructionDataSerializer(
  _context: object
): Serializer<UtilizeInstructionDataArgs, UtilizeInstructionData>;
export function getUtilizeInstructionDataSerializer(): Serializer<
  UtilizeInstructionDataArgs,
  UtilizeInstructionData
>;
export function getUtilizeInstructionDataSerializer(
  _context: object = {}
): Serializer<UtilizeInstructionDataArgs, UtilizeInstructionData> {
  return mapSerializer<UtilizeInstructionDataArgs, any, UtilizeInstructionData>(
    struct<UtilizeInstructionData>(
      [
        ['discriminator', u8()],
        ['numberOfUses', u64()],
      ],
      { description: 'UtilizeInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 19 })
  ) as Serializer<UtilizeInstructionDataArgs, UtilizeInstructionData>;
}

// Args.
export type UtilizeInstructionArgs = UtilizeInstructionDataArgs;

// Instruction.
export function utilize(
  context: Pick<Context, 'programs'>,
  input: UtilizeInstructionAccounts & UtilizeInstructionArgs
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
    tokenAccount: [input.tokenAccount, true] as const,
    mint: [input.mint, true] as const,
    useAuthority: [input.useAuthority, true] as const,
    owner: [input.owner, false] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'tokenProgram',
    input.tokenProgram
      ? ([input.tokenProgram, false] as const)
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
    'ataProgram',
    input.ataProgram
      ? ([input.ataProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splAssociatedToken',
            'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'systemProgram',
    input.systemProgram
      ? ([input.systemProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splSystem',
            '11111111111111111111111111111111'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'rent',
    input.rent
      ? ([input.rent, false] as const)
      : ([
          publicKey('SysvarRent111111111111111111111111111111111'),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'useAuthorityRecord',
    input.useAuthorityRecord
      ? ([input.useAuthorityRecord, true] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'burner',
    input.burner
      ? ([input.burner, false] as const)
      : ([programId, false] as const)
  );
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenAccount, false);
  addAccountMeta(keys, signers, resolvedAccounts.mint, false);
  addAccountMeta(keys, signers, resolvedAccounts.useAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.owner, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.ataProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.rent, false);
  addAccountMeta(keys, signers, resolvedAccounts.useAuthorityRecord, false);
  addAccountMeta(keys, signers, resolvedAccounts.burner, false);

  // Data.
  const data = getUtilizeInstructionDataSerializer().serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
