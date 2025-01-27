import type { ImportFrom } from '../../shared';
import { Fragment } from './fragments';
import { TypeManifest } from './TypeManifest';

const DEFAULT_MODULE_MAP: Record<string, string> = {
  // External.
  solanaAccounts: '@solana/accounts',
  solanaAddresses: '@solana/addresses',
  solanaCodecsCore: '@solana/codecs-core',
  solanaCodecsNumbers: '@solana/codecs-numbers',
  solanaCodecsStrings: '@solana/codecs-strings',
  solanaCodecsDataStructures: '@solana/codecs-data-structures',
  solanaInstructions: '@solana/instructions',
  solanaOptions: '@solana/options',
  solanaSigners: '@solana/signers',
  solanaTransactions: '@solana/transactions',

  // Internal.
  types: '../types',
  errors: '../errors',
  shared: '../shared',
  generated: '..',
  hooked: '../../hooked',
  generatedAccounts: '../accounts',
  generatedErrors: '../errors',
  generatedTypes: '../types',
};

export class ImportMap {
  protected readonly _imports: Map<ImportFrom, Set<string>> = new Map();

  protected readonly _aliases: Map<ImportFrom, Record<string, string>> =
    new Map();

  add(module: ImportFrom, imports: string | string[] | Set<string>): ImportMap {
    const currentImports = this._imports.get(module) ?? new Set();
    const newImports = typeof imports === 'string' ? [imports] : imports;
    newImports.forEach((i) => currentImports.add(i));
    this._imports.set(module, currentImports);
    return this;
  }

  remove(
    module: ImportFrom,
    imports: string | string[] | Set<string>
  ): ImportMap {
    const currentImports = this._imports.get(module) ?? new Set();
    const importsToRemove = typeof imports === 'string' ? [imports] : imports;
    importsToRemove.forEach((i) => currentImports.delete(i));
    if (currentImports.size === 0) {
      this._imports.delete(module);
    } else {
      this._imports.set(module, currentImports);
    }
    return this;
  }

  mergeWith(...others: (ImportMap | Fragment)[]): ImportMap {
    others.forEach((rawOther) => {
      const other = 'imports' in rawOther ? rawOther.imports : rawOther;
      other._imports.forEach((imports, module) => {
        this.add(module, imports);
      });
      other._aliases.forEach((aliases, module) => {
        Object.entries(aliases).forEach(([name, alias]) => {
          this.addAlias(module, name, alias);
        });
      });
    });
    return this;
  }

  mergeWithManifest(manifest: TypeManifest): ImportMap {
    return this.mergeWith(
      manifest.strictType,
      manifest.looseType,
      manifest.encoder,
      manifest.decoder
    );
  }

  addAlias(module: ImportFrom, name: string, alias: string): ImportMap {
    const currentAliases = this._aliases.get(module) ?? {};
    currentAliases[name] = alias;
    this._aliases.set(module, currentAliases);
    return this;
  }

  isEmpty(): boolean {
    return this._imports.size === 0;
  }

  toString(dependencies: Record<ImportFrom, string>): string {
    const dependencyMap = { ...DEFAULT_MODULE_MAP, ...dependencies };
    const importStatements = [...this._imports.entries()]
      .map(([module, imports]) => {
        const mappedModule: string = dependencyMap[module] ?? module;
        return [mappedModule, module, imports] as const;
      })
      .sort(([a], [b]) => {
        const aIsRelative = a.startsWith('.');
        const bIsRelative = b.startsWith('.');
        if (aIsRelative && !bIsRelative) return 1;
        if (!aIsRelative && bIsRelative) return -1;
        return a.localeCompare(b);
      })
      .map(([mappedModule, module, imports]) => {
        const aliasMap = this._aliases.get(module) ?? {};
        const joinedImports = [...imports]
          .sort()
          .map((i) => (aliasMap[i] ? `${i} as ${aliasMap[i]}` : i))
          .join(', ');
        return `import { ${joinedImports} } from '${mappedModule}';`;
      });
    return importStatements.join('\n');
  }
}
