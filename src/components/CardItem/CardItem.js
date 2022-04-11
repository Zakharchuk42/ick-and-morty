import React from 'react'

import './CardItem.scss'

const CardItem = ({children}) => {
  return (
    <div className={`CardItem`}>
      {children}
    </div>
  )
}

export default CardItem