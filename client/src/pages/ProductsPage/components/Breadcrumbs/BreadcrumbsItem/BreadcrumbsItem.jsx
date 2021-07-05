import React from 'react'

const BreadcrumbsItem = (props) => {
  return (<>
    {props.breadcrumbs && props.breadcrumbs.map((breadcrumb, index) => {
      if (index === 3) {
        return (
          <li className="breadcrumbs__item breadcrumbs__item--active">
            <span className="breadcrumbs__link">{breadcrumb.name}</span>
          </li>
        )
      } else {
        return (
          <>
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link">{breadcrumb.name}</span>
            </li>
            <li className="breadcrumbs__item  breadcrumbs__separator">/</li>
          </>
        )
      }
    })}
  </>
  )
}

export default BreadcrumbsItem;