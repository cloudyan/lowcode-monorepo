
import React from 'react'
import CanvasPanel from '@lowcodejs/canvas-panel'

const PluginCanvasPanel = (ctx, options) => {
  return {
    async init() {
      const { skeleton, config } = ctx;

      skeleton.add({
        area: 'mainArea',
        type: 'pane',
        name: 'CanvasPanel',
        content: CanvasPanel,
        contentProps: {title: 'CanvasPanel test'},
        props: {},
      });
    }
  }
}

PluginCanvasPanel.pluginName = 'PluginCanvasPanel';

export default PluginCanvasPanel
