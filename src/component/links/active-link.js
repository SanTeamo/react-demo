import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ActiveLink = function CustomLink({ children, to, ...props }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Link style={{ textDecoration: match ? 'underline' : 'none' }} to={to} {...props}>
        {children}
      </Link>
      {match && ' <'}
    </>
  );
};

export default ActiveLink;
