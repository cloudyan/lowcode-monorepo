export interface PluginContext {
  config: EngineConfig;
  skeleton: Skeleton;
  plugins: PluginManager;
  project: Project;
  material: Material;
  setters: Setters;
}
