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
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU64Decoder, getU64Encoder } from '@solana/codecs-numbers';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import {
  ReservationV1,
  ReservationV1Args,
  TmKey,
  getReservationV1Decoder,
  getReservationV1Encoder,
  getTmKeyDecoder,
  getTmKeyEncoder,
} from '../generated';

export type ReservationListV1AccountData = {
  key: TmKey;
  masterEdition: Address;
  supplySnapshot: Option<bigint>;
  reservations: Array<ReservationV1>;
};

export type ReservationListV1AccountDataArgs = {
  masterEdition: Address;
  supplySnapshot: OptionOrNullable<number | bigint>;
  reservations: Array<ReservationV1Args>;
};

export function getReservationListV1AccountDataEncoder(): Encoder<ReservationListV1AccountDataArgs> {
  return mapEncoder(
    getStructEncoder<{
      key: TmKey;
      masterEdition: Address;
      supplySnapshot: OptionOrNullable<number | bigint>;
      reservations: Array<ReservationV1Args>;
    }>([
      ['key', getTmKeyEncoder()],
      ['masterEdition', getAddressEncoder()],
      ['supplySnapshot', getOptionEncoder(getU64Encoder())],
      ['reservations', getArrayEncoder(getReservationV1Encoder())],
    ]),
    (value) => ({ ...value, key: TmKey.ReservationListV1 })
  ) as Encoder<ReservationListV1AccountDataArgs>;
}

export function getReservationListV1AccountDataDecoder(): Decoder<ReservationListV1AccountData> {
  return getStructDecoder<{
    key: TmKey;
    masterEdition: Address;
    supplySnapshot: OptionOrNullable<number | bigint>;
    reservations: Array<ReservationV1Args>;
  }>([
    ['key', getTmKeyDecoder()],
    ['masterEdition', getAddressDecoder()],
    ['supplySnapshot', getOptionDecoder(getU64Decoder())],
    ['reservations', getArrayDecoder(getReservationV1Decoder())],
  ]) as Decoder<ReservationListV1AccountData>;
}

export function getReservationListV1AccountDataCodec(): Codec<
  ReservationListV1AccountDataArgs,
  ReservationListV1AccountData
> {
  return combineCodec(
    getReservationListV1AccountDataEncoder(),
    getReservationListV1AccountDataDecoder()
  );
}
