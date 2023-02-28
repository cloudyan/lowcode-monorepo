
import React from 'react'
import SettersPanel from '@lowcodejs/setters-panel'

const PluginSettersPanel = (ctx, options) => {
  return {
    async init() {
      const { skeleton, config } = ctx;

      skeleton.add({
        area: 'rightArea',
        type: 'pane',
        name: 'SettersPanel',
        content: SettersPanel,
        contentProps: {title: 'SettersPanel test'},
        props: {},
      });
    }
  }
}

PluginSettersPanel.pluginName = 'PluginSettersPanel';

export default PluginSettersPanel
