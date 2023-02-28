import React, { Component } from 'react'
import { observer, makeObservable } from '../utils'
import { Skeleton } from '../skeleton';
// import { engineConfig } from '../../engine-config';
import {
  TopArea,
  LeftArea,
  ToolArea,
  MainArea,
  RightArea,
} from './area'

import './index.less'

export class Workbench extends Component<{skeleton: Skeleton, engineConfig?: any}> {
  constructor(props: any) {
    super(props)
    makeObservable(this, {

    })
  }

  render() {
    const { skeleton, className, topAreaItemClassName } = this.props;

    return (
      <div className="lc-skeleton">
        <div className="lc-skeleton-top-area">
          <TopArea area={skeleton.topArea} />
        </div>
        <div className="lc-skeleton-body">
          <div className="lc-skeleton-left-area">
            <LeftArea area={skeleton.leftArea} />
          </div>
          <div className="lc-skeleton-center-area">
            <div className="lc-skeleton-tool-area">
              <ToolArea area={skeleton.toolArea} />
            </div>
            <div className="lc-skeleton-main-area">
              <MainArea area={skeleton.mainArea} />
            </div>
          </div>
          <div className="lc-skeleton-right-area">
            <RightArea area={skeleton.rightArea} />
          </div>
        </div>
      </div>
    );
  }
}
