
import React from 'react'

// logo 组件
const Logo = () => (<div>Logo</div>)

const PreviewPlugin = (ctx, options) => {
  return {
    async init() {
      const { skeleton, config } = ctx;

      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'PreviewPlugin',
        content: Logo,
        contentProps: {
          logo: 'https://static.cloudai.net/cook/cook-1.svg',
          href: '/',
        },
        props: {
          align: 'left',
        },
      });
    }
  }
}

PreviewPlugin.pluginName = 'PreviewPlugin';

export default PreviewPlugin
