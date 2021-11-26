import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu } from 'antd';
import pages from './pages/pages';
import ErrorPage404 from '../page/error-page/404';
import MyLayout from '../page/index/layout';
import Home from '../page/index/home';

const lazyLoad = function lazyLoad(Component) {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <Component />
    </React.Suspense>
  );
};

const menuItems = [];
const routes = [];
pages.forEach((p) => {
  const { path, component, name } = p;
  menuItems.push(
    <Menu.Item key={path}>
      <Link to={path}>{name}</Link>
    </Menu.Item>
  );
  routes.push(<Route key={path} path={path} element={lazyLoad(component)} />);
});

const menu = <Menu mode="inline">{menuItems}</Menu>;

const RouteIndex = function RouteIndex() {
  const layout = <MyLayout menu={menu} />;
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
