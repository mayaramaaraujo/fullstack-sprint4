import React, { useState, useEffect } from 'react';

// Components
import Message from './components/Message';
import Header from './components/Header/Header';
import Footer from './components/Footer'

// Pages
import ProductsPage from './pages/ProductsPage/ProductsPage';

// Contexts
import MessageContext from './contexts/MessageContext';
import CategoriesContext from './contexts/CategoriesContext'
import LoadingContext from './contexts/LoadingContext';

// styles
import "./css/reset.css"
import "./css/styles.css"

// services
import ProductsService from './services/ProductsService';
import ProductsContext from './contexts/ProductsContext';
import useInput from './hooks/useInput';
import FilterContext from './contexts/FilterContext';

function App() {
  const [errorMessage, setErrorMessage] = useState({ isOpen: false, message: "" });
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState();
  const [filter, setFilter] = useInput();
  
  const handleProducts = () => {
    setIsLoading(true)

    ProductsService.getProducts()
      .then(data => {
        setTimeout(() => {
          setProducts(data)
          setIsLoading(false)
        }, 3000);
        // throw new Error();
      })
      .catch((err) => {
        setErrorMessage({
          isOpen: true,
          message: "Não foi possível carregar os produtos"
        })
      })
  }

  useEffect(() => {
    handleProducts();
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoading , setIsLoading }}>
      <MessageContext.Provider value={{ isOpen: errorMessage.isOpen, errorMessage: errorMessage.message, setErrorMessage: setErrorMessage }}>
        <Message />
        <FilterContext.Provider value={{filter, setFilter}}>
          <ProductsContext.Provider value={{ products, setProducts, handleProducts }}>
            <CategoriesContext.Provider value={{ categories, setCategories }}>
              <Header />
            </CategoriesContext.Provider>
            <ProductsPage />
          </ProductsContext.Provider>
        </FilterContext.Provider>
      </MessageContext.Provider>
      <Footer />
    </LoadingContext.Provider>
  );
}

export default App;
