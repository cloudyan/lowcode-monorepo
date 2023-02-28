
import React from 'react'

// logo 组件
const Logo = () => (<div>保存</div>)

const SavePlugin = (ctx, options) => {
  return {
    async init() {
      const { skeleton, config } = ctx;

      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'SavePlugin',
        content: Logo,
        contentProps: {

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
