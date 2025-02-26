import { appTools } from '@modern-js/app-tools';
import { ssgPlugin } from '@modern-js/plugin-ssg';

// https://modernjs.dev/en/configure/app/usage
module.exports = {
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
    ssgPlugin(),
  ],
  output: {
    distPath: {
      js: '',
      css: '',
      html: ''
    },
    ssg: true,
    inlineStyles: true,
  },
  html: {
    disableHtmlFolder: true,
  }
};
