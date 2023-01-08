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
  Option,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';
import {
  Reservation,
  ReservationArgs,
  getReservationSerializer,
} from '../types';

// Accounts.
export type DeprecatedSetReservationListInstructionAccounts = {
  /** Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition']) */
  masterEdition: PublicKey;
  /** PDA for ReservationList of ['metadata', program id, master edition key, 'reservation', resource-key] */
  reservationList: PublicKey;
  /** The resource you tied the reservation list too */
  resource: Signer;
};

// Arguments.
export type DeprecatedSetReservationListInstructionData = {
  discriminator: number;
  reservations: Array<Reservation>;
  totalReservationSpots: Option<bigint>;
  offset: bigint;
  totalSpotOffset: bigint;
};

export type DeprecatedSetReservationListInstructionArgs = {
  reservations: Array<ReservationArgs>;
  totalReservationSpots: Option<number | bigint>;
  offset: number | bigint;
  totalSpotOffset: number | bigint;
};

export function getDeprecatedSetReservationListInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  DeprecatedSetReservationListInstructionArgs,
  DeprecatedSetReservationListInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    DeprecatedSetReservationListInstructionArgs,
    DeprecatedSetReservationListInstructionData,
    DeprecatedSetReservationListInstructionData
  >(
    s.struct<DeprecatedSetReservationListInstructionData>(
      [
        ['discriminator', s.u8],
        ['reservations', s.vec(getReservationSerializer(context))],
        ['totalReservationSpots', s.option(s.u64)],
        ['offset', s.u64],
        ['totalSpotOffset', s.u64],
      ],
      'DeprecatedSetReservationListInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: 5,
        ...value,
      } as DeprecatedSetReservationListInstructionData)
  ) as Serializer<
    DeprecatedSetReservationListInstructionArgs,
    DeprecatedSetReservationListInstructionData
  >;
}

// Instruction.
export function deprecatedSetReservationList(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: DeprecatedSetReservationListInstructionAccounts &
    DeprecatedSetReservationListInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Master Edition.
  keys.push({
    pubkey: input.masterEdition,
    isSigner: false,
    isWritable: false,
  });

  // Reservation List.
  keys.push({
    pubkey: input.reservationList,
    isSigner: false,
    isWritable: false,
  });

  // Resource.
  signers.push(input.resource);
  keys.push({
    pubkey: input.resource.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Data.
  const data =
    getDeprecatedSetReservationListInstructionDataSerializer(context).serialize(
      input
    );

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
