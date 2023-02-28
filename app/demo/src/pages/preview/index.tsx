import React, { useState } from 'react';
import ReactRenderer from '@lowcodejs/react-renderer'

const Loading = () => (<div>loading...</div>)

const assetsLoader = () => {
  return {
    schema: {},
    components: [],
  }
}

const SamplePreview = (props) => {
  const [data, setData] = useState({});

  async function init() {
    const { schema, components } = assetsLoader()

    setData({
      schema,
      components,
    });
  }

  const { schema, components } = data;

  if (!schema || !components) {
    init();
    return <Loading fullScreen />;
  }

  return (
    <div className="lowcode-sample-preview">
      <ReactRenderer
        className="lowcode-sample-preview-content"
        title="这是预览 UI=render(schema, components)"
        schema={schema}
        components={components}
      />
    </div>
  );
};

export default SamplePreview

// ReactDOM.render(<SamplePreview />, document.getElementById('ice-container'));
