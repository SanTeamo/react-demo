import { lazy } from 'react';
import { HomeOutlined } from '@ant-design/icons';

const files = require.context('../../views', true, /^.\/[\w|-]+\/[\w|-]+\.js$/i);
const views = [
  {
    path: '/',
    modulePath: '../../page/index/home',
    component: lazy(() => import('../../page/index/home')),
    name: 'Home',
    icon: <HomeOutlined />,
  },
];
files.keys().forEach((key) => {
  const newKey = key.replace(/(\.\/|\.js)/g, '');
  const path = `/${newKey.replace(/\/index$/, '')}`;
  const name = newKey.replace(/\/index$/, '');
  const modulePath = `views/${name}`;
  const component = lazy(() => import(`../../${modulePath}`));
  views.push({
    path,
    modulePath,
    component,
    name,
  });
});

export default views;
