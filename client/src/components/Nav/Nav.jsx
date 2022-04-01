import React from 'react';
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to='/' className="brand-logo right">Eagles!</Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/students'>Students</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;