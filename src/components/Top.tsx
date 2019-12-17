import React from 'react';
import { Link } from 'react-router-dom';

const Top = () => {
  return (
    <>
      <Link to="/row">row</Link>
      <Link to="/kona">kona</Link>
      <Link to="/pla">pla</Link>
    </>
  );
};

export default Top;
