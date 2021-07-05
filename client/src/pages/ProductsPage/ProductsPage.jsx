import React from 'react';

// components
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Filters from './components/Filters/Filters';
import Product from './components/Product/Product'

const ProductsPage = () => {
  return (
    <main className="main">
      <Breadcrumbs /> 
      <Filters />
      <section className="main__products products">
        <div className="products__row">
          <ol className="products__list">
            <Product />
          </ol>
        </div>
      </section>
    </main>
  )
}

export default ProductsPage;