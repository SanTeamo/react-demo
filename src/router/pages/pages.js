const files = require.context('../../views', true, /^.\/[\w|-]+\/[\w|-]+\.js$/i);
const pages = [];
files.keys().forEach((key) => {
  const newKey = key.replace(/(\.\/|\.js)/g, '');
  const path = `/${newKey}`;
  let name = newKey;
  if (name.endsWith('/index')) {
    name = name.replace(/\/index$/, '');
  }
  // const modulePath = `../../views/${newKey}`;
  // const element = () => import(/* webpackChunkName: "about" */ `${modulePath}`);
  // TODO 没有异步载入组件
  const element = files(key).default;
  pages.push({
    path,
    element,
    name,
  });
});

export default pages;
