import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
      <div>This is Home page!</div>
      <Link to="/user">Go user</Link>
    </>
  );
};
