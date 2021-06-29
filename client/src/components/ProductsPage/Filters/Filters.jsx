import React, { useContext } from 'react';
import FiltersContext from '../../../contexts/FiltersContext';

function Filters() {
  const filterContext = useContext(FiltersContext)

  return (
    <section className="main__filters filters">
      <ul className="filters__list">
        {filterContext.isLoaded ? <p>Loading...</p> : filterContext.filters.map((filter) => {
          return (
            <li className="filters__item">
              <span className="filters__label">{filter.label}</span>
              <img className="filters__img" src={filter.img} alt="" />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Filters;