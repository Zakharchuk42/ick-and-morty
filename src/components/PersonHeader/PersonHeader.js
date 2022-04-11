import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeartPulse, faQuestion, faSkull} from '@fortawesome/free-solid-svg-icons'

import './PersonHeader.scss'

const statusMapping = {
  'Alive': [<FontAwesomeIcon icon={faHeartPulse}/>, 'alive'],
  'Dead': [<FontAwesomeIcon icon={faSkull}/>, 'dead'],
  'unknown': [<FontAwesomeIcon icon={faQuestion}/>, 'unknown']
}

const PersonHeader = ({person}) => {
  const {status} = person
  const statusInfo = statusMapping[status]

  return (
    <div className={`PersonHeader PersonHeader_${statusInfo[1]}`}>
      <img src={person.image} className={`PersonHeader__image`} alt={''}/>
      <div className={`PersonHeader__status`}>
        {statusInfo[0]} {status}
      </div>
    </div>
  )
}

export default PersonHeader