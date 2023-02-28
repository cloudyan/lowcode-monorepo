import React from 'react'

const ReactRenderer = (props) => {
  console.log('title', props.title)
  return (<>
    <div components={props.components} schema={props.schema}>
      渲染器
      {props.title}
    </div>
  </>)
}

export default ReactRenderer
