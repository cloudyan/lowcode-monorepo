import React, { useEffect, useState } from 'react';
import { getWorkbench, engineConfig, pluginManager } from '@lowcodejs/engine';
import {
  PluginTitle,
  // PluginLogo,
  // PluginBack,
  PluginComponentsPanel,
  PluginCanvasPanel,
  PluginSettersPanel,
} from '@lowcodejs/plugins';
import PluginSave from './plugins/plugin-save';
import PluginBack from './plugins/plugin-back';

import style from './index.less';

engineConfig.setConfig({
  title: '',
  device: 'mobile',
  layout: 'fixed', // fixed flow
});

// 测试响应式
// setTimeout(() => {
//   engineConfig.setConfig({
//     title: '补件-人脸 2',
//   })
// }, 2000)
async function registerPlugins() {
  await pluginManager.register(PluginTitle);
  await pluginManager.register(PluginSave);
  // await pluginManager.register(PluginLogo)
  await pluginManager.register(PluginBack);
  await pluginManager.register(PluginCanvasPanel);
  await pluginManager.register(PluginComponentsPanel);
  await pluginManager.register(PluginSettersPanel);
}
await registerPlugins();

const LowcodeEditor = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    init();

    return () => {
      // pluginManager.dispose().then(() => {
      //   console.info('plugins destroy success');
      // });
    };
  }, []);

  const init = async () => {
    // await registerPlugins()
    setReady(true);
  };

  const Workbench = getWorkbench();

  // 置于内部，可选 layout 方式为 fixed 或 flow 模式
  return (
    <>
      <div className={style.lowcode_container}>
        {ready && <Workbench engineConfig={engineConfig} />}
      </div>
    </>
  );
};

export default LowcodeEditor;
