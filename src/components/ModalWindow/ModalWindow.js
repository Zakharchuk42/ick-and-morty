import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectCharactersData} from '../../store/selectors'
import {charactersSlice} from '../../store/slices/charactersSlice'
import Card from '../Card/Card'
import Button from '@mui/material/Button'

import './ModalWindow.scss'

const ModalWindow = ({children}) => {
  const {modalWindow} = useSelector(selectCharactersData)
  const dispatch = useDispatch()

  const closeModalWindow = () => {
    dispatch(charactersSlice.actions.closeModalWindow)
    dispatch(charactersSlice.actions.closeModalWindow({}))
  }

  return (
    <>
      {
        modalWindow.isShow ?
        <div className={`ModalWindow`}>
          <div className={`ModalWindow__window`}>
            <Card>
              {children}
              <div className={`ModalWindow__button`}>
                <Button variant="contained" onClick={() => closeModalWindow()}>
                  {'Close'}
                </Button>
              </div>
            </Card>
          </div>
        </div>
        : null
      }
    </>
  )
}

export default ModalWindow