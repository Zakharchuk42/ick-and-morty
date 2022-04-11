import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

import './PersonShortInfo.scss'

const PersonShortInfo = ({person}) => {
  const {location, name} = person

  return (
    <div className={`PersonShortInfo`}>
      <div className={`PersonShortInfo__type`}>
        <FontAwesomeIcon icon={faLocationDot} /> {location.name}
      </div>
      <div className={`PersonShortInfo__name`}>
        {name}
      </div>
    </div>
  )
}

export default PersonShortInfo