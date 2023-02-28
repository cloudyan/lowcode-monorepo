import { observable, makeObservable, makeAutoObservable } from '../utils';
import AreaContainer from './area-container'
import Widget from './widget';

import { AreaEnums } from './types';

interface ISkeletonConfig {
  name: string;
  area: AreaEnums;
  [key: string]: any
}

// 装饰器只能用于装饰 class component，不能装饰函数式组件
export class Skeleton {
  readonly editor;
  private containers = new Map<string, {}>();
  readonly topArea;
  readonly leftArea;
  readonly toolArea;
  readonly mainArea;
  readonly rightArea;

  constructor(editor) {
    // makeObservable(this, {
    //   editor: observable,
    // })

    this.editor = editor
    this.topArea = new AreaContainer('topArea')
    this.leftArea = new AreaContainer('leftArea')
    this.toolArea = new AreaContainer('toolArea')
    this.mainArea = new AreaContainer('mainArea')
    this.rightArea = new AreaContainer('rightArea')
  }

  add(config: ISkeletonConfig) {
    console.log('skeleton add', config);
    const { area } = config;

    let item = new Widget(config.name, config)
    // console.log(item)
    switch (area) {
      case 'topArea':
      case 'leftArea':
      case 'toolArea':
      case 'mainArea':
      case 'rightArea':
        return this[area].add(config, item)
      default:
        // do nothing...
        // const errArea: never = area;
        const n: never = area;
        console.error(`扩展区 ${n} 不存在`)
    }
  }

  remove(area: AreaEnums, name: string) {
    switch (area) {
      case 'topArea':
      case 'leftArea':
      case 'toolArea':
      case 'mainArea':
      case 'rightArea':
        return this[area].remove(name)
      default:
        // do nothing...
        const n: never = area;
        console.error(`扩展区 ${n} 不存在`)
    }
  }
}
