import React from 'react';

export default (props) => {
  const { area } = props;

  return (
    <>
      <div className="lc-skeleton-main-area-canvas lc-device-phone">
        {area.items[0]?.content}
      </div>
    </>
  );
};
