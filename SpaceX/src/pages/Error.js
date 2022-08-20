import React from "react";
import { Link } from 'react-router-dom';

const Error = () => {
  return <section className="flex flex-col justify-center items-center text-center h-screen">
        <h1>Error | Requested page cannot be found</h1>
        <Link to='/' className="btn">&larr; Back to Homepage</Link>
  </section>;
};  

export default Error;
