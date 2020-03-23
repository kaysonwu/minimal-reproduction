import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
      <div>This is user page!</div>
      <Link to="/">Go home</Link>
    </>
  );
};
