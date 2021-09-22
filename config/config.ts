import { defineConfig } from 'umi';
import routes from './router';

const serviceList = ['/admin', '/api/v1', '/admin/api/v1'];

const getProxy = (() => {
  const proxyConfigs: { [propName: string]: any } = {};
  if (Array.isArray(serviceList)) {
    serviceList.forEach((service) => {
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
    type: 'all',  // all-开启后编译所有依赖，但是性能会有影响，兼容IE浏览器; none-不转换依赖，性能会有提升，但不兼容IE浏览器
  },
  routes,
  // mfsu: {},  // 启用后有IE浏览器兼容问题
  dynamicImport: {
    loading: '@/layouts/PageLoading/index',
  },
  fastRefresh: {},
  antd: {
    dark: false,
  },
  // dva: {},
  targets: {
    ie: 11,
  },
  proxy: getProxy,
  manifest: {
    basePath: '/',
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1', // 唯一 id  
          entry: '//localhost:2222', // html entry
          props: {
            // sharedStore,
          }
        },
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:3333', // html entry
        },
      ],
    },
  },
});
