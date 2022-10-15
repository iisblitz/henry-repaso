import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className = 'nav-header'>
      <img src={Logo} alt='Logo Henry'/>
      <h3> 'Henry web app'</h3>
      <Searchbar onSearch={onSearch}/>

    </div>
  );
};

export default Nav;
