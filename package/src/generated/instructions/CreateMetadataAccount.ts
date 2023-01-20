/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  ACCOUNT_HEADER_SIZE,
  AccountMeta,
  Context,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  checkForIsWritableOverride as isWritable,
  getProgramAddressWithFallback,
  mapSerializer,
  publicKey,
} from '@lorisleiva/js-core';
import { findMetadataPda, getMetadataSize } from '../accounts';
import { Data, DataArgs, getDataSerializer } from '../types';

// Accounts.
export type CreateMetadataAccountInstructionAccounts = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata?: PublicKey;
  /** Mint of token asset */
  mint: PublicKey;
  /** Mint authority */
  mintAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** update authority info */
  updateAuthority: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Rent info */
  rent?: PublicKey;
};

// Arguments.
export type CreateMetadataAccountInstructionData = {
  discriminator: number;
  data: Data;
  isMutable: boolean;
};

export type CreateMetadataAccountInstructionArgs = {
  data: DataArgs;
  isMutable: boolean;
};

export function getCreateMetadataAccountInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  CreateMetadataAccountInstructionArgs,
  CreateMetadataAccountInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    CreateMetadataAccountInstructionArgs,
    CreateMetadataAccountInstructionData,
    CreateMetadataAccountInstructionData
  >(
    s.struct<CreateMetadataAccountInstructionData>(
      [
        ['discriminator', s.u8],
        ['data', getDataSerializer(context)],
        ['isMutable', s.bool()],
      ],
      'CreateMetadataAccountInstructionArgs'
    ),
    (value) =>
      ({ discriminator: 0, ...value } as CreateMetadataAccountInstructionData)
  ) as Serializer<
    CreateMetadataAccountInstructionArgs,
    CreateMetadataAccountInstructionData
  >;
}

// Instruction.
export function createMetadataAccount(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    payer: Context['payer'];
    programs?: Context['programs'];
  },
  input: CreateMetadataAccountInstructionAccounts &
    CreateMetadataAccountInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved accounts.
  const mintAccount = input.mint;
  const metadataAccount =
    input.metadata ??
    findMetadataPda(context, { mint: publicKey(mintAccount) });
  const mintAuthorityAccount = input.mintAuthority;
  const payerAccount = input.payer ?? context.payer;
  const updateAuthorityAccount = input.updateAuthority;
  const systemProgramAccount = input.systemProgram ?? {
    ...getProgramAddressWithFallback(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    ),
    isWritable: false,
  };
  const rentAccount =
    input.rent ?? publicKey('SysvarRent111111111111111111111111111111111');

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // Mint Authority.
  signers.push(mintAuthorityAccount);
  keys.push({
    pubkey: mintAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(mintAuthorityAccount, false),
  });

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, true),
  });

  // Update Authority.
  keys.push({
    pubkey: updateAuthorityAccount,
    isSigner: false,
    isWritable: isWritable(updateAuthorityAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Rent.
  keys.push({
    pubkey: rentAccount,
    isSigner: false,
    isWritable: isWritable(rentAccount, false),
  });

  // Data.
  const data =
    getCreateMetadataAccountInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain =
    (getMetadataSize(context) ?? 0) + ACCOUNT_HEADER_SIZE;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
