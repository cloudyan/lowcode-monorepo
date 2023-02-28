
import React from 'react'

const Back = () => {
  const onBack = () => {
    history.back()
  }

  return (<button onClick={onBack}>返回</button>)
}

const BackPlugin = (ctx, options) => {
  return {
    async init() {
      const { skeleton, config } = ctx;

      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'BackPlugin',
        index: 1,
        content: Back,
        contentProps: {
        },
        props: {
          align: 'left',
        },
      });
    }
  }
}

BackPlugin.pluginName = 'BackPlugin';

export default BackPlugin
