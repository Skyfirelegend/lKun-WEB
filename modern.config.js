import { appTools } from '@modern-js/app-tools';
import { ssgPlugin } from '@modern-js/plugin-ssg';
import { api_proxy_address } from './src/utils/address';


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
  },
  tools: {
    devServer: {
      proxy: {
        '/api': {
          target: `${api_proxy_address}`, // 代理的目标地址
          changeOrigin: true,
          // pathRewrite: {'^/api': ''}
        }
      }
    }
  }
};
