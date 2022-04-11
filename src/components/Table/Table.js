import React, {useEffect} from 'react'
import {fetchCharacters} from '../../store/thunks/fetchCharacters'
import {useDispatch, useSelector} from 'react-redux'
import {selectCharactersData} from '../../store/selectors'
import Card from '../Card/Card'
import Person from '../Person/Person'
import ModalWindow from '../ModalWindow/ModalWindow'
import PersonFullInfo from '../PersonFullInfo/PersonFullInfo'

import './Table.scss'
import ControlGroup from '../ControlGroup/ControlGroup'

const Table = () => {
  const dispatch = useDispatch()
  const {characters = [], isLoading, modalWindow, filterParams, } = useSelector(selectCharactersData)

  useEffect(() => {
    dispatch(fetchCharacters({
      page: filterParams.page,
      status: filterParams.status,
      species: filterParams.species,
      genders: filterParams.genders,
    }))
  }, [filterParams])

  return (
    <>
      <ControlGroup/>
      <ModalWindow>
        <PersonFullInfo person={modalWindow.person}/>
      </ModalWindow>
      <div className={`Table`}>
        <div className={`Table__container`}>
          {isLoading ? 'Loading....' : characters.map(person => {
            return (
              <div className={`Table__cards`} key={person.id}>
                <Card>
                  <Person person={person}/>
                </Card>
              </div>
            )
          })
          }
        </div>
      </div>
    </>
  )
}

export default Table