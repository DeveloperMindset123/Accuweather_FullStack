/* eslint-disable no-unused-vars */
/**We will be implementing the searchbar component here, it will be placed right below the navigation bar + logo combo */
import React from 'react';
import './searchBar.css';

const SearchBar = () => {
  return (
    <div>
      <form>
        <input type="text" name="search" placeholder="Search..." />
      </form>
    </div>
  )
}

export default SearchBar;
