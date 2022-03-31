import React from 'react';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router";
import {logoutAxios} from "../../axios/logout";


function Nav(props) {

  const navigate = useNavigate()

  const logout = async () => {
    const data = await logoutAxios();
    console.log(data.data.url)
    navigate(data.data.url)
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to='/' className="brand-logo right">Eagles!</Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/students'>Students</Link></li>
          <li><button onClick={logout}>logout</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;