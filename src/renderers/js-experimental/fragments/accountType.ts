import * as nodes from '../../../nodes';
import { TypeManifest } from '../TypeManifest';
import { NameApi } from '../nameTransformers';
import { Fragment, fragment, fragmentFromTemplate } from './common';
import { getTypeWithCodecFragment } from './typeWithCodec';

export function getAccountTypeFragment(scope: {
  accountNode: nodes.AccountNode;
  typeManifest: TypeManifest;
  nameApi: NameApi;
}): Fragment {
  const { accountNode, typeManifest, nameApi } = scope;
  const typeWithCodecFragment = accountNode.data.link
    ? fragment('')
    : getTypeWithCodecFragment({
        name: accountNode.data.name,
        manifest: typeManifest,
        nameApi,
      });

  const dataNameFragment = accountNode.data.link
    ? typeManifest.strictType.clone()
    : fragment(nameApi.dataType(accountNode.data.name));

  return fragmentFromTemplate('accountType.njk', {
    accountType: nameApi.accountType(accountNode.name),
    dataName: dataNameFragment.render,
    typeWithCodec: typeWithCodecFragment,
  })
    .mergeImportsWith(dataNameFragment, typeWithCodecFragment)
    .addImports('solanaAccounts', 'Account');
}
