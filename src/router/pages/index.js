const files = require.context('../../views', true, /^.\/[\w|-]+\/[\w|-]+\.js$/i);
const pages = [];
files.keys().forEach((key) => {
  const newKey = key.replace(/(\.\/|\.js)/g, '');
  const path = `/${newKey}`;
  // const modulePath = `../../views/${newKey}`;
  // const element = () => import(/* webpackChunkName: "about" */ `${modulePath}`);
  const element = files(key).default;
  pages.push({
    path,
    element,
  });
});

export default pages;
