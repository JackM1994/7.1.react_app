import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
      <nav className="main-nav">
        <ul>
          <li><NavLink  to ={`/cats`}>Cats</NavLink></li>
          <li><NavLink  to ={'/beaches'}>Beaches</NavLink></li>
          <li><NavLink  to ={'/mountains'}>Mountains</NavLink></li>
        </ul>
      </nav>
    );
}
export default Nav;