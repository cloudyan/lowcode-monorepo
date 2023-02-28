import React from 'react';

// leftArea 本质应该配置一个 Dock + 一个面板
// 但我们的场景设计里，这里仅仅有一个面板
export default (props) => {
  const { area } = props

  return (
    <>
      <div className="lc-skeleton-left-area-dock">Dock</div>
      <div className="lc-skeleton-left-area-panel">
        {area.items.map(item => <div className="lc-widget-item" key={item.name}>123 {item.content}</div>)}
      </div>
    </>
  )
}
