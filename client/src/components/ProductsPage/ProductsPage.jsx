import React, { useEffect, useState } from 'react';

import FiltersContext from '../../contexts/FiltersContext';
import ProductsContext from '../../contexts/ProductsContext';
import BreadcrumbsContext from '../../contexts/BreadcrumbsContext';

import BreadCrumbs from './Breadcrumbs/Breadcrumbs';
import Filters from './Filters/Filters';
import Products from './Products/Products';

import getFilters from '../../services/FiltersService';
import getProducts from '../../services/ProductsService';
import getBreadcrumbs from '../../services/BreadcrumbsService';

function ProductsPage() {
  const [products, setProducts] = useState({});
  const [isLoadedProducts, setIsLoadedProducts] = useState(true);

  const [filters, setFilters] = useState({});
  const [isLoadedFilters, setIsLoadedFilters] = useState(true);

  const [breadcrumbs, setBreadcrumbs] = useState({});
  const [isLoadedBreadcrumbs, setIsLoadedBredcrumbs] = useState(true);

  useEffect(() => {
    getProducts(setIsLoadedProducts, setProducts);
    getFilters(setIsLoadedFilters, setFilters);
    getBreadcrumbs(setIsLoadedBredcrumbs, setBreadcrumbs)

  }, [isLoadedProducts, isLoadedFilters])

  return (
    <main className="main">
      <BreadcrumbsContext.Provider value={{breadcrumbs: breadcrumbs, isLoaded: isLoadedBreadcrumbs}}>
        <BreadCrumbs /> 
      </BreadcrumbsContext.Provider>
      <FiltersContext.Provider value={{ filters: filters, isLoaded: isLoadedFilters }}>
        <Filters />
      </FiltersContext.Provider>
      <ProductsContext.Provider value={{ products: products, isLoaded: isLoadedProducts }}>
        <Products />
      </ProductsContext.Provider>
    </main>
  )
}

export default ProductsPage;