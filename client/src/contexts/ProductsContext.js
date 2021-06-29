import React from 'react';

const ProductsContext = React.createContext({
  products: [],
  isLoaded: null
});

export default ProductsContext;