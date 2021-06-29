import React, { useContext } from 'react';
import BreadcrumbsContext from '../../../contexts/BreadcrumbsContext';

function BreadCrumbs() {

  const breadcrumbsContext = useContext(BreadcrumbsContext);


  return (
    <section className="main__breadcrumbs breadcrumbs">
      <nav>
        <ol className="breadcrumbs__list">

          {breadcrumbsContext.isLoaded ? <p>Loading...</p> : breadcrumbsContext.breadcrumbs.map((breadcrumb, i) => {
            if (i === 0) {
              return (
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href={breadcrumb.link}>{breadcrumb.name}</a>
                </li>
              )
            }
            if (breadcrumb.link) {
              return (
                <>
                  <li className="breadcrumbs__item breadcrumbs__separator">/</li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href={breadcrumb.link}>{breadcrumb.name}</a>
                  </li>
                </>
              )
            } else {
              return (
                <>
                  <li className="breadcrumbs__item breadcrumbs__separator">/</li>
                  <li className="breadcrumbs__item breadcrumbs__item--active">
                    <span className="breadcrumbs__link">{breadcrumb.name}</span>
                  </li>
                </>
              )
            }
          })}
        </ol>
      </nav>
    </section>
  )
}

export default BreadCrumbs;