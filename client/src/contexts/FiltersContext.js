import React from 'react';

const FiltersContext = React.createContext({
  filters: [],
  isLoaded: null
});

export default FiltersContext;