import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import views from './pages/views';
import ErrorPage404 from '../page/error-page/404';
import ErrorPage500 from '../page/error-page/500';
import Home from '../page/index/home';
import MyLayout from '../page/index/layout';

const lazyLoad = function lazyLoad(Component) {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <Component />
    </React.Suspense>
  );
};

const menuItems = [];
const routes = [];
views.forEach((p) => {
  const { path, component, name, icon } = p;
  menuItems.push(
    <Menu.Item key={path} icon={icon || <UserOutlined />}>
      <Link to={path}>{name}</Link>
    </Menu.Item>
  );
  routes.push(<Route key={path} path={path} element={lazyLoad(component)} />);
});

const RouteIndex = function RouteIndex() {
  const layout = <MyLayout menuItems={menuItems} />;
  return (
    <Router>
      <Routes>
        <Route path="/" element={layout}>
          <Route index element={<Home />} />
          {routes}
          <Route path="/404" element={<ErrorPage404 />} />
          <Route path="/500" element={<ErrorPage500 />} />
          <Route path="*" element={<ErrorPage404 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouteIndex;
