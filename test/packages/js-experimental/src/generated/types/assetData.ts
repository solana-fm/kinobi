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
import { Codec, Decoder, Encoder, combineCodec } from '@solana/codecs-core';
import {
  getArrayDecoder,
  getArrayEncoder,
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU16Decoder,
  getU16Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import { getStringDecoder, getStringEncoder } from '@solana/codecs-strings';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import {
  Collection,
  CollectionArgs,
  CollectionDetails,
  CollectionDetailsArgs,
  Creator,
  CreatorArgs,
  DelegateState,
  DelegateStateArgs,
  ProgrammableConfig,
  ProgrammableConfigArgs,
  TokenStandard,
  TokenStandardArgs,
  Uses,
  UsesArgs,
  getCollectionDecoder,
  getCollectionDetailsDecoder,
  getCollectionDetailsEncoder,
  getCollectionEncoder,
  getCreatorDecoder,
  getCreatorEncoder,
  getDelegateStateDecoder,
  getDelegateStateEncoder,
  getProgrammableConfigDecoder,
  getProgrammableConfigEncoder,
  getTokenStandardDecoder,
  getTokenStandardEncoder,
  getUsesDecoder,
  getUsesEncoder,
} from '.';

export type AssetData = {
  updateAuthority: Address;
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: Option<Array<Creator>>;
  primarySaleHappened: boolean;
  isMutable: boolean;
  editionNonce: Option<number>;
  tokenStandard: TokenStandard;
  collection: Option<Collection>;
  uses: Option<Uses>;
  collectionDetails: Option<CollectionDetails>;
  programmableConfig: Option<ProgrammableConfig>;
  delegateState: Option<DelegateState>;
};

export type AssetDataArgs = {
  updateAuthority: Address;
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: OptionOrNullable<Array<CreatorArgs>>;
  primarySaleHappened: boolean;
  isMutable: boolean;
  editionNonce: OptionOrNullable<number>;
  tokenStandard: TokenStandardArgs;
  collection: OptionOrNullable<CollectionArgs>;
  uses: OptionOrNullable<UsesArgs>;
  collectionDetails: OptionOrNullable<CollectionDetailsArgs>;
  programmableConfig: OptionOrNullable<ProgrammableConfigArgs>;
  delegateState: OptionOrNullable<DelegateStateArgs>;
};

export function getAssetDataEncoder() {
  return getStructEncoder<AssetDataArgs>([
    ['updateAuthority', getAddressEncoder()],
    ['name', getStringEncoder()],
    ['symbol', getStringEncoder()],
    ['uri', getStringEncoder()],
    ['sellerFeeBasisPoints', getU16Encoder()],
    ['creators', getOptionEncoder(getArrayEncoder(getCreatorEncoder()))],
    ['primarySaleHappened', getBooleanEncoder()],
    ['isMutable', getBooleanEncoder()],
    ['editionNonce', getOptionEncoder(getU8Encoder())],
    ['tokenStandard', getTokenStandardEncoder()],
    ['collection', getOptionEncoder(getCollectionEncoder())],
    ['uses', getOptionEncoder(getUsesEncoder())],
    ['collectionDetails', getOptionEncoder(getCollectionDetailsEncoder())],
    ['programmableConfig', getOptionEncoder(getProgrammableConfigEncoder())],
    ['delegateState', getOptionEncoder(getDelegateStateEncoder())],
  ]) satisfies Encoder<AssetDataArgs>;
}

export function getAssetDataDecoder() {
  return getStructDecoder<AssetData>([
    ['updateAuthority', getAddressDecoder()],
    ['name', getStringDecoder()],
    ['symbol', getStringDecoder()],
    ['uri', getStringDecoder()],
    ['sellerFeeBasisPoints', getU16Decoder()],
    ['creators', getOptionDecoder(getArrayDecoder(getCreatorDecoder()))],
    ['primarySaleHappened', getBooleanDecoder()],
    ['isMutable', getBooleanDecoder()],
    ['editionNonce', getOptionDecoder(getU8Decoder())],
    ['tokenStandard', getTokenStandardDecoder()],
    ['collection', getOptionDecoder(getCollectionDecoder())],
    ['uses', getOptionDecoder(getUsesDecoder())],
    ['collectionDetails', getOptionDecoder(getCollectionDetailsDecoder())],
    ['programmableConfig', getOptionDecoder(getProgrammableConfigDecoder())],
    ['delegateState', getOptionDecoder(getDelegateStateDecoder())],
  ]) satisfies Decoder<AssetData>;
}

export function getAssetDataCodec(): Codec<AssetDataArgs, AssetData> {
  return combineCodec(getAssetDataEncoder(), getAssetDataDecoder());
}
