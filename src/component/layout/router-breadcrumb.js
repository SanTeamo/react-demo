import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import views from '../../router/pages/views';
import styles from './router-breadcrumb.module.css';

const breadcrumbNameMap = {};
views.forEach((v) => {
  breadcrumbNameMap[v.path] = v.name;
});

const RouterBreadcrumb = function RouterBreadcrumb() {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className={styles.breadcrumb}>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};

export default RouterBreadcrumb;
