import {defineTiniModule} from '@tinijs/project';

export interface MyModuleOptions {
  foo?: string;
}

export default defineTiniModule({
  meta: {
    name: 'my-module',
  },
  init(tiniConfig) {
    return {
      copy: {}, // copy assets
      run() {}, // run initial preparation
    };
  },
  async setup(options, tini) {
    // main module logic
  },
});
