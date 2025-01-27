import { ImportFrom, MainCaseString, mainCase } from '../shared';
import type { Node } from './Node';

export type LinkTypeNode = {
  readonly __linkTypeNode: unique symbol;
  readonly kind: 'linkTypeNode';
  readonly name: MainCaseString;
  readonly importFrom: ImportFrom;
  readonly size?: number;
};

export function linkTypeNode(
  name: string,
  options: {
    readonly importFrom?: ImportFrom;
    readonly size?: number;
  } = {}
): LinkTypeNode {
  return {
    kind: 'linkTypeNode',
    name: mainCase(name),
    importFrom: options.importFrom ?? 'generated',
    size: options.size,
  } as LinkTypeNode;
}

export function isLinkTypeNode(node: Node | null): node is LinkTypeNode {
  return !!node && node.kind === 'linkTypeNode';
}

export function assertLinkTypeNode(
  node: Node | null
): asserts node is LinkTypeNode {
  if (!isLinkTypeNode(node)) {
    throw new Error(`Expected linkTypeNode, got ${node?.kind ?? 'null'}.`);
  }
}
