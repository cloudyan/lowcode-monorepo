// 支持

export class PluginContext {
  pluginManager;
  engineConfig;
  skeleton;
  material;
  documentModel;

  constructor(pluginManager: any, options: any) {
    const editor = pluginManager.editor

    // pluginManager, editorConfig, skeleton, material, documentModel
    // designer, setters
    this.pluginManager = pluginManager
    this.engineConfig = editor.get('engineConfig')
    this.documentModel = editor.get('documentModel')
    this.skeleton = editor.get('skeleton')
    this.material = editor.get('material')
  }
}
