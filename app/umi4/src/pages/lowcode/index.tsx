import React, { useEffect, useState } from 'react';
// import { project, plugins, config, common, skeleton, init } from '@alilc/lowcode-engine';
// import registerPlugins from './resource/plugin';
import style from './index.less'
// import './resource/global.scss'

// config.setConfig({
//   device: 'mobile',
//   enableCondition: true,
//   enableCanvasLock: true,
//   // 默认绑定变量
//   supportVariableGlobally: true,
//   // requestHandlersMap: {
//   //   fetch: createFetchHandler(),
//   // },
//   simulatorUrl: [
//     'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/css/react-simulator-renderer.css',
//     'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/js/react-simulator-renderer.js',
//   ],
// });

const EditorView = () =>{
  /** 插件是否已初始化成功，因为必须要等插件初始化后才能渲染 Workbench */
  const [ready, setReady] = useState(false)

  useEffect(()=>{
    init()

    return () => {
      // plugins.dispose().then(() => {
      //   console.info('plugins destroy success');
      // });
    };
  },[])

  const init = async () =>{
    setReady(true)

    // await registerPlugins()
    // plugins.init(preference).then(() => {
    //   setReady(true)
    // }).catch(err => console.error(err))
  }

  // const Workbench = common.skeletonCabin.Workbench;
  const Workbench = (props) => (<div>Workbench</div>)


  return <div className={style.lowcode_container}>
    {
      ready && <Workbench />
    }
  </div>
}

export default EditorView
