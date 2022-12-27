import React, { createElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { globalContext } from './utils/di';
import { Editor } from './editor'
import { engineConfig } from './editor/engine-config';
import { PluginManager } from './plugin';
// import { Designer } from './designer';
import { Workbench, Skeleton } from './skeleton';

const editor = new Editor();
globalContext.register(editor, 'editor');

const innerSkeleton = new Skeleton(editor)
editor.set('skeleton' as any, innerSkeleton);

const pluginManager = new PluginManager(editor).toProxy();
editor.set('pluginManager' as any, pluginManager);

export function getWorkbench() {
  return (props) => (<Workbench {...props} skeleton={innerSkeleton} />)
}

// const designer = new Designer({editor});
// editor.set('designer' as any, designer);

export {
  editor,
  engineConfig,
  pluginManager,
};

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
      skeleton: innerSkeleton,
      // className: 'engine-main',
    }),
    container,
  );
}


export interface EngineOptions {}
export interface ILowCodePluginContext {}
