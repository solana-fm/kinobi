//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct CreateEscrowAccount {
    /// Escrow account
    pub escrow: solana_program::pubkey::Pubkey,
    /// Metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// Mint account
    pub mint: solana_program::pubkey::Pubkey,
    /// Token account of the token
    pub token_account: solana_program::pubkey::Pubkey,
    /// Edition account
    pub edition: solana_program::pubkey::Pubkey,
    /// Wallet paying for the transaction and new account
    pub payer: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Instructions sysvar account
    pub sysvar_instructions: solana_program::pubkey::Pubkey,
    /// Authority/creator of the escrow account
    pub authority: Option<solana_program::pubkey::Pubkey>,
}

impl CreateEscrowAccount {
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(&[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(9 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.escrow,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.mint, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.edition,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.sysvar_instructions,
            false,
        ));
        if let Some(authority) = self.authority {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                authority, true,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.extend_from_slice(remaining_accounts);
        let data = CreateEscrowAccountInstructionData::new()
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
struct CreateEscrowAccountInstructionData {
    discriminator: u8,
}

impl CreateEscrowAccountInstructionData {
    fn new() -> Self {
        Self { discriminator: 38 }
    }
}

/// Instruction builder for `CreateEscrowAccount`.
///
/// ### Accounts:
///
///   0. `[writable]` escrow
///   1. `[writable]` metadata
///   2. `[]` mint
///   3. `[]` token_account
///   4. `[]` edition
///   5. `[writable, signer]` payer
///   6. `[optional]` system_program (default to `11111111111111111111111111111111`)
///   7. `[optional]` sysvar_instructions (default to `Sysvar1nstructions1111111111111111111111111`)
///   8. `[signer, optional]` authority
#[derive(Default)]
pub struct CreateEscrowAccountBuilder {
    escrow: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    token_account: Option<solana_program::pubkey::Pubkey>,
    edition: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    sysvar_instructions: Option<solana_program::pubkey::Pubkey>,
    authority: Option<solana_program::pubkey::Pubkey>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl CreateEscrowAccountBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Escrow account
    #[inline(always)]
    pub fn escrow(&mut self, escrow: solana_program::pubkey::Pubkey) -> &mut Self {
        self.escrow = Some(escrow);
        self
    }
    /// Metadata account
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// Mint account
    #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    /// Token account of the token
    #[inline(always)]
    pub fn token_account(&mut self, token_account: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_account = Some(token_account);
        self
    }
    /// Edition account
    #[inline(always)]
    pub fn edition(&mut self, edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.edition = Some(edition);
        self
    }
    /// Wallet paying for the transaction and new account
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    /// `[optional account, default to '11111111111111111111111111111111']`
    /// System program
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    /// `[optional account, default to 'Sysvar1nstructions1111111111111111111111111']`
    /// Instructions sysvar account
    #[inline(always)]
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.sysvar_instructions = Some(sysvar_instructions);
        self
    }
    /// `[optional account]`
    /// Authority/creator of the escrow account
    #[inline(always)]
    pub fn authority(&mut self, authority: Option<solana_program::pubkey::Pubkey>) -> &mut Self {
        self.authority = authority;
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
        let accounts = CreateEscrowAccount {
            escrow: self.escrow.expect("escrow is not set"),
            metadata: self.metadata.expect("metadata is not set"),
            mint: self.mint.expect("mint is not set"),
            token_account: self.token_account.expect("token_account is not set"),
            edition: self.edition.expect("edition is not set"),
            payer: self.payer.expect("payer is not set"),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            sysvar_instructions: self.sysvar_instructions.unwrap_or(solana_program::pubkey!(
                "Sysvar1nstructions1111111111111111111111111"
            )),
            authority: self.authority,
        };

        accounts.instruction_with_remaining_accounts(&self.__remaining_accounts)
    }
}

/// `create_escrow_account` CPI accounts.
pub struct CreateEscrowAccountCpiAccounts<'a, 'b> {
    /// Escrow account
    pub escrow: &'b solana_program::account_info::AccountInfo<'a>,
    /// Metadata account
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint account
    pub mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Token account of the token
    pub token_account: &'b solana_program::account_info::AccountInfo<'a>,
    /// Edition account
    pub edition: &'b solana_program::account_info::AccountInfo<'a>,
    /// Wallet paying for the transaction and new account
    pub payer: &'b solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Instructions sysvar account
    pub sysvar_instructions: &'b solana_program::account_info::AccountInfo<'a>,
    /// Authority/creator of the escrow account
    pub authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
}

/// `create_escrow_account` CPI instruction.
pub struct CreateEscrowAccountCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Escrow account
    pub escrow: &'b solana_program::account_info::AccountInfo<'a>,
    /// Metadata account
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint account
    pub mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Token account of the token
    pub token_account: &'b solana_program::account_info::AccountInfo<'a>,
    /// Edition account
    pub edition: &'b solana_program::account_info::AccountInfo<'a>,
    /// Wallet paying for the transaction and new account
    pub payer: &'b solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Instructions sysvar account
    pub sysvar_instructions: &'b solana_program::account_info::AccountInfo<'a>,
    /// Authority/creator of the escrow account
    pub authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
}

impl<'a, 'b> CreateEscrowAccountCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: CreateEscrowAccountCpiAccounts<'a, 'b>,
    ) -> Self {
        Self {
            __program: program,
            escrow: accounts.escrow,
            metadata: accounts.metadata,
            mint: accounts.mint,
            token_account: accounts.token_account,
            edition: accounts.edition,
            payer: accounts.payer,
            system_program: accounts.system_program,
            sysvar_instructions: accounts.sysvar_instructions,
            authority: accounts.authority,
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
        let mut accounts = Vec::with_capacity(9 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.escrow.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.edition.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.sysvar_instructions.key,
            false,
        ));
        if let Some(authority) = self.authority {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *authority.key,
                true,
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
        let data = CreateEscrowAccountInstructionData::new()
            .try_to_vec()
            .unwrap();

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(9 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.escrow.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.mint.clone());
        account_infos.push(self.token_account.clone());
        account_infos.push(self.edition.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.system_program.clone());
        account_infos.push(self.sysvar_instructions.clone());
        if let Some(authority) = self.authority {
            account_infos.push(authority.clone());
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

/// Instruction builder for `CreateEscrowAccount` via CPI.
///
/// ### Accounts:
///
///   0. `[writable]` escrow
///   1. `[writable]` metadata
///   2. `[]` mint
///   3. `[]` token_account
///   4. `[]` edition
///   5. `[writable, signer]` payer
///   6. `[]` system_program
///   7. `[]` sysvar_instructions
///   8. `[signer, optional]` authority
pub struct CreateEscrowAccountCpiBuilder<'a, 'b> {
    instruction: Box<CreateEscrowAccountCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> CreateEscrowAccountCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(CreateEscrowAccountCpiBuilderInstruction {
            __program: program,
            escrow: None,
            metadata: None,
            mint: None,
            token_account: None,
            edition: None,
            payer: None,
            system_program: None,
            sysvar_instructions: None,
            authority: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Escrow account
    #[inline(always)]
    pub fn escrow(
        &mut self,
        escrow: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.escrow = Some(escrow);
        self
    }
    /// Metadata account
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// Mint account
    #[inline(always)]
    pub fn mint(&mut self, mint: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    /// Token account of the token
    #[inline(always)]
    pub fn token_account(
        &mut self,
        token_account: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_account = Some(token_account);
        self
    }
    /// Edition account
    #[inline(always)]
    pub fn edition(
        &mut self,
        edition: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.edition = Some(edition);
        self
    }
    /// Wallet paying for the transaction and new account
    #[inline(always)]
    pub fn payer(&mut self, payer: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
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
    /// Instructions sysvar account
    #[inline(always)]
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.sysvar_instructions = Some(sysvar_instructions);
        self
    }
    /// `[optional account]`
    /// Authority/creator of the escrow account
    #[inline(always)]
    pub fn authority(
        &mut self,
        authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.authority = authority;
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
        let instruction = CreateEscrowAccountCpi {
            __program: self.instruction.__program,

            escrow: self.instruction.escrow.expect("escrow is not set"),

            metadata: self.instruction.metadata.expect("metadata is not set"),

            mint: self.instruction.mint.expect("mint is not set"),

            token_account: self
                .instruction
                .token_account
                .expect("token_account is not set"),

            edition: self.instruction.edition.expect("edition is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            sysvar_instructions: self
                .instruction
                .sysvar_instructions
                .expect("sysvar_instructions is not set"),

            authority: self.instruction.authority,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct CreateEscrowAccountCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    escrow: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    token_account: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    edition: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    sysvar_instructions: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
