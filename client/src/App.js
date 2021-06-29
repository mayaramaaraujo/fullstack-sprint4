import React, { useState, useEffect } from 'react';

import "./css/reset.css";
import "./css/styles.css";

import Header from './components/Header/Header'
import Message from './components/Message/Message'
import Footer from './components/Footer/Footer';
import ProductsPage from './components/ProductsPage/ProductsPage';

import MessageContext from './contexts/MessageContext';
import CategoriesContext from './contexts/CategoriesContext';
import getCategories from './services/CategoriesService';

function App() {
  const [categories, setCategories] = useState({});
  const [isLoadedCategories, setIsLoadedCategories] = useState(true);

  useEffect(() => {
    getCategories(setIsLoadedCategories, setCategories);
  }, [isLoadedCategories])

  return (
    <>
      <MessageContext.Provider value={{ showMessage: isLoadedCategories, message: "Não foi possível carregar as categorias" }}>
        <Message />
        <CategoriesContext.Provider value={{ categories: categories, isLoaded: isLoadedCategories }}>
          <Header />
        </CategoriesContext.Provider>
        <ProductsPage />
      </MessageContext.Provider>
      <Footer/>
    </>
  );
}

export default App;
