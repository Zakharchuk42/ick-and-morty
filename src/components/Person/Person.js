import React from 'react'
import Button from '@mui/material/Button'
import {useDispatch} from 'react-redux'
import PersonHeader from '../PersonHeader/PersonHeader'
import {charactersSlice} from '../../store/slices/charactersSlice'
import PersonShortInfo from '../PersonShortInfo/PersonShortInfo'

import './Person.scss'

const Person = ({person}) => {
  const dispatch = useDispatch()

  const openModalWindow = () => {
    dispatch(charactersSlice.actions.openModalWindow(person))
  }

  return (
    <div className={`Person`}>
      <PersonHeader person={person}/>
      <div className={`Person__info`}>
        <PersonShortInfo person={person}/>
      </div>
      <div className={`Person__button`}>
        <Button variant="contained" onClick={() => openModalWindow()}>
          {'Dossier'}
        </Button>
      </div>
    </div>
  )
}

export default Person