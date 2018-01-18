import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        <Link to="/login"><button className="btn btn-success btn-lg">LOGIN</button></Link>
        <Link to="/signup"><button className="btn btn-success btn-lg">SIGNUP</button></Link>
        
    </div>
  );
};

export default HomePage;