import { createElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { globalContext } from './utils/di';
import { Editor } from './editor'
import { engineConfig } from './editor/engine-config';
import { PluginManager } from './plugin';
import { Designer } from './designer';
import { Skeleton } from './skeleton';

const editor = new Editor();
globalContext.register(editor, 'editor');

const pluginManager = new PluginManager(editor).toProxy();
const designer = new Designer({editor});
const innerSkeleton = new Skeleton(editor)
editor.set('plugins' as any, pluginManager);
editor.set('designer' as any, designer);
editor.set('skeleton' as any, innerSkeleton);

// const defaultPanel = (ctx: ILowCodePluginContext) => {
//   return {
//     init() {

//     }
//   }
// }
// defaultPanel.pluginName = '__default_panel__'

// (async function registerPlugins() {

//   // 注册默认面板
//   pluginManager.register(defaultPanel)
// })

export const version = '0.0.1';
engineConfig.set('ENGINE_VERSION', version);

// container which will host LowCodeEngine DOM
export async function init(
    container?: HTMLElement,
    options: EngineOptions = {},
  ) {
  if (!container) {
    container = document.createElement('div')
    container.id = 'lowcode-engine'
    document.body.appendChild(container)
  }

  render(
    createElement(Workbench, {
      skeleton: observableSkeleton,
      project: observableProject
    }),
    container,
  );
}


export interface EngineOptions {}
export interface ILowCodePluginContext {}
