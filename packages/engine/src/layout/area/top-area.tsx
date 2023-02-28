import React from "react";


// topArea 内又划分三个区域，左中右排版
export default (props) => {
  const { area } = props

  let alignArea = {
    left: [],
    center: [],
    right: [],
  };
  let alignCenterArea = [];
  let alignRightArea = [];

  area.items
    .slice()
    .sort((a, b) => {
      const index1 = a.config?.index || 0;
      const index2 = b.config?.index || 0;
      return index1 === index2 ? 0 : (index1 > index2 ? 1 : -1); // 升序排序
    })
    .forEach(item => {
      const content = (<div className="lc-widget-item" key={`${item.name}`}>{item.content}</div>);
      const itemProps = item.config?.props || {}
      if (alignArea[itemProps.align]) {
        alignArea[itemProps.align].push(content)
      }
    });

  return (
    <>
      <div className="lc-skeleton-top-area-left">{alignArea.left}</div>
      <div className="lc-skeleton-top-area-center">{alignArea.center}</div>
      <div className="lc-skeleton-top-area-right">{alignArea.right}</div>
    </>
  )
}
