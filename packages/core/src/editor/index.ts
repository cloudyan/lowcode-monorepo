import { EventEmitter } from 'events';

import { obx } from '../utils';
import { engineConfig } from './engine-config'

// export declare interface Editor extends EventEmitter {

// }

export interface IEditor {}

const keyBlacklist = [
  'designer',
  'skeleton',
  'currentDocument',
  'simulator',
  'plugins',
];

export class Editor extends (EventEmitter as any) implements IEditor {
  /**
   * Ioc Container
   */
  @obx.shallow private context = new Map<KeyType, any>();

  get<T = undefined, KeyOrType = any>(keyOrType: KeyOrType): GetReturnType<T, KeyOrType> | undefined {
    return this.context.get(keyOrType as any);
  }

  has(keyOrType: KeyType): boolean {
    return this.context.has(keyOrType);
  }

  set(key: KeyType, data: any): void | Promise<void> {
    if (!keyBlacklist.includes(key as string)) {
      engineConfig.set(key as any, data)
    }
  }
}
