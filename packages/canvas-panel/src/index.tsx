import React from 'react';
import { designer } from '@lowcodejs/engine';

import './index.less';

const CanvasPanel = (props) => {
  const mountContentFrame = (frame: HTMLIFrameElement | null) => {
    designer.host.mountContentFrame(frame);
  };

  return (
    <>
      <div className="lc-canvas-panel" ref={designer.mountViewPort}>
        <iframe
          name="simulator-renderer"
          className="lc-simulator-frame"
          ref={mountContentFrame}
        />
      </div>
    </>
  );
};

export default CanvasPanel;
