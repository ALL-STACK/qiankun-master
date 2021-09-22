import utils from './utils'; // 引入共有工具函数
const { getDvaApp } = require('umi');

class SharedStore {
  /**
   * 获取 global model
   */
  getGlobal() {
    const dva = getDvaApp();
    const { global } = dva._store.getState();
    // console.log(global)
    return global || {};
  }

  /**
   * 更新字典数据
   */
  fetchGlobalData(payload: any) {
    const dva = getDvaApp();
    return dva._store.dispatch({
      type: 'global/changeCount',
      payload,
    });
  }

  /**
   * 获取共有工具函数
   */
  getSharedUtils() {
    const { commonErrorHandler, myAjax } = utils;
    return {
      commonErrorHandler,
      myAjax,
    };
  }
}

const sharedStore = new SharedStore();
export default sharedStore;
