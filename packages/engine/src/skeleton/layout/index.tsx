import React, { Component } from 'react'
import { observer } from '../../utils'
import { Skeleton } from '../skeleton';

@observer
export class Workbench extends Component<{skeleton: Skeleton, editorConfig?: any}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const { skeleton, className, topAreaItemClassName } = this.props;
    return (
      <>
        <div>Workbench</div>
      </>
    );
  }
}
