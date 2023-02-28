
import React from 'react'

// logo 组件
const Logo = () => (<div>Logo</div>)

const LogoPlugin = (ctx, options) => {
  return {
    async init() {
      const { skeleton, config } = ctx;

      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'LogoPlugin',
        index: 2,
        content: Logo,
        contentProps: {
        },
        props: {
          align: 'left',
        },
      });
    }
  }
}

LogoPlugin.pluginName = 'LogoPlugin';

export default LogoPlugin
