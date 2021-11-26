import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const MyLayout = function MyLayout(props) {
  const { menuItems } = props;
  return (
    <Layout style={{ width: '100%', height: '100%' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div />
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
          {menuItems}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Hello React</Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
