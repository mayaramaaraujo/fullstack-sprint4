import React from 'react'

import Filter from '../../../../../assets/filter.svg'

const FiltersItem = () => {
  return (
    <>
      <li className="filters__item">
        <span className="filters__label">Tamanho</span>
        <img className="filters__img" src={Filter} alt=""/>
      </li>
      <li className="filters__item">
        <span className="filters__label">Cor</span>
        <img className="filters__img" src={Filter} alt=""/>
      </li>
      <li className="filters__item">
        <span className="filters__label">Departamento</span>
        <img className="filters__img" src={Filter} alt=""/>
      </li>
      <li className="filters__item">
        <span className="filters__label">Categoria</span>
        <img className="filters__img" src={Filter} alt=""/>
      </li>
      <li className="filters__item">
        <span className="filters__label">Manga</span>
        <img className="filters__img" src={Filter} alt=""/>
      </li>
    </>
  )
}

export default FiltersItem;