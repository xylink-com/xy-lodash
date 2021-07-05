export default {
  exportStatic: {},
  outputPath: '/docs',
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  metas: [
    {
      name: 'keywords',
      content: 'xylink，tools，hook，toolkit，xylink-lodash，ak47',
    },
    {
      name: 'description',
      content: '小鱼易连通用工具函数库',
    },
  ],
  mode: 'site',
  title: 'Toolkit',
  base: '/toolkit',
  publicPath: '/toolkit/',
  favicon: 'https://cdn.xylink.com/wechatMP/images/login.ico',
  logo: '/toolkit/logo.png',
  dynamicImport: {},
  manifest: {},
  // links: [{ rel: "manifest", href: "/asset-manifest.json" }],
  // 主题色配置
  // 详见：https://github.com/umijs/dumi/blob/master/packages/theme-default/src/style/variables.less
  theme: {
    '@c-primary': '#3876ff',
  },
  locales: [
    ['zh-CN', '中文']
    // ['en-US', 'English'],
  ],
  links: [{ rel: 'stylesheet', href: '/toolkit/style.css' }],
  hash: true,
  resolve: {
    includes: ['guide', 'src'],
  },
  // navs: {
  //   "zh-CN": [
  //     null,
  //     { title: "GitHub", path: "https://github.com/xylink-com/xy-lodash" },
  //   ],
  //   "en-US": [
  //     null,
  //     { title: "GitHub", path: "https://github.com/xylink-com/xy-lodash" },
  //   ],
  // },
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '文档',
      path: '/doc',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/xylink-com/xy-lodash',
    },
  ],
};
