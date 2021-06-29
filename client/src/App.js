import "./css/reset.css";
import "./css/styles.css"
import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header'
import Message from './components/Message/Message';
import MessageContext from './contexts/MessageContext';
import CategoriesContext from './contexts/CategoriesContext';
import getCategories from './services/CategoriesService';

function App() {
  const [categories, setCategories] = useState({});
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getCategories(setIsLoaded, setCategories);
  }, [isLoaded])
  
  return (
    <>
      <MessageContext.Provider value={{showMessage: isLoaded, message: "Não foi possível carregar as categorias"}}>
        <Message/>
      </MessageContext.Provider>
      <CategoriesContext.Provider value={{categories: categories, isLoaded: isLoaded}}>
        <Header /> 
      </CategoriesContext.Provider>
    </>
  );
}

export default App;
