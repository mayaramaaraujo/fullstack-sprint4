import React from 'react';

const CategoriesContext = React.createContext({
  categories: [],
  isLoaded: null
});

export default CategoriesContext;