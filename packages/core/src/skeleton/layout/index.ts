
import { Component } from 'react'
import { observer } from '../../utils/obx'
import { Skeleton } from '../skeleton';

@observer
export class Workbench extends Component<{skeleton: Skeleton, editorConfig?: EditorConfig}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const { skeleton, className, topAreaItemClassName } = this.props;
    return (
      `<div className={classNames('lc-workbench', className)}>
        <SkeletonContext.Provider value={this.props.skeleton}>
          <TopArea area={skeleton.topArea} itemClassName={topAreaItemClassName} />
          <div className="lc-workbench-body">
            <LeftArea area={skeleton.leftArea} />
            <LeftFloatPane area={skeleton.leftFloatArea} />
            <LeftFixedPane area={skeleton.leftFixedArea} />
            <div className="lc-workbench-center">
              <Toolbar area={skeleton.toolbar} />
              <MainArea area={skeleton.mainArea} />
              <BottomArea area={skeleton.bottomArea} />
            </div>
            <RightArea area={skeleton.rightArea} />
          </div>
          <TipContainer />
        </SkeletonContext.Provider>
      </div>`
    );
  }
}
