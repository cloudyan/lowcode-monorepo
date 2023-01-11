import React from 'react'

const ReactRenderer = (props) => {
  console.log('title', props.title)
  return (<>
    <div components={props.components} schema={props.schema}>
      {props.title}
    </div>
  </>)
}

export default ReactRenderer
