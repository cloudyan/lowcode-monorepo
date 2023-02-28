import { createElement } from 'react';
import { makeAutoObservable } from '../utils/obx'

export default class Wdiget {
  readonly name: string;
  readonly config: {};
  constructor(name: string, config: {}) {
    this.name = name;
    this.config = config;
    makeAutoObservable(this)
  }

  get content() {
    // const content = () => <div>xxx</div>
    // debugger
    // console.log(this.config.content)
    // return this.config.content
    return createElement(this.config.content, this.config.contentProps)
  }
}
