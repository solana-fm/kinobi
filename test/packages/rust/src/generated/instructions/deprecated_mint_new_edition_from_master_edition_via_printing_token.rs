//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct DeprecatedMintNewEditionFromMasterEditionViaPrintingToken {
    /// New Metadata key (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// New Edition V1 (pda of ['metadata', program id, mint id, 'edition'])
    pub edition: solana_program::pubkey::Pubkey,
    /// Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    pub master_edition: solana_program::pubkey::Pubkey,
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    pub mint: solana_program::pubkey::Pubkey,
    /// Mint authority of new mint
    pub mint_authority: solana_program::pubkey::Pubkey,
    /// Printing Mint of master record edition
    pub printing_mint: solana_program::pubkey::Pubkey,
    /// Token account containing Printing mint token to be transferred
    pub master_token_account: solana_program::pubkey::Pubkey,
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master mint id, edition_number])
    pub edition_marker: solana_program::pubkey::Pubkey,
    /// Burn authority for this token
    pub burn_authority: solana_program::pubkey::Pubkey,
    /// payer
    pub payer: solana_program::pubkey::Pubkey,
    /// update authority info for new metadata account
    pub master_update_authority: solana_program::pubkey::Pubkey,
    /// Master record metadata account
    pub master_metadata: solana_program::pubkey::Pubkey,
    /// Token program
    pub token_program: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Rent info
    pub rent: solana_program::pubkey::Pubkey,
    /// Reservation List - If present, and you are on this list, you can get an edition number given by your position on the list.
    pub reservation_list: Option<solana_program::pubkey::Pubkey>,
}

impl DeprecatedMintNewEditionFromMasterEditionViaPrintingToken {
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(&[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(16 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.edition,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.master_edition,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.mint, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.mint_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.printing_mint,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.master_token_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.edition_marker,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.burn_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.master_update_authority,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.master_metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.rent, false,
        ));
        if let Some(reservation_list) = self.reservation_list {
            accounts.push(solana_program::instruction::AccountMeta::new(
                reservation_list,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.extend_from_slice(remaining_accounts);
        let data = DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData::new()
            .try_to_vec()
            .unwrap();

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData {
    discriminator: u8,
}

impl DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData {
    fn new() -> Self {
        Self { discriminator: 3 }
    }
}

/// Instruction builder for `DeprecatedMintNewEditionFromMasterEditionViaPrintingToken`.
///
/// ### Accounts:
///
///   0. `[writable]` metadata
///   1. `[writable]` edition
///   2. `[writable]` master_edition
///   3. `[writable]` mint
///   4. `[signer]` mint_authority
///   5. `[writable]` printing_mint
///   6. `[writable]` master_token_account
///   7. `[writable]` edition_marker
///   8. `[signer]` burn_authority
///   9. `[signer]` payer
///   10. `[]` master_update_authority
///   11. `[]` master_metadata
///   12. `[optional]` token_program (default to `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`)
///   13. `[optional]` system_program (default to `11111111111111111111111111111111`)
///   14. `[optional]` rent (default to `SysvarRent111111111111111111111111111111111`)
///   15. `[writable, optional]` reservation_list
#[derive(Default)]
pub struct DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenBuilder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    edition: Option<solana_program::pubkey::Pubkey>,
    master_edition: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    mint_authority: Option<solana_program::pubkey::Pubkey>,
    printing_mint: Option<solana_program::pubkey::Pubkey>,
    master_token_account: Option<solana_program::pubkey::Pubkey>,
    edition_marker: Option<solana_program::pubkey::Pubkey>,
    burn_authority: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    master_update_authority: Option<solana_program::pubkey::Pubkey>,
    master_metadata: Option<solana_program::pubkey::Pubkey>,
    token_program: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    rent: Option<solana_program::pubkey::Pubkey>,
    reservation_list: Option<solana_program::pubkey::Pubkey>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// New Metadata key (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// New Edition V1 (pda of ['metadata', program id, mint id, 'edition'])
    #[inline(always)]
    pub fn edition(&mut self, edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.edition = Some(edition);
        self
    }
    /// Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    #[inline(always)]
    pub fn master_edition(&mut self, master_edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.master_edition = Some(master_edition);
        self
    }
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    /// Mint authority of new mint
    #[inline(always)]
    pub fn mint_authority(&mut self, mint_authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint_authority = Some(mint_authority);
        self
    }
    /// Printing Mint of master record edition
    #[inline(always)]
    pub fn printing_mint(&mut self, printing_mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.printing_mint = Some(printing_mint);
        self
    }
    /// Token account containing Printing mint token to be transferred
    #[inline(always)]
    pub fn master_token_account(
        &mut self,
        master_token_account: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.master_token_account = Some(master_token_account);
        self
    }
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master mint id, edition_number])
    #[inline(always)]
    pub fn edition_marker(&mut self, edition_marker: solana_program::pubkey::Pubkey) -> &mut Self {
        self.edition_marker = Some(edition_marker);
        self
    }
    /// Burn authority for this token
    #[inline(always)]
    pub fn burn_authority(&mut self, burn_authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.burn_authority = Some(burn_authority);
        self
    }
    /// payer
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    /// update authority info for new metadata account
    #[inline(always)]
    pub fn master_update_authority(
        &mut self,
        master_update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.master_update_authority = Some(master_update_authority);
        self
    }
    /// Master record metadata account
    #[inline(always)]
    pub fn master_metadata(
        &mut self,
        master_metadata: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.master_metadata = Some(master_metadata);
        self
    }
    /// `[optional account, default to 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA']`
    /// Token program
    #[inline(always)]
    pub fn token_program(&mut self, token_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_program = Some(token_program);
        self
    }
    /// `[optional account, default to '11111111111111111111111111111111']`
    /// System program
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    /// `[optional account, default to 'SysvarRent111111111111111111111111111111111']`
    /// Rent info
    #[inline(always)]
    pub fn rent(&mut self, rent: solana_program::pubkey::Pubkey) -> &mut Self {
        self.rent = Some(rent);
        self
    }
    /// `[optional account]`
    /// Reservation List - If present, and you are on this list, you can get an edition number given by your position on the list.
    #[inline(always)]
    pub fn reservation_list(
        &mut self,
        reservation_list: Option<solana_program::pubkey::Pubkey>,
    ) -> &mut Self {
        self.reservation_list = reservation_list;
        self
    }
    /// Add an aditional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: solana_program::instruction::AccountMeta,
    ) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    /// Add additional accounts to the instruction.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[solana_program::instruction::AccountMeta],
    ) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = DeprecatedMintNewEditionFromMasterEditionViaPrintingToken {
            metadata: self.metadata.expect("metadata is not set"),
            edition: self.edition.expect("edition is not set"),
            master_edition: self.master_edition.expect("master_edition is not set"),
            mint: self.mint.expect("mint is not set"),
            mint_authority: self.mint_authority.expect("mint_authority is not set"),
            printing_mint: self.printing_mint.expect("printing_mint is not set"),
            master_token_account: self
                .master_token_account
                .expect("master_token_account is not set"),
            edition_marker: self.edition_marker.expect("edition_marker is not set"),
            burn_authority: self.burn_authority.expect("burn_authority is not set"),
            payer: self.payer.expect("payer is not set"),
            master_update_authority: self
                .master_update_authority
                .expect("master_update_authority is not set"),
            master_metadata: self.master_metadata.expect("master_metadata is not set"),
            token_program: self.token_program.unwrap_or(solana_program::pubkey!(
                "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            )),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            rent: self.rent.unwrap_or(solana_program::pubkey!(
                "SysvarRent111111111111111111111111111111111"
            )),
            reservation_list: self.reservation_list,
        };

        accounts.instruction_with_remaining_accounts(&self.__remaining_accounts)
    }
}

/// `deprecated_mint_new_edition_from_master_edition_via_printing_token` CPI accounts.
pub struct DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenCpiAccounts<'a, 'b> {
    /// New Metadata key (pda of ['metadata', program id, mint id])
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// New Edition V1 (pda of ['metadata', program id, mint id, 'edition'])
    pub edition: &'b solana_program::account_info::AccountInfo<'a>,
    /// Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    pub master_edition: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    pub mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint authority of new mint
    pub mint_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// Printing Mint of master record edition
    pub printing_mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Token account containing Printing mint token to be transferred
    pub master_token_account: &'b solana_program::account_info::AccountInfo<'a>,
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master mint id, edition_number])
    pub edition_marker: &'b solana_program::account_info::AccountInfo<'a>,
    /// Burn authority for this token
    pub burn_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// payer
    pub payer: &'b solana_program::account_info::AccountInfo<'a>,
    /// update authority info for new metadata account
    pub master_update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// Master record metadata account
    pub master_metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Token program
    pub token_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Rent info
    pub rent: &'b solana_program::account_info::AccountInfo<'a>,
    /// Reservation List - If present, and you are on this list, you can get an edition number given by your position on the list.
    pub reservation_list: Option<&'b solana_program::account_info::AccountInfo<'a>>,
}

/// `deprecated_mint_new_edition_from_master_edition_via_printing_token` CPI instruction.
pub struct DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,
    /// New Metadata key (pda of ['metadata', program id, mint id])
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// New Edition V1 (pda of ['metadata', program id, mint id, 'edition'])
    pub edition: &'b solana_program::account_info::AccountInfo<'a>,
    /// Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    pub master_edition: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    pub mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint authority of new mint
    pub mint_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// Printing Mint of master record edition
    pub printing_mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Token account containing Printing mint token to be transferred
    pub master_token_account: &'b solana_program::account_info::AccountInfo<'a>,
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master mint id, edition_number])
    pub edition_marker: &'b solana_program::account_info::AccountInfo<'a>,
    /// Burn authority for this token
    pub burn_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// payer
    pub payer: &'b solana_program::account_info::AccountInfo<'a>,
    /// update authority info for new metadata account
    pub master_update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// Master record metadata account
    pub master_metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Token program
    pub token_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Rent info
    pub rent: &'b solana_program::account_info::AccountInfo<'a>,
    /// Reservation List - If present, and you are on this list, you can get an edition number given by your position on the list.
    pub reservation_list: Option<&'b solana_program::account_info::AccountInfo<'a>>,
}

impl<'a, 'b> DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenCpiAccounts<'a, 'b>,
    ) -> Self {
        Self {
            __program: program,
            metadata: accounts.metadata,
            edition: accounts.edition,
            master_edition: accounts.master_edition,
            mint: accounts.mint,
            mint_authority: accounts.mint_authority,
            printing_mint: accounts.printing_mint,
            master_token_account: accounts.master_token_account,
            edition_marker: accounts.edition_marker,
            burn_authority: accounts.burn_authority,
            payer: accounts.payer,
            master_update_authority: accounts.master_update_authority,
            master_metadata: accounts.master_metadata,
            token_program: accounts.token_program,
            system_program: accounts.system_program,
            rent: accounts.rent,
            reservation_list: accounts.reservation_list,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(16 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.edition.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.master_edition.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.mint_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.printing_mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.master_token_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.edition_marker.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.burn_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.master_update_authority.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.master_metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.rent.key,
            false,
        ));
        if let Some(reservation_list) = self.reservation_list {
            accounts.push(solana_program::instruction::AccountMeta::new(
                *reservation_list.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let data = DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData::new()
            .try_to_vec()
            .unwrap();

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(16 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.edition.clone());
        account_infos.push(self.master_edition.clone());
        account_infos.push(self.mint.clone());
        account_infos.push(self.mint_authority.clone());
        account_infos.push(self.printing_mint.clone());
        account_infos.push(self.master_token_account.clone());
        account_infos.push(self.edition_marker.clone());
        account_infos.push(self.burn_authority.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.master_update_authority.clone());
        account_infos.push(self.master_metadata.clone());
        account_infos.push(self.token_program.clone());
        account_infos.push(self.system_program.clone());
        account_infos.push(self.rent.clone());
        if let Some(reservation_list) = self.reservation_list {
            account_infos.push(reservation_list.clone());
        }
        remaining_accounts
            .iter()
            .for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// Instruction builder for `DeprecatedMintNewEditionFromMasterEditionViaPrintingToken` via CPI.
///
/// ### Accounts:
///
///   0. `[writable]` metadata
///   1. `[writable]` edition
///   2. `[writable]` master_edition
///   3. `[writable]` mint
///   4. `[signer]` mint_authority
///   5. `[writable]` printing_mint
///   6. `[writable]` master_token_account
///   7. `[writable]` edition_marker
///   8. `[signer]` burn_authority
///   9. `[signer]` payer
///   10. `[]` master_update_authority
///   11. `[]` master_metadata
///   12. `[]` token_program
///   13. `[]` system_program
///   14. `[]` rent
///   15. `[writable, optional]` reservation_list
pub struct DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenCpiBuilder<'a, 'b> {
    instruction:
        Box<DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(
            DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenCpiBuilderInstruction {
                __program: program,
                metadata: None,
                edition: None,
                master_edition: None,
                mint: None,
                mint_authority: None,
                printing_mint: None,
                master_token_account: None,
                edition_marker: None,
                burn_authority: None,
                payer: None,
                master_update_authority: None,
                master_metadata: None,
                token_program: None,
                system_program: None,
                rent: None,
                reservation_list: None,
                __remaining_accounts: Vec::new(),
            },
        );
        Self { instruction }
    }
    /// New Metadata key (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// New Edition V1 (pda of ['metadata', program id, mint id, 'edition'])
    #[inline(always)]
    pub fn edition(
        &mut self,
        edition: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.edition = Some(edition);
        self
    }
    /// Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    #[inline(always)]
    pub fn master_edition(
        &mut self,
        master_edition: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_edition = Some(master_edition);
        self
    }
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    #[inline(always)]
    pub fn mint(&mut self, mint: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    /// Mint authority of new mint
    #[inline(always)]
    pub fn mint_authority(
        &mut self,
        mint_authority: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.mint_authority = Some(mint_authority);
        self
    }
    /// Printing Mint of master record edition
    #[inline(always)]
    pub fn printing_mint(
        &mut self,
        printing_mint: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.printing_mint = Some(printing_mint);
        self
    }
    /// Token account containing Printing mint token to be transferred
    #[inline(always)]
    pub fn master_token_account(
        &mut self,
        master_token_account: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_token_account = Some(master_token_account);
        self
    }
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master mint id, edition_number])
    #[inline(always)]
    pub fn edition_marker(
        &mut self,
        edition_marker: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.edition_marker = Some(edition_marker);
        self
    }
    /// Burn authority for this token
    #[inline(always)]
    pub fn burn_authority(
        &mut self,
        burn_authority: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.burn_authority = Some(burn_authority);
        self
    }
    /// payer
    #[inline(always)]
    pub fn payer(&mut self, payer: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    /// update authority info for new metadata account
    #[inline(always)]
    pub fn master_update_authority(
        &mut self,
        master_update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_update_authority = Some(master_update_authority);
        self
    }
    /// Master record metadata account
    #[inline(always)]
    pub fn master_metadata(
        &mut self,
        master_metadata: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_metadata = Some(master_metadata);
        self
    }
    /// Token program
    #[inline(always)]
    pub fn token_program(
        &mut self,
        token_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_program = Some(token_program);
        self
    }
    /// System program
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    /// Rent info
    #[inline(always)]
    pub fn rent(&mut self, rent: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.rent = Some(rent);
        self
    }
    /// `[optional account]`
    /// Reservation List - If present, and you are on this list, you can get an edition number given by your position on the list.
    #[inline(always)]
    pub fn reservation_list(
        &mut self,
        reservation_list: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.reservation_list = reservation_list;
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: &'b solana_program::account_info::AccountInfo<'a>,
        is_writable: bool,
        is_signer: bool,
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .push((account, is_writable, is_signer));
        self
    }
    /// Add additional accounts to the instruction.
    ///
    /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
    /// and a `bool` indicating whether the account is a signer or not.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let instruction = DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenCpi {
            __program: self.instruction.__program,

            metadata: self.instruction.metadata.expect("metadata is not set"),

            edition: self.instruction.edition.expect("edition is not set"),

            master_edition: self
                .instruction
                .master_edition
                .expect("master_edition is not set"),

            mint: self.instruction.mint.expect("mint is not set"),

            mint_authority: self
                .instruction
                .mint_authority
                .expect("mint_authority is not set"),

            printing_mint: self
                .instruction
                .printing_mint
                .expect("printing_mint is not set"),

            master_token_account: self
                .instruction
                .master_token_account
                .expect("master_token_account is not set"),

            edition_marker: self
                .instruction
                .edition_marker
                .expect("edition_marker is not set"),

            burn_authority: self
                .instruction
                .burn_authority
                .expect("burn_authority is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            master_update_authority: self
                .instruction
                .master_update_authority
                .expect("master_update_authority is not set"),

            master_metadata: self
                .instruction
                .master_metadata
                .expect("master_metadata is not set"),

            token_program: self
                .instruction
                .token_program
                .expect("token_program is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            rent: self.instruction.rent.expect("rent is not set"),

            reservation_list: self.instruction.reservation_list,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    edition: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    master_edition: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    mint_authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    printing_mint: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    master_token_account: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    edition_marker: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    burn_authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    master_update_authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    master_metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    token_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    rent: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    reservation_list: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
