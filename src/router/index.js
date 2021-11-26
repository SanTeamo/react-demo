import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from 'antd';
import pages from './pages/pages';
import ActiveLink from '../component/links/active-link';
import ErrorPage404 from '../page/error-page/404';
import MyLayout from '../page/index/layout';
import Home from '../page/index/home';

const menuItems = [];
const routes = [];
pages.forEach((p) => {
  const { path, name } = p;
  menuItems.push(
    <Menu.Item key={path}>
      <ActiveLink to={path}>{name}</ActiveLink>
    </Menu.Item>
  );
  routes.push(<Route key={path} path={path} element={<p.element />} />);
});

const RouteIndex = function RouteIndex() {
  const layout = <MyLayout menuItems={menuItems} s={1} />;
  return (
    <Router>
      <Routes>
        <Route path="/" element={layout}>
          <Route index element={<Home />} />
          {routes}
          <Route path="/404" element={<ErrorPage404 />} />
          <Route path="*" element={<ErrorPage404 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouteIndex;
