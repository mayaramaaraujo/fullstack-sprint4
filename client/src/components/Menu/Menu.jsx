import {useEffect, useState} from 'react';
import MenuItem from '../MenuItem/MenuItem';
import CategoriesContext from '../../contexts/CategoriesContext';
import getCategories from '../../services/CategoriesService';

function Menu() {

  return (
    <>
      <nav className="header__menu menu">
          <MenuItem />
      </nav>
    </>

  )
}

export default Menu;