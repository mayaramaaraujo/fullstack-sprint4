import React, { useState } from 'react';

// Components
import Message from './components/Message';
import Header from './components/Header/Header';

// Pages
import ProductsPage from './pages/ProductsPage/ProductsPage';

// Contexts
import MessageContext from './contexts/MessageContext';
import CategoriesContext from './contexts/CategoriesContext'

// styles
import "./css/reset.css"
import "./css/styles.css"

// services
import LoadingContext from './contexts/LoadingContext';

function App() {
  const [errorMessage, setErrorMessage] = useState({ isOpen: false, message: "" });
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{isLoading: isLoading, setIsLoading: setIsLoading}}>
      <MessageContext.Provider value={{ isOpen: errorMessage.isOpen, errorMessage: errorMessage.message, setErrorMessage: setErrorMessage }}>
        <Message />
        <CategoriesContext.Provider value={{ categories: categories, setCategories: setCategories }}>
          <Header />
        </CategoriesContext.Provider>
        <ProductsPage />
      </MessageContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
