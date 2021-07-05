import React from 'react'

// components
import { imgs } from '../../../../assets/img';

const Product = (props) => {
  return (
    <>
      {props.products && props.products.map((product, i) => {
        return (
          <li className="products__card card">
            <div className="card">
              <img className="card__img" src={imgs[i]} alt="" />
              <p className="card__description">
                {product.name}
              </p>
              <p className="card__price">
                R$ {product.price}
              </p>
            </div>
          </li>
        )
      })}
    </>
  )
}

export default Product;