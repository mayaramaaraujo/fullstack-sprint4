import React, {useState, useEffect, useContext} from 'react'

// contexts
import MessageContext from '../../../../contexts/MessageContext';
import LoadingContext from '../../../../contexts/LoadingContext'

// services
import ProductsService from '../../../../services/ProductsService';

// components
import FiltersItem from './FiltersItem/FiltersItem';

const Filters = () => {
  const messageContext = useContext(MessageContext);
  const loadingContext = useContext(LoadingContext);
  const [filters, setFilters] = useState();

  const handleFilters = () => {
    loadingContext.setIsLoading(true)

    ProductsService.getFilters()
      .then(filters => {
        setTimeout(() => {
          setFilters(filters)
          loadingContext.setIsLoading(false)
        }, 3000);
      })
      .catch(err => {
        messageContext.setErrorMessage({
          isOpen: true,
          message: "Não foi possível carregar os breadcrumbs"
        })
      })
  }

  useEffect(() => {
    handleFilters();
  }, []);

  return (
    <section className="main__filters filters">
      <ul className="filters__list">
        <FiltersItem filters={filters}/>
      </ul>
    </section>
  )
}

export default Filters;



