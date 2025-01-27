import { TypeManifest } from '../TypeManifest';
import { NameApi } from '../nameTransformers';
import { Fragment, fragmentFromTemplate } from './common';

export function getTypeFragment(scope: {
  name: string;
  manifest: TypeManifest;
  nameApi: NameApi;
  docs?: string[];
}): Fragment {
  const { name, manifest, nameApi, docs = [] } = scope;
  const typeFragment = fragmentFromTemplate('type.njk', {
    strictName: nameApi.dataType(name),
    looseName: nameApi.dataArgsType(name),
    manifest,
    docs,
  });

  if (!manifest.isEnum) {
    typeFragment.mergeImportsWith(manifest.strictType, manifest.looseType);
  }

  return typeFragment;
}
