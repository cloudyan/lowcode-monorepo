import { makeObservable } from '../../utils';

export class Skeleton {
  readonly editor;
  private containers = new Map<string, {}>();
  readonly topArea;
  readonly leftArea;
  readonly toolArea;
  readonly mainArea;
  readonly rightArea;
  readonly bottomArea;

  constructor(editor) {
    // makeObservable(this)
    this.editor = editor
  }

  add() {

  }

  remove() {

  }
}
