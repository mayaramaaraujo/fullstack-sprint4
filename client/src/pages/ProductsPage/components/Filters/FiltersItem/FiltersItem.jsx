import React from 'react'

import Filter from '../../../../../assets/filter.svg'

const FiltersItem = (props) => {
  return (
    <>
      {props.filters && props.filters.map((filter, i) => {
        return (
          <li className="filters__item" key={i}>
            <span className="filters__label">{filter.label}</span>
            <img className="filters__img" src={Filter} alt="" />
          </li>
        )
      })}
    </>
  )
}

export default FiltersItem;