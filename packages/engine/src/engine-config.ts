export interface EngineOptions {

}

export class EngineConfig {
  private config: {[key: string]: any} = {};

  constructor(config?: {[key: string]: any}) {
    this.config = config || {}
  }

  has(key: string): boolean {
    return this.config[key] !== undefined
  }

  get(key: string, defaultValue?:any): any {
    return this.config[key] || defaultValue
  }

  set(key: string, value: any) {
    this.config[key] = value;
  }

  setConfig(obj: {} = {}) {
    Object.assign(this.config, obj)
  }
}

export const engineConfig = new EngineConfig();
