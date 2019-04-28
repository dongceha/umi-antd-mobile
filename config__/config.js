// https://umijs.org/config/
import path from 'path';
import pageRoutes from './router.config';

//一些根据环境变化的常量
const env = process.env.NODE_ENV;
const option = {
  development: {
    publicPath: '/',
    //下面是给web环境定义的全局变量
    mode: 'development',
  },
  // build 环境
  production: {
    // publicPath: 'http://oss.funtest.top/sm/',
    publicPath: './',
    //下面是给web环境定义的全局变量
    mode: 'production',
  },
};

export default {
  // add for transfer to umi
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
          webpackChunkName: true,
        },
        //按需加载
        // dynamicImport: false,
        title: {
          defaultTitle: '一千零一夜',
        },
        dll: false,
        // pwa: {
        //   workboxPluginMode: 'InjectManifest',
        //   workboxOptions: {
        //     importWorkboxFrom: 'local',
        //   },
        // },
        hd: true,
        fastClick: true,
        routes: {
          exclude: [],
        },
        hardSource: false,
      },
    ],
  ],
  //   exportStatic: {},
  // 路由配置
  routes: pageRoutes,
  // Theme for antd-mobile
  // https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less
  extraBabelPlugins:[
    ['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true }],
  ],
  proxy: {
    '/api/': {
      // target: 'http://baidu.com',
      changeOrigin: true,
      pathRewrite: {'^/api': ''},
    },
  },
  //   ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssnano: {
    mergeRules: false,
  },
  targets: {
    android: 5,
    ios: 7,
    chrome: 58,
    ie: 9,
  },
  define: {
    MODE: getEnvOption('mode'),
  },
  outputPath: './dist',
  hash: true,
  publicPath: getEnvOption('publicPath'),
  history: 'hash',
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
};


function getEnvOption(key) {
  //没有匹配到默认为开发的option
  const envOption = option[env];
  return envOption != undefined ? envOption[key] : option['development'][key];
}
