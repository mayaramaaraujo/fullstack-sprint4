import React, { useContext, useEffect } from 'react';
// contexts
import CategoriesContext from '../../../contexts/CategoriesContext';
import LoadingContext from '../../../contexts/LoadingContext';
import MessageContext from '../../../contexts/MessageContext';

// components
import MenuItem from './MenuItem.jsx/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';

// services
import CategoriesService from '../../../services/CategoriesService';

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
        messageContext.setErrorMessage({
          isOpen: true,
          message: "Não foi possível carregar as categorias"
        })
      })
  }

  useEffect(() => {
    handleCategories();
  }, [])

  return (
    <nav className="header__menu menu">
      <ul className="menu__list">
        {loadingContext.isLoading ?
          <Dialog 
            open={loadingContext.isLoading} 
            fullScreen
            PaperProps={{style: {  backgroundColor: 'transparent', boxShadow: 'none' }}}>
            <div className="circular-progress">
              <CircularProgress color="inherit" />
            </div>
          </Dialog> : <MenuItem />}
      </ul>
    </nav>
  )
}

export default Menu;