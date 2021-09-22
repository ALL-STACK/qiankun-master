import { defineConfig } from 'umi';
import routes from './router';

const serviceList = [
  '/admin',
  '/api/v1',
  '/admin/api/v1',
];

const getProxy = (() => {
  const proxyConfigs: { [propName: string]: any } = {};
  if (Array.isArray(serviceList)) {
    serviceList.forEach(service => {
      proxyConfigs[service] = {
        target: 'http://1.15.28.77',
        changeOrigin: true,
        pathRewrite: { [`/^${service}/`]: '/' },
      };
    });
  }
  return proxyConfigs;
})();

export default defineConfig({
  nodeModulesTransform: {
    type: 'all',
  },
  routes,
  dynamicImport: {
    loading: '@/layouts/PageLoading/index',
  },
  fastRefresh: {},
  antd: {
    dark: false,
  },
  dva: {},
  targets: {
    ie: 11,
  },
  proxy: getProxy,
  manifest: {
    basePath: '/'
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1', // 唯一 id  
          entry: '//localhost:2222', // html entry
        },
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:3333', // html entry
        },
      ],
    },
  },
  
});

