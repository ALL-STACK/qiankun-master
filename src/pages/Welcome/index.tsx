import { useEffect } from "react";
import umi from 'umi';
const { connect } = require('umi');

const Index = ({ dispatch, global }: any) => {

  useEffect(() => {
    // dispatch({
    //   type: 'welcome/userVerifies',
    //   payload: {
    //     // ...values,
    //     password: 'CP/AmlWU450ntnzuxZQpKtOg0PEnat8QWaIimjc2VzBboDUeNYnxaMrUyjpKqv76UFNGkKADIsNwprB2+SeqWRdRv2MYX+TdseRsptDLNU8ehOAuYX+Nr1EsBRJ8mF1FD1mZ9aa/TS1dbKagzDJQQHJnhFcI3vQIkonf21fqcGQ=',
    //     username: 'ysports_admin',
    //   },
    //   onSuccess: res => {
    //     console.log(res);
    //   },
    //   onFailed: error => {
    //   },
    // });
    console.log(umi)
  }, []);

  return (
    <div>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>欢迎欢迎，热烈欢迎</h1>
    </div>
  )
}

export default connect(({ index, loading, global }) => ({
  index,
  loading: loading.models.index,
  global,
}),)(Index);