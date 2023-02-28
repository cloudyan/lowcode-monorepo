
import React from 'react'
import Save from '../components/save'


// SavePlugin 组件
const SavePlugin = (ctx, options) => {
  return {
    async init() {
      const { skeleton, documentModel } = ctx;

      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'SavePlugin',
        index: 10,
        content: Save,
        contentProps: {
          documentModel,
        },
        props: {
          align: 'right',
        },
      });
    }
  }
}

SavePlugin.pluginName = 'SavePlugin';

export default SavePlugin
