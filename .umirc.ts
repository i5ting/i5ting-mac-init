import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  theme: {
    // '@primary-color': '#1DA57A',
    '@menu-item-active-bg':"#0277E3"
  },
  routes: [
    { exact: false, path: '/', component: '@/layouts/index.tsx',
      routes: [
        { exact: true, path: '/', component: '@/pages/index' },
        { exact: true, path: '/user', component: '@/pages/user' },
      ]
    }
  ]
});
