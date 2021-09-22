import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { history, connect } from 'umi';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BasicLayout = ({ children, global, ...otherProps }) => {
  
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item
            key="1"
            icon={<UserOutlined />}
            onClick={() => history.push('/management/list')}
          >
            管理
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="服务">
            <Menu.Item
              key="5"
              onClick={() => history.push('/app1/service/list')}
            >
              服务列表
            </Menu.Item>
            <Menu.Item
              key="6"
              onClick={() => history.push('/app1/service/detail')}
            >
              服务详情
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            key="2"
            icon={<VideoCameraOutlined />}
            onClick={() => history.push('/app1')}
          >
            应用一
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<UploadOutlined />}
            onClick={() => history.push('/app2')}
          >
            应用二
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: 'center' }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <h1>{global.count}</h1>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};


export default connect(({ global}) => ({
  global
}))(BasicLayout)