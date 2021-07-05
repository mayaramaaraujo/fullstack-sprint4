import React, {useState, useEffect, useContext} from 'react'

// contexts
import MessageContext from '../../../../contexts/MessageContext';
import LoadingContext from '../../../../contexts/LoadingContext'

// services
import CategoriesService from '../../../../services/CategoriesService';

// components
import BreadcrumbsItem from './BreadcrumbsItem/BreadcrumbsItem';

const Breadcrumbs = () => {
  const messageContext = useContext(MessageContext);
  const loadingContext = useContext(LoadingContext)
  const [breadcrumbs, setBreadcrumbs] = useState();

  const handleBreadcrumbs = () => {
    loadingContext.setIsLoading(true)

    CategoriesService.getCurrent()
      .then(current => {
        setTimeout(() => {
          setBreadcrumbs(current)
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
    handleBreadcrumbs();
  }, [])

  return (
    <section className="main__breadcrumbs breadcrumbs">
      <nav>
        <ol className="breadcrumbs__list">
          <BreadcrumbsItem breadcrumbs={breadcrumbs}/>
        </ol>
      </nav>
    </section>
  )
}

export default Breadcrumbs;