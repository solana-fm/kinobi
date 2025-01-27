import * as nodes from '../../../nodes';
import { pascalCase } from '../../../shared';
import { NameApi } from '../nameTransformers';
import { Fragment, fragmentFromTemplate, mergeFragments } from './common';
import { getInstructionAccountMetaFragment } from './instructionAccountMeta';
import { getInstructionAccountTypeParamFragment } from './instructionAccountTypeParam';

export function getInstructionTypeFragment(scope: {
  instructionNode: nodes.InstructionNode;
  programNode: nodes.ProgramNode;
  withSigners: boolean;
  nameApi: NameApi;
}): Fragment {
  const { instructionNode, programNode, withSigners, nameApi } = scope;
  const hasAccounts = instructionNode.accounts.length > 0;
  const hasData =
    !!instructionNode.dataArgs.link ||
    instructionNode.dataArgs.struct.fields.length > 0;
  const dataType = instructionNode.dataArgs.link
    ? pascalCase(instructionNode.dataArgs.link.name)
    : pascalCase(instructionNode.dataArgs.name);
  const accountTypeParamsFragment = mergeFragments(
    instructionNode.accounts.map((account) =>
      getInstructionAccountTypeParamFragment({
        ...scope,
        instructionAccountNode: account,
        allowAccountMeta: true,
      })
    ),
    (renders) => renders.join(', ')
  );
  const usesLegacyOptionalAccounts =
    instructionNode.optionalAccountStrategy === 'omitted';
  const accountMetasFragment = mergeFragments(
    instructionNode.accounts.map((account) =>
      getInstructionAccountMetaFragment(account, withSigners).mapRender((r) => {
        const typeParam = `TAccount${pascalCase(account.name)}`;
        const isLegacyOptional =
          account.isOptional && usesLegacyOptionalAccounts;
        const type = `${typeParam} extends string ? ${r} : ${typeParam}`;
        if (!isLegacyOptional) return type;
        return `...(${typeParam} extends undefined ? [] : [${type}])`;
      })
    ),
    (renders) => renders.join(', ')
  );

  const fragment = fragmentFromTemplate('instructionType.njk', {
    instruction: instructionNode,
    instructionType: withSigners
      ? nameApi.instructionWithSignersType(instructionNode.name)
      : nameApi.instructionType(instructionNode.name),
    program: programNode,
    hasData,
    hasAccounts,
    dataType,
    accountTypeParams: accountTypeParamsFragment.render,
    accountMetas: accountMetasFragment.render,
  })
    .mergeImportsWith(accountTypeParamsFragment, accountMetasFragment)
    .addImports('solanaInstructions', [
      'IAccountMeta',
      'IInstruction',
      'IInstructionWithAccounts',
      ...(hasData ? ['IInstructionWithData'] : []),
    ]);

  // TODO: if link, add import for data type. Unless we don't need to inject the data type in IInstructionWithData.

  return fragment;
}
