import {defineTiniModule} from '@tinijs/project';

export type MyModuleOptions = {
  foo?: string;
};

export default defineTiniModule<MyModuleOptions>({
  meta: {
    name: 'my-module',
    url: 'https://tinijs.dev/module', // optional usage url
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
