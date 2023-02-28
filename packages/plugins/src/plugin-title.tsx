
import React from 'react'

// title 组件
const Title = (props) => {
  return (<div>{ props.title }</div>)
}

const TitlePlugin = (ctx, options) => {
  return {
    async init() {
      const { skeleton, engineConfig } = ctx;
      const title = engineConfig.get('title')

      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'TitlePlugin',
        content: Title,
        contentProps: {
          title,
        },
        props: {
          align: 'center',
        },
      });
    }
  }
}

TitlePlugin.pluginName = 'TitlePlugin';

export default TitlePlugin
