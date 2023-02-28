
import React from 'react'
import ComponentsPanel from '@lowcodejs/components-panel'

const PluginComponentsPanel = (ctx, options) => {
  return {
    async init() {
      const { skeleton, config } = ctx;

      skeleton.add({
        area: 'leftArea',
        type: 'pane',
        name: 'ComponentsPanel',
        content: ComponentsPanel,
        contentProps: {title: 'ComponentsPanel test'},
        props: {},
      });
    }
  }
}

PluginComponentsPanel.pluginName = 'PluginComponentsPanel';

export default PluginComponentsPanel
