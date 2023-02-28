import React, { createElement } from 'react';
import { render } from 'react-dom';

// render(
//   createElement(Workbench, {
//     skeleton,
//     // className: 'engine-main',
//   }),
//   container,
// );

import { globalContext } from './utils/di';
import { Editor } from './editor';
import { engineConfig } from './engine-config';
import { PluginManager } from './plugin';
import { Designer } from './designer';
import { Skeleton } from './skeleton';
import { Workbench } from './layout';
import { Material } from './assets';
// import { observer } from './utils'

export interface EngineOptions {}
export interface ILowCodePluginContext {}

const editor = new Editor();
globalContext.register(editor, 'editor');

editor.set('engineConfig' as any, engineConfig);

const skeleton = new Skeleton(editor);
editor.set('skeleton' as any, skeleton);

const pluginManager = new PluginManager(editor).toProxy();
editor.set('pluginManager' as any, pluginManager);

console.log(globalContext.get('editor').editorConfig);

const material = new Material();
editor.set('material' as any, material);

const designer = new Designer(editor);
editor.set('designer' as any, designer);

// editorConfig, pluginManager, skeleton, material
export {
  editor,
  engineConfig,
  pluginManager,
  skeleton,
  designer,
  material,
  // project,
};

export const version = '0.0.1';
engineConfig.set('ENGINE_VERSION', version);

// 工作台
export function getWorkbench() {
  return (props) => <Workbench {...props} skeleton={skeleton} />;
}

export async function init(
  container?: HTMLElement,
  options: EngineOptions = {},
) {
  if (!container) {
    container = document.createElement('div');
    container.id = 'lowcode-container';
    document.body.appendChild(container);
  }

  render(
    createElement(Workbench, {
      skeleton,
      // className: 'engine-main',
    }),
    container,
  );
}
