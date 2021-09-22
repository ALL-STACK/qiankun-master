import { useState, useEffect } from 'react';
import sharedStore from '../src/utils/sharedStore'; // 主应用通信类文件

const { getDvaApp } = require('umi');

export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = useState({});
  const [_dispatch, setDispatch] = useState({});
  const [count, setCount] = useState(0);

  function setGlobalProps() {

  }
  
  return {
    globalState,
    setGlobalState,
    setGlobalProps,
    getDvaApp,
    count,
    setCount
    // dva_dispatch: getDvaApp()._store.dispatch,
  }
}

// export const qiankun = {
//   apps: [
//     {
//       name: 'app1', // 唯一 id  
//       entry: '//localhost:2222', // html entry
//       props: {
//         sharedStore,
//       }
//     },
//     {
//       name: 'app2', // 唯一 id
//       entry: '//localhost:3333', // html entry
//     },
//   ],
// }
