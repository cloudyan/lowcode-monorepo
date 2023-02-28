import { PluginContext } from './plugin-context'
import { Plugin } from './plugin'

export class PluginManager {
  private pluginsMap = new Map();
  private editor;

  constructor(editor: any) {
    this.editor = editor;
  }

  private getPluginContext(options: any) {
    return new PluginContext(this, options);
  }

  async register(
    pluginCreator: (ctx: any, options: any) => any,
    options?: any,
  ): Promise<void> {

    let { pluginName } = pluginCreator as any;
    if (this.pluginsMap.has(pluginName)) {
      throw new Error(`Plugin with name ${pluginName} exists`)
    }

    const ctx = this.getPluginContext({ pluginName });
    const pluginConfig = pluginCreator(ctx, options);

    pluginName = pluginName || pluginConfig.name;

    const plugin = new Plugin(pluginName, this, pluginConfig);

    await plugin.init();
    this.pluginsMap.set(pluginName, plugin)
  }

  get(pluginName: string) {
    return this.pluginsMap.get(pluginName)
  }

  getAll() {
    return this.pluginsMap;
  }

  async delete(pluginName: string) {
    const plugin = this.pluginsMap.get(pluginName)
    if (!plugin) return false;

    await plugin.destroy();
    return this.pluginsMap.delete(pluginName);
  }

  toProxy() {
    return new Proxy(this, {
      get(target, prop, receiver) {
        if (target.pluginsMap.has(prop as string)) {
          // 禁用态的插件，直接返回 undefined
          if (target.pluginsMap.get(prop as string)!.disabled) {
            return undefined;
          }
          return target.pluginsMap.get(prop as string)?.toProxy();
        }
        return Reflect.get(target, prop, receiver);
      },
    });
  }

  async init() {}
}
