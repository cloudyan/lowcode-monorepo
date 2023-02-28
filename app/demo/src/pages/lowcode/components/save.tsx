import React from 'react';

const Save = (props) => {
  const { documentModel } = props

  const onSave = () => {
    // const data = documentModel.getData()

    console.log('save data');
  }

  return (<button onClick={onSave}>保存</button>)
}

export default Save
