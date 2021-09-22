import { getDvaApp } from 'umi';
import utils from './utils/index'; // 引入共有工具函数

class SharedStore {
  /**
   * 获取 global model
   */
  getGlobal() {
    const dva = getDvaApp();
    const { global } = dva._store.getState();
    return global || {};
  }

  /**
   * 更新字典数据
   */
  fetchDictData(dict) {
    const dva = getDvaApp();
    return dva._store.dispatch({
      type: 'dict/fetchDictData',
      payload: dict,
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
