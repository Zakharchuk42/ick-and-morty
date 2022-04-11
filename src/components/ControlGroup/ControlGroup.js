import React from 'react'
import Header from '../Header/Header'
import Pages from '../Pages/Pages'
import Filter from '../Filter/Filter'

import './ControlGroup.scss'

const ControlGroup = () => {
  return (
    <div className={`ControlGroup`}>
      <div className={`ControlGroup__active`}>
        <Pages/>
        <Filter/>
      </div>
    </div>
  )
}

export default ControlGroup