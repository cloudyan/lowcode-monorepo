export class PluginContext {
  project;
  skeleton;
  config;
  pluginContext;
  constructor(pluginContext: any, options: any) {
    const editor = pluginContext.editor

    this.project = editor.get('project')
    this.skeleton = editor.get('skeleton')
    this.config = editor.get('config')
    this.pluginContext = pluginContext
  }
}
