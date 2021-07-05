import React from 'react'

// components

const Product = () => {
  return (
    <li className="products__card card">
      <div className="card">
        <img className="card__img" src="" alt=""/>
        <p className="card__description">
          descricao
        </p>
        <p className="card__price">
          R$ valor
        </p>
      </div>
    </li>
  );
}

export default Product;