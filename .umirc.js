const path = require('path');

const server = 'http://localhost:3000';

// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      dll: true,
      routes: {
        path: '/',
        component: '../layouts/index',
        routes: [{
            path: '/',
            redirect: 'home'
          },
          {
            path: 'home',
            component: './home/index',
            title: '第一夜'
          },
          {
            path: 'login',
            component: './login/index',
            title: '第二夜'
          },
          {
            path: 'class',
            component: './class/index',
            title: '第三夜'
          },
          {
            path: 'my',
            component: './my/index',
            title: '第四夜'
          },
          {
            path: 'movies',
            component: './movies/index',
            title: '第五夜'
          }
        ],
      },
      hardSource: false,
    }],
  ],
  alias:{
    components: path.resolve(__dirname,'src/components'),
    utils: path.resolve(__dirname,'src/utils'),
    services: path.resolve(__dirname,'src/services'),
    models: path.resolve(__dirname,'src/models'),
    // themes:path.resolve(__dirname,'src/themes'),
    images: path.resolve(__dirname,'src/assets')
  },
  extraPostCSSPlugins: [
    require('postcss-px2rem')({
      remUnit: 50,
      exclude: /node_modules/,
    })
  ],
  proxy: {
    '/api': {
      target: 'http://api.douban.com/v2', // 设置代理
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}
