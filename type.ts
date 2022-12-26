
interface IEditor {
  context: Map<KeyType, any>

  set(key: KeyType, data: any): void | Promise<void>;
  get(key: KeyType): any | undefined;
  has(keyOrType: KeyType): boolean;
}

interface IConfig {
  config: { [key: string]: any };
  has(key: string): boolean;
  get(key: string, defaultValue?: any): any;
  set(key: string, data: any): void;
  setConfig(config: { [key: string]: any }): void;
}

interface IEngineConfig extends IConfig {
  device?: 'desktop' | 'mobile' | string;
  renderEnv?: 'react' | string;
  simulatorUrl?: string[];
}

interface IPluginContext {
  config: IEngineConfig;
  skeleton: ISkeleton;
  plugins: IPluginManager;
  // project: IProject;
  // material: IMaterial;
  // setters: ISetters;
}

interface IPluginAccessor {
  [pluginName: string]: IPlugin | any;
}

interface IPluginManagerCore {
  register(
    pluginCreator: (ctx: IPluginContext, options: any) => IPluginConfig,
    pluginOptions?: any,
  ): Promise<void>;
  init(): Promise<void>;
  get(pluginName: string): IPlugin | undefined;
  getAll(): IPlugin[]
  has(pluginName: string): boolean;
  delete(pluginName: string): any;
}

interface IPluginCore {
  name: string;
  disabled: boolean;
  config: IPluginConfig;
  init(forceInit?: boolean): void;
  isInited(): boolean;
  destroy(): void;
  toProxy(): any;
}

interface IPluginManager extends IPluginManagerCore,IPluginAccessor {
  plugins: IPlugin[];
  pluginsMap: Map<string, IPlugin>;
  editor: IEditor;
}

interface IPlugin extends IPluginCore,IPluginAccessor {

}

interface IPluginConfig {
  init?(): void;
  destroy?(): void;
}

interface ISkeleton {
  containers: Map<string, any>;
  topArea: IArea;
  leftArea: IArea;
  toolbar: IArea;
  mainArea: IArea;
  rightArea: IArea;
  add(config: IWidgetBaseConfig, extraConfig?: Record<string, any>): void;
}

interface IArea {
  container: WidgetContainer;
  visable(): boolean;
  isEmpty(): boolean;
  add(config: any): void;
  remove(config: any): number;
  hide(): void;
  show(): void;
}

type IWidgetConfigArea =
  | 'topArea' | 'leftArea' | 'rightArea'
  | 'toolbar' | 'mainArea';

interface IWidgetBaseConfig {
  type: string;
  name: string;
  area?: IWidgetConfigArea;
  props?: Record<string, any>;
  content?: any;
  contentProps?: Record<string, any>;
}

interface WidgetContainer {
  items: [];
  maps: {};
  visible: boolean;
  add(item: any): void;
  get(name: string): any;
  has(name: string): boolean;
  indexOf(item: any): number;
  remove(item: string): number;
}

// interface IProject {}

// interface ISchema {}
// interface IDragon {}
// interface IHost {}
// interface ISetters {}
// interface IMaterial {}
