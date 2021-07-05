import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import CategoriesContext from '../../../contexts/CategoriesContext';
import MenuItem from './MenuItem.jsx/MenuItem';
import CategoriesService from '../../../services/CategoriesService';
import LoadingContext from '../../../contexts/LoadingContext';
import MessageContext from '../../../contexts/MessageContext';
import CircularProgress from '@material-ui/core/CircularProgress';

const Menu = () => {
  const categoriesContext = useContext(CategoriesContext);
  const loadingContext = useContext(LoadingContext);
  const messageContext = useContext(MessageContext);

  const handleCategories = () => {
    loadingContext.setIsLoading(true)

    CategoriesService.getAll()
      .then(all => {
        setTimeout(() => {
          categoriesContext.setCategories(all)
          loadingContext.setIsLoading(false)
        }, 3000);
      })
      .catch(err => {
        messageContext.setErrorMessage({ isOpen: true, message: "Não foi possível carregar as categorias" })
      })

  }

  useEffect(() => {
    handleCategories();
  }, [])

  return (
    <nav className="header__menu menu">
      <ul className="menu__list">
        {loadingContext.isLoading ? <div className="circular-progress"><CircularProgress color="inherit" /></div> : <MenuItem />}
      </ul>
    </nav>
  )
}

export default Menu;