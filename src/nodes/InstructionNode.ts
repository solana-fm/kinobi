import type { IdlInstruction } from '../idl';
import {
  BytesCreatedOnChain,
  InstructionArgDefault,
  InvalidKinobiTreeError,
  MainCaseString,
  PartialExcept,
  RemainingAccounts,
  mainCase,
} from '../shared';
import {
  InstructionAccountNode,
  instructionAccountNodeFromIdl,
} from './InstructionAccountNode';
import {
  InstructionDataArgsNode,
  instructionDataArgsNode,
} from './InstructionDataArgsNode';
import {
  InstructionExtraArgsNode,
  instructionExtraArgsNode,
} from './InstructionExtraArgsNode';
import type { Node } from './Node';
import { ProgramNode, isProgramNode } from './ProgramNode';
import { RootNode } from './RootNode';
import { structFieldTypeNode } from './StructFieldTypeNode';
import { structTypeNode, structTypeNodeFromIdl } from './StructTypeNode';
import { createTypeNodeFromIdl } from './TypeNode';
import { vScalar } from './ValueNode';

export type InstructionNode = {
  readonly __instructionNode: unique symbol;
  readonly kind: 'instructionNode';
  readonly name: MainCaseString;
  readonly accounts: InstructionAccountNode[];
  readonly dataArgs: InstructionDataArgsNode;
  readonly extraArgs: InstructionExtraArgsNode;
  readonly subInstructions: InstructionNode[];
  readonly idlName: string;
  readonly docs: string[];
  readonly internal: boolean;
  readonly bytesCreatedOnChain?: BytesCreatedOnChain;
  readonly remainingAccounts?: RemainingAccounts;
  readonly argDefaults: Record<MainCaseString, InstructionArgDefault>;
  readonly optionalAccountStrategy: 'omitted' | 'programId';
};

export type InstructionNodeInput = Omit<
  PartialExcept<InstructionNode, 'accounts' | 'dataArgs'>,
  '__instructionNode' | 'kind' | 'name' | 'argDefaults'
> & {
  name: string;
  argDefaults?: Record<string, InstructionArgDefault>;
};

export function instructionNode(input: InstructionNodeInput): InstructionNode {
  if (!input.name) {
    throw new InvalidKinobiTreeError('InstructionNode must have a name.');
  }
  const name = mainCase(input.name);
  return {
    kind: 'instructionNode',
    name,
    accounts: input.accounts,
    dataArgs: input.dataArgs,
    extraArgs:
      input.extraArgs ??
      instructionExtraArgsNode({
        name: `${name}InstructionExtra`,
        struct: structTypeNode([]),
      }),
    subInstructions: input.subInstructions ?? [],
    idlName: input.idlName ?? input.name,
    docs: input.docs ?? [],
    internal: input.internal ?? false,
    bytesCreatedOnChain: input.bytesCreatedOnChain,
    remainingAccounts: input.remainingAccounts,
    argDefaults: Object.fromEntries(
      Object.entries(input.argDefaults ?? {}).map(([key, value]) => [
        mainCase(key),
        value,
      ])
    ),
    optionalAccountStrategy: input.optionalAccountStrategy ?? 'programId',
  } as InstructionNode;
}

export function instructionNodeFromIdl(
  idl: Partial<IdlInstruction>
): InstructionNode {
  const idlName = idl.name ?? '';
  const name = mainCase(idlName);
  let dataArgs = structTypeNodeFromIdl({
    kind: 'struct',
    fields: idl.args ?? [],
  });
  if (idl.discriminant) {
    const discriminatorField = structFieldTypeNode({
      name: 'discriminator',
      child: createTypeNodeFromIdl(idl.discriminant.type),
      defaultsTo: {
        strategy: 'omitted',
        value: vScalar(idl.discriminant.value),
      },
    });
    dataArgs = structTypeNode([discriminatorField, ...dataArgs.fields]);
  }
  return instructionNode({
    name,
    idlName,
    docs: idl.docs ?? [],
    accounts: (idl.accounts ?? []).map((account) =>
      instructionAccountNodeFromIdl(account)
    ),
    dataArgs: instructionDataArgsNode({
      name: `${name}InstructionData`,
      struct: dataArgs,
    }),
    optionalAccountStrategy: idl.legacyOptionalAccountsStrategy
      ? 'omitted'
      : 'programId',
  });
}

export function getAllInstructionsWithSubs(
  node: ProgramNode | RootNode | InstructionNode,
  leavesOnly = false
): InstructionNode[] {
  if (isInstructionNode(node)) {
    if (node.subInstructions.length === 0) return [node];
    const subInstructions = node.subInstructions.flatMap((sub) =>
      getAllInstructionsWithSubs(sub, leavesOnly)
    );
    return leavesOnly ? subInstructions : [node, ...subInstructions];
  }

  const instructions = isProgramNode(node)
    ? node.instructions
    : node.programs.flatMap((program) => program.instructions);

  return instructions.flatMap((instruction) =>
    getAllInstructionsWithSubs(instruction, leavesOnly)
  );
}

export function isInstructionNode(node: Node | null): node is InstructionNode {
  return !!node && node.kind === 'instructionNode';
}

export function assertInstructionNode(
  node: Node | null
): asserts node is InstructionNode {
  if (!isInstructionNode(node)) {
    throw new Error(`Expected instructionNode, got ${node?.kind ?? 'null'}.`);
  }
}
