import React from 'react'
import PersonHeader from '../PersonHeader/PersonHeader'
import PersonShortInfo from '../PersonShortInfo/PersonShortInfo'
import CardItem from '../CardItem/CardItem'

import './PersonFullInfo.scss'

const PERSON_FULL_INFO = ['gender', 'species', 'type']

const PersonFullInfo = ({person}) => {

  let fullInfo = []

  for (let key in person) {
    if(PERSON_FULL_INFO.includes(key)) {
      fullInfo.push([key, person[key]])
    }
  }

  return (
    <>
      <PersonHeader person={person}/>
      <div className={`PersonFullInfo`}>
        <div className={`PersonFullInfo__left`}>
          <PersonShortInfo person={person}/>
        </div>
        <div className={`PersonFullInfo__right`}>
          {
            fullInfo.map(el => {
              return(
                <CardItem key={el[0]}>
                  <div>
                    {el[0]}:
                  </div>
                  <div>
                    { el[1] === '' ? 'Unknown' : el[1]}
                  </div>
                </CardItem>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default PersonFullInfo