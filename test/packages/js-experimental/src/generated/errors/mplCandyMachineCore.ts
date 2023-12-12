/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

export const enum MplCandyMachineCoreProgramErrorCode {
  /** IncorrectOwner: Account does not have correct owner */
  INCORRECT_OWNER = 0x1770, // 6000
  /** Uninitialized: Account is not initialized */
  UNINITIALIZED = 0x1771, // 6001
  /** MintMismatch: Mint Mismatch */
  MINT_MISMATCH = 0x1772, // 6002
  /** IndexGreaterThanLength: Index greater than length */
  INDEX_GREATER_THAN_LENGTH = 0x1773, // 6003
  /** NumericalOverflowError: Numerical overflow error */
  NUMERICAL_OVERFLOW_ERROR = 0x1774, // 6004
  /** TooManyCreators: Can only provide up to 4 creators to candy machine (because candy machine is one) */
  TOO_MANY_CREATORS = 0x1775, // 6005
  /** CandyMachineEmpty: Candy machine is empty */
  CANDY_MACHINE_EMPTY = 0x1776, // 6006
  /** HiddenSettingsDoNotHaveConfigLines: Candy machines using hidden uris do not have config lines, they have a single hash representing hashed order */
  HIDDEN_SETTINGS_DO_NOT_HAVE_CONFIG_LINES = 0x1777, // 6007
  /** CannotChangeNumberOfLines: Cannot change number of lines unless is a hidden config */
  CANNOT_CHANGE_NUMBER_OF_LINES = 0x1778, // 6008
  /** CannotSwitchToHiddenSettings: Cannot switch to hidden settings after items available is greater than 0 */
  CANNOT_SWITCH_TO_HIDDEN_SETTINGS = 0x1779, // 6009
  /** IncorrectCollectionAuthority: Incorrect collection NFT authority */
  INCORRECT_COLLECTION_AUTHORITY = 0x177a, // 6010
  /** MetadataAccountMustBeEmpty: The metadata account has data in it, and this must be empty to mint a new NFT */
  METADATA_ACCOUNT_MUST_BE_EMPTY = 0x177b, // 6011
  /** NoChangingCollectionDuringMint: Can't change collection settings after items have begun to be minted */
  NO_CHANGING_COLLECTION_DURING_MINT = 0x177c, // 6012
  /** ExceededLengthError: Value longer than expected maximum value */
  EXCEEDED_LENGTH_ERROR = 0x177d, // 6013
  /** MissingConfigLinesSettings: Missing config lines settings */
  MISSING_CONFIG_LINES_SETTINGS = 0x177e, // 6014
  /** CannotIncreaseLength: Cannot increase the length in config lines settings */
  CANNOT_INCREASE_LENGTH = 0x177f, // 6015
  /** CannotSwitchFromHiddenSettings: Cannot switch from hidden settings */
  CANNOT_SWITCH_FROM_HIDDEN_SETTINGS = 0x1780, // 6016
  /** CannotChangeSequentialIndexGeneration: Cannot change sequential index generation after items have begun to be minted */
  CANNOT_CHANGE_SEQUENTIAL_INDEX_GENERATION = 0x1781, // 6017
  /** CollectionKeyMismatch: Collection public key mismatch */
  COLLECTION_KEY_MISMATCH = 0x1782, // 6018
  /** CouldNotRetrieveConfigLineData: Could not retrive config line data */
  COULD_NOT_RETRIEVE_CONFIG_LINE_DATA = 0x1783, // 6019
  /** NotFullyLoaded: Not all config lines were added to the candy machine */
  NOT_FULLY_LOADED = 0x1784, // 6020
}

export class MplCandyMachineCoreProgramError extends Error {
  override readonly name = 'MplCandyMachineCoreProgramError';

  readonly code: MplCandyMachineCoreProgramErrorCode;

  readonly cause: Error | undefined;

  constructor(
    code: MplCandyMachineCoreProgramErrorCode,
    name: string,
    message: string,
    cause?: Error
  ) {
    super(`${name} (${code}): ${message}`);
    this.code = code;
    this.cause = cause;
  }
}

let mplCandyMachineCoreProgramErrorCodeMap:
  | Record<MplCandyMachineCoreProgramErrorCode, [string, string]>
  | undefined;
if (__DEV__) {
  mplCandyMachineCoreProgramErrorCodeMap = {
    [MplCandyMachineCoreProgramErrorCode.INCORRECT_OWNER]: [
      'IncorrectOwner',
      `Account does not have correct owner`,
    ],
    [MplCandyMachineCoreProgramErrorCode.UNINITIALIZED]: [
      'Uninitialized',
      `Account is not initialized`,
    ],
    [MplCandyMachineCoreProgramErrorCode.MINT_MISMATCH]: [
      'MintMismatch',
      `Mint Mismatch`,
    ],
    [MplCandyMachineCoreProgramErrorCode.INDEX_GREATER_THAN_LENGTH]: [
      'IndexGreaterThanLength',
      `Index greater than length`,
    ],
    [MplCandyMachineCoreProgramErrorCode.NUMERICAL_OVERFLOW_ERROR]: [
      'NumericalOverflowError',
      `Numerical overflow error`,
    ],
    [MplCandyMachineCoreProgramErrorCode.TOO_MANY_CREATORS]: [
      'TooManyCreators',
      `Can only provide up to 4 creators to candy machine (because candy machine is one)`,
    ],
    [MplCandyMachineCoreProgramErrorCode.CANDY_MACHINE_EMPTY]: [
      'CandyMachineEmpty',
      `Candy machine is empty`,
    ],
    [MplCandyMachineCoreProgramErrorCode.HIDDEN_SETTINGS_DO_NOT_HAVE_CONFIG_LINES]:
      [
        'HiddenSettingsDoNotHaveConfigLines',
        `Candy machines using hidden uris do not have config lines, they have a single hash representing hashed order`,
      ],
    [MplCandyMachineCoreProgramErrorCode.CANNOT_CHANGE_NUMBER_OF_LINES]: [
      'CannotChangeNumberOfLines',
      `Cannot change number of lines unless is a hidden config`,
    ],
    [MplCandyMachineCoreProgramErrorCode.CANNOT_SWITCH_TO_HIDDEN_SETTINGS]: [
      'CannotSwitchToHiddenSettings',
      `Cannot switch to hidden settings after items available is greater than 0`,
    ],
    [MplCandyMachineCoreProgramErrorCode.INCORRECT_COLLECTION_AUTHORITY]: [
      'IncorrectCollectionAuthority',
      `Incorrect collection NFT authority`,
    ],
    [MplCandyMachineCoreProgramErrorCode.METADATA_ACCOUNT_MUST_BE_EMPTY]: [
      'MetadataAccountMustBeEmpty',
      `The metadata account has data in it, and this must be empty to mint a new NFT`,
    ],
    [MplCandyMachineCoreProgramErrorCode.NO_CHANGING_COLLECTION_DURING_MINT]: [
      'NoChangingCollectionDuringMint',
      `Can't change collection settings after items have begun to be minted`,
    ],
    [MplCandyMachineCoreProgramErrorCode.EXCEEDED_LENGTH_ERROR]: [
      'ExceededLengthError',
      `Value longer than expected maximum value`,
    ],
    [MplCandyMachineCoreProgramErrorCode.MISSING_CONFIG_LINES_SETTINGS]: [
      'MissingConfigLinesSettings',
      `Missing config lines settings`,
    ],
    [MplCandyMachineCoreProgramErrorCode.CANNOT_INCREASE_LENGTH]: [
      'CannotIncreaseLength',
      `Cannot increase the length in config lines settings`,
    ],
    [MplCandyMachineCoreProgramErrorCode.CANNOT_SWITCH_FROM_HIDDEN_SETTINGS]: [
      'CannotSwitchFromHiddenSettings',
      `Cannot switch from hidden settings`,
    ],
    [MplCandyMachineCoreProgramErrorCode.CANNOT_CHANGE_SEQUENTIAL_INDEX_GENERATION]:
      [
        'CannotChangeSequentialIndexGeneration',
        `Cannot change sequential index generation after items have begun to be minted`,
      ],
    [MplCandyMachineCoreProgramErrorCode.COLLECTION_KEY_MISMATCH]: [
      'CollectionKeyMismatch',
      `Collection public key mismatch`,
    ],
    [MplCandyMachineCoreProgramErrorCode.COULD_NOT_RETRIEVE_CONFIG_LINE_DATA]: [
      'CouldNotRetrieveConfigLineData',
      `Could not retrive config line data`,
    ],
    [MplCandyMachineCoreProgramErrorCode.NOT_FULLY_LOADED]: [
      'NotFullyLoaded',
      `Not all config lines were added to the candy machine`,
    ],
  };
}

export function getMplCandyMachineCoreProgramErrorFromCode(
  code: MplCandyMachineCoreProgramErrorCode,
  cause?: Error
): MplCandyMachineCoreProgramError {
  if (__DEV__) {
    return new MplCandyMachineCoreProgramError(
      code,
      ...(
        mplCandyMachineCoreProgramErrorCodeMap as Record<
          MplCandyMachineCoreProgramErrorCode,
          [string, string]
        >
      )[code],
      cause
    );
  }

  return new MplCandyMachineCoreProgramError(
    code,
    'Unknown',
    'Error message not available in production bundles. Compile with __DEV__ set to true to see more information.',
    cause
  );
}