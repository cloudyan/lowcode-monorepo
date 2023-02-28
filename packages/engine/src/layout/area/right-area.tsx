import React from 'react';

export default (props) => {
  const { area } = props

  // console.log(area)

  return (
    <div className="lc-skeleton-right-area">
      {area.items.map(item => <div className="lc-widget-item" key={item.name}>{item.content}</div>)}
    </div>
  )
}
