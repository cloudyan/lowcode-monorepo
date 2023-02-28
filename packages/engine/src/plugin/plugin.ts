export class Plugin {
  private pluginName;
  private pluginManager;
  private pluginConfig;
  private _inited: boolean;

  constructor(
    pluginName: string,
    pluginManager: any,
    pluginConfig: any,
  ) {
    // console.log('new Plugin', pluginName);
    this.pluginName = pluginName;
    this.pluginManager = pluginManager;
    this.pluginConfig = pluginConfig;
  }

  get name() {
    return this.pluginName;
  }
  get config() {
    return this.pluginConfig;
  }

  async init(forceInit?: boolean) {
    if (this._inited && !forceInit) return;
    await this.pluginConfig.init?.call(undefined);
    this._inited = true;
  }

  toProxy() {
    const exports = this.pluginConfig.exports?.();
    return new Proxy(this, {
      get(target, prop, receiver) {
        if ({}.hasOwnProperty.call(exports, prop)) {
          return exports?.[prop as string];
        }
        return Reflect.get(target, prop, receiver);
      },
    });
  }
}
