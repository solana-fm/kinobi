import * as nodes from '../../nodes';
import {
  NodeTransform,
  NodeTransformer,
  TransformNodesVisitor,
} from './TransformNodesVisitor';

export type ProgramUpdates =
  | NodeTransformer<nodes.ProgramNode>
  | { delete: true }
  | Partial<nodes.ProgramNodeMetadata>;

export class UpdateProgramsVisitor extends TransformNodesVisitor {
  constructor(readonly map: Record<string, ProgramUpdates>) {
    const transforms = Object.entries(map).map(
      ([name, updates]): NodeTransform => ({
        selector: { type: 'program', name },
        transformer: (node, stack, program) => {
          nodes.assertProgramNode(node);
          if (typeof updates === 'function') {
            return updates(node, stack, program);
          }
          if ('delete' in updates) {
            return null;
          }
          return new nodes.ProgramNode(
            { ...node.metadata, ...updates },
            node.accounts,
            node.instructions,
            node.definedTypes,
            node.errors
          );
        },
      })
    );

    super(transforms);
  }
}