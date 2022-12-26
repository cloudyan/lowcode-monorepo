import { PluginContext } from './plugin-context'
import { Plugin } from './plugin'

export class PluginManager {
  private plugins: Plugin[] = [];
  private pluginsMap = new Map();
  private editor;

  constructor(editor: any) {
    this.editor = editor;
  }

  private _getPluginContext(options: any) {
    const pluginContext = this
    return new PluginContext(pluginContext, options);
  }

  async register(
    pluginConfigCreator: (ctx: any, options: any) => any,
    options?: any,
    registerOptions?: any,
  ): Promise<void> {

    let { pluginName, meta = {} } = pluginConfigCreator as any;
    const ctx = this._getPluginContext({ pluginName });
    const config = pluginConfigCreator(ctx, options);

    pluginName = pluginName || config.name;

    if (this.pluginsMap.has(pluginName)) {
      throw new Error(`Plugin with name ${pluginName} exists`)
    }

    const plugin = new Plugin(pluginName, this, config, meta);
    await plugin.init();

    this.plugins.push(plugin)
    this.pluginsMap.set(pluginName, plugin)
  }

  get(pluginName: string) {
    return this.pluginsMap.get(pluginName)
  }

  getAll() {
    return this.plugins;
  }

  async init() {

  }

  async destroy() {
    for (const plugin of this.plugins) {
      await plugin.destroy();
    }
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

  async dispose() {
    await this.destroy();
    this.plugins = [];
    this.pluginsMap.clear();
  }
}
