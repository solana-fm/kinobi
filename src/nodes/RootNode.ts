import type { Visitable, Visitor } from '../visitors';

export class RootNode implements Visitable {
  readonly idl: object;

  constructor(idl: object) {
    this.idl = idl;
  }

  visit(visitor: Visitor): void {
    visitor.visitRoot(this);
  }
}