import React from 'react';
// components
import Menu from './Menu/Menu'

// assets images
import MenuImg from '../../assets/menu.svg'
import CloseIcon from '../../assets/close.svg'
import HeaderLogo from '../../assets/rchlo.svg'
import DesktopLogo from '../../assets/riachuelo.svg'
import SearchIcon from '../../assets/search.svg'
import { useContext } from 'react';
import ProductsContext from '../../contexts/ProductsContext';
import FilterContext from '../../contexts/FilterContext';

const Header = () => {
  const productsContext = useContext(ProductsContext);
  const filterContext = useContext(FilterContext);

  const filterProducts = () => {
    if(filterContext.filter === "") {
      productsContext.handleProducts();
    }

    const newArray = productsContext.products.filter(p => 
      p.name.toUpperCase().indexOf(filterContext.filter.toUpperCase()) !== -1
    );
    productsContext.setProducts(newArray)
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__mobile">
          <div className="header__drawer menu header__drawer--active">
            <img className="menu__img" src={MenuImg} alt="" />
            <p className="menu__title">menu</p>
          </div>
          <div className="header__drawer close">
            <img src={CloseIcon} alt="" />
            <p className="close__title">fechar</p>
          </div>
          <h1 className="header__logo">
            <img className="header__img" src={HeaderLogo} alt="Logo" />
          </h1>
        </div>
        <div className="header__desktop">
          <h1 className="header__logo">
            <img className="header__img" src={DesktopLogo} alt="Logo" />
          </h1>
        </div>
        <div className="header__search">
          <img className="header__icon" src={SearchIcon} alt="" />
          <input
            className="header__input"
            type="search"
            placeholder="O que você está procurando?"
            onChange={(e) => filterContext.setFilter(e)}
            onBlur={() => filterProducts(filterContext.filter)}
            onKeyPress={(e) => e.key === 'Enter' && filterProducts(filterContext.filter)}
            value={filterContext.filter}
          />
        </div>
      </div>
      <Menu />
    </header>
  )
}

export default Header;