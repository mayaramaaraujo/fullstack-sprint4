import React from 'react'

// components
import FiltersItem from './FiltersItem/FiltersItem';

const Filters = () => {
  return (
    <section className="main__filters filters">
      <ul className="filters__list">
        <FiltersItem />
      </ul>
    </section>
  )
}

export default Filters;