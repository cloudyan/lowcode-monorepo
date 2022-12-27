

export * from './plugin-context';
export * from './plugin-manager';
export * from './plugin';


/**
 * usage:
 *
 * import { PluginManager, Plugin } from './plugin'
 *
 * const pluginManager = new PluginManager(editor).toProxy()
 *
 * pluginManager.register(SamplePlugin, options)
 */


// const SamplePlugin = (ctx, options) => {
//   return {
//     async init() {
//       const { skeleton, config } = ctx;

//       const Logo = () => (<div>Logo</div>)

//       skeleton.add({
//         area: 'topArea',
//         type: 'Widget',
//         name: 'logo',
//         content: <Logo />,
//         contentProps: {
//           logo: 'https://static.cloudai.net/cook/cook-1.svg',
//           href: 'https://lowcode-engine.cn',
//         },
//         props: {
//           align: 'left',
//         },
//       });
//     }
//   }
// }
// SamplePlugin.pluginName = 'LogoSamplePlugin';
// SamplePlugin.meta = {
//   dependencies: ['EditorInitPlugin'],
// };
