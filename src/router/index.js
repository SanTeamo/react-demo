import React from 'react';
import { Route } from 'react-router-dom';
import pages from './pages';
import ActiveLink from './links/active-link';

const links = [];
const routes = [];
pages.forEach((p) => {
  const { path } = p;
  let newPath = path;
  if (path && path.endsWith('/index')) {
    newPath = path.replace(/\/index$/, '');
  }
  links.push(
    <li key={p.path}>
      <ActiveLink to={newPath}>{newPath}</ActiveLink>
    </li>
  );
  routes.push(<Route key={p.path} path={newPath} element={<p.element />} />);
});

export { links, routes };
