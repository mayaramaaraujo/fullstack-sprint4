import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MessageContext from '../../contexts/MessageContext';
import ProductsService from '../../services/ProductsService';

// components
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Filters from './components/Filters/Filters';
import Product from './components/Product/Product'

const ProductsPage = () => {
  const [products, setProducts] = useState();

  const messageContext = useContext(MessageContext);

  const handleProducts = () => {
    ProductsService.getProducts()
      .then(data => {
        setTimeout(() => {
          setProducts(data)
        }, 3000);
      })
      .catch((err) => {
        messageContext.setErrorMessage({
          isOpen: true,
          message: "Não foi possível carregar os produtos"
        })
      })
  }

  useEffect(() => {
    handleProducts();
  }, [])

  return (
    <main className="main">
      <Breadcrumbs /> 
      <Filters />
      <section className="main__products products">
        <div className="products__row">
          <ol className="products__list">
            <Product products={products}/>
          </ol>
        </div>
      </section>
    </main>
  )
}

export default ProductsPage;