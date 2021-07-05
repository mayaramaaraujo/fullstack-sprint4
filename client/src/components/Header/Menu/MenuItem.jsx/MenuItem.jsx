import React, { useContext } from 'react';
import CategoriesContext from '../../../../contexts/CategoriesContext';

const MenuItem = () => {
  const categoriesContext = useContext(CategoriesContext)

  return (
    <>
      {categoriesContext.categories && categoriesContext.categories.map(cat => {
        return (
          <li className="menu__item" key={cat.id}>
            <a className="menu__link" href="/">{cat.label}</a>
          </li>
        )
      })}
    </>
  )
}

export default MenuItem;