import React from 'react'
import image from '../../images/notFound.png'

import './MortyIThinkWeAreInTheWrongDimension.scss'

const MortyIThinkWeAreInTheWrongDimension = () => {
  return (
    <div className={`MortyIThinkWeAreInTheWrongDimension`}>
      <p className={`MortyIThinkWeAreInTheWrongDimension__text`}>
        Morty, I think we're in the wrong dimension.
      </p>
      <img className={`MortyIThinkWeAreInTheWrongDimension__image`} src={image} alt=""/>
    </div>
  )
}

export default MortyIThinkWeAreInTheWrongDimension