export class Plugin {
  config;
  private pluginManager;
  private pluginName;
  private meta;
  private _inited: boolean;

  constructor(
    pluginName: string,
    pluginManager: any,
    config: any,
    meta: any,
  ) {
    this.pluginName = pluginName;
    this.pluginManager = pluginManager;
    this.config = config;
    this.meta = meta;
  }

  get name() {
    return this.pluginName;
  }

  async init(forceInit?: boolean) {
    if (this._inited && !forceInit) return;
    await this.config.init?.call(undefined);
    this._inited = true;
  }

  async destroy() {
    if (!this._inited) return;
    await this.config?.destroy?.call(undefined);
    this._inited = false;
  }

  toProxy() {
    const exports = this.config.exports?.();
    return new Proxy(this, {
      get(target, prop, receiver) {
        if ({}.hasOwnProperty.call(exports, prop)) {
          return exports?.[prop as string];
        }
        return Reflect.get(target, prop, receiver);
      },
    });
  }

  async dispose() {
    await this.pluginManager.delete(this.name);
  }
}
