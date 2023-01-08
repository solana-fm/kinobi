/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { TmKey, getTmKeySerializer } from '../types';
import {
  Account,
  Context,
  PublicKey,
  RpcAccount,
  Serializer,
  assertAccountExists,
  deserializeAccount,
  mapSerializer,
} from '@lorisleiva/js-core';

export type EditionMarker = Account<EditionMarkerAccountData>;

export type EditionMarkerAccountData = { key: TmKey; ledger: Array<number> };

export type EditionMarkerAccountArgs = { ledger: Array<number> };

export async function fetchEditionMarker(
  context: Pick<Context, 'rpc' | 'serializer'>,
  address: PublicKey
): Promise<EditionMarker> {
  const maybeAccount = await context.rpc.getAccount(address);
  assertAccountExists(maybeAccount, 'EditionMarker');
  return deserializeEditionMarker(context, maybeAccount);
}

export async function safeFetchEditionMarker(
  context: Pick<Context, 'rpc' | 'serializer'>,
  address: PublicKey
): Promise<EditionMarker | null> {
  const maybeAccount = await context.rpc.getAccount(address);
  return maybeAccount.exists
    ? deserializeEditionMarker(context, maybeAccount)
    : null;
}

export function deserializeEditionMarker(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): EditionMarker {
  return deserializeAccount(rawAccount, getEditionMarkerSerializer(context));
}

export function getEditionMarkerAccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<EditionMarkerAccountArgs, EditionMarkerAccountData> {
  const s = context.serializer;
  return mapSerializer<EditionMarkerArgs, EditionMarker, EditionMarker>(
    s.struct<EditionMarker>(
      [
        ['key', getTmKeySerializer(context)],
        ['ledger', s.array(s.u8, 31)],
      ],
      'EditionMarker'
    ),
    (value) => ({ key: 7, ...value } as EditionMarker)
  ) as Serializer<EditionMarkerAccountArgs, EditionMarkerAccountData>;
}
