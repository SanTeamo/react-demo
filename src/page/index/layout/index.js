import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Clock from '../../../component/clock';
import RouterBreadcrumb from '../../../component/layout/router-breadcrumb';
import layoutStyles from './layout.module.css';

const { Header, Content, Footer, Sider } = Layout;

class MyLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  collapse = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { menuItems } = this.props;
    const { collapsed } = this.state;
    return (
      <Layout style={{ width: '100%', height: '100%' }}>
        <Sider collapsible collapsed={collapsed} trigger={null}>
          <div className={layoutStyles.logo} />
          <Menu theme="dark" mode="inline">
            {menuItems}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, backgroundColor: '#fff' }} theme="light">
            <div style={{ width: '100%', position: 'relative' }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: layoutStyles['menu-fold-trigger'],
                onClick: this.collapse,
              })}
              <Clock style={{ position: 'absolute', right: '18px', fontSize: '18px' }} />
            </div>
          </Header>
          <RouterBreadcrumb />
          <Content style={{ margin: '24px 16px 0', backgroundColor: '#fff' }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Hello React</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MyLayout;
