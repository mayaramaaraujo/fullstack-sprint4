import React from 'react'
import { useContext } from 'react';

// assets
import imgs from '../../../../assets/img';

// contexts
import ProductsContext from '../../../../contexts/ProductsContext';

const Product = () => {
  const productsContext = useContext(ProductsContext);

  return (
    <>
      {productsContext.products && productsContext.products.map((product, i) => {
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