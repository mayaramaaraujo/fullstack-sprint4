import React from 'react';

const BreadcrumbsContext = React.createContext({
  breadcrumbs: [],
  isLoaded: null
});

export default BreadcrumbsContext;