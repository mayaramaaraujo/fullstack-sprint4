import React, { useContext } from 'react';
import CategoriesContext from '../../contexts/CategoriesContext';

function MenuItem() {
  const categoriesContext = useContext(CategoriesContext);

  return (
    <ul className="menu__list">
      {categoriesContext.isLoaded ? <p>Loading...</p> : categoriesContext.categories.map((category) => {
        return (
          <li className="menu__item" key={category.id}>
            <a className="menu__link" href={category.link}>
              {category.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default MenuItem;