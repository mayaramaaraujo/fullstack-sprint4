import React, { useContext } from 'react';
import ProductsContext from '../../../contexts/ProductsContext';

import img from '../../../assets/c1.webp';

function Products() {
  const productsContext = useContext(ProductsContext);

  return (
    <section class="main__products products">
      <div id="produtosView">
        <div className="products__row">
          <ol className="products__list">
            {productsContext.isLoaded ? <p>Loading...</p> : productsContext.products.map((product) => {
              return (
                <li key={product.id} class="products__card card">
                  <div class="card">
                    <img class="card__img" src={img}/>
                    <p class="card__description">
                      {product.name}
                    </p>
                    <p class="card__price">
                      R$ ${product.price}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Products;