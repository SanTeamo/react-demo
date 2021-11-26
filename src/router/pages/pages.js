import { lazy } from 'react';

const files = require.context('../../views', true, /^.\/[\w|-]+\/[\w|-]+\.js$/i);
const pages = [];
files.keys().forEach((key) => {
  const newKey = key.replace(/(\.\/|\.js)/g, '');
  const path = `/${newKey.replace(/\/index$/, '')}`;
  const name = newKey.replace(/\/index$/, '');
  const modulePath = `views/${name}`;
  const component = lazy(() => import(`../../${modulePath}`));
  pages.push({
    path,
    modulePath,
    component,
    name,
  });
});

export default pages;
