import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCharacters} from '../../store/thunks/fetchCharacters'
import {selectCharactersData} from '../../store/selectors'
import Button from '@mui/material/Button'

import './Pages.scss'
import {charactersSlice} from '../../store/slices/charactersSlice'

const Pages = () => {
  const {filterParams, maxPage} = useSelector(selectCharactersData)
  const dispatch = useDispatch()
  const [currentPage, setNextPage] = useState(filterParams.page)

  useEffect(()=>{
    dispatch(fetchCharacters({...filterParams, page: currentPage}))
    dispatch(charactersSlice.actions.filterParams({...filterParams,page: currentPage}))
  }, [currentPage])

  useEffect(()=>{
    setNextPage(filterParams.page)
  }, [filterParams.page])
  return (
    <div className={`Pages`}>
      <Button disabled = { 1 === currentPage}
              variant="contained"
              onClick={() => setNextPage(currentPage - 1)}>
        {'Prev Page'}
      </Button>
      <div className={`Pages__current`}>
        {currentPage}
      </div>
      <Button disabled = { maxPage === currentPage}
              variant="contained"
              onClick={() => setNextPage(currentPage + 1)}>
        {'Next Page'}
      </Button>
    </div>
  )
}

export default Pages
