import React, {useEffect, useState} from 'react'
import FilterSelect from '../FilterSelect/FilterSelect'
import {useDispatch, useSelector} from 'react-redux'
import {charactersSlice} from '../../store/slices/charactersSlice'
import {fetchCharactersSpecies} from '../../store/thunks/fetchCharacters'
import {selectCharactersData} from '../../store/selectors'

import './Filter.scss'

const Filter = () => {
  const dispatch = useDispatch()
  const {charactersSpecies, countCharacters} = useSelector(selectCharactersData)

  const filterStatus = ['Alive', 'Dead', 'Unknown']
  const filterSpecies = [...charactersSpecies]
  const filterGender = ['Female', 'Male', 'Genderless', 'Unknown']

  const [filterStatusState, setFilterStatusState] = useState('');
  const [filterSpeciesState, setFilterSpeciesState] = useState('');
  const [filterGenderState, setFilterGenderState] = useState('');

  const changeStatusFilter = (save) => setFilterStatusState(save)
  const changeSpeciesFilter = (save) => setFilterSpeciesState(save)
  const changeGenderFilter = (save) => setFilterGenderState(save)

  useEffect(()=>{
    dispatch(charactersSlice.actions.filterParams({
      page: 1,
      status: filterStatusState,
      species: filterSpeciesState,
      genders: filterGenderState,
    }))
  }, [filterStatusState, filterGenderState, filterSpeciesState])

  useEffect(() => {
    let charactersCount = []
    for (let i = 0; i < 826; i++) {
      charactersCount[i] = i+1
    }
    dispatch(fetchCharactersSpecies(charactersCount.toString()))

  }, [])

  return (
    <div className={`Filter`}>
      <FilterSelect tabs={'Status'}
                    filter={filterStatus}
                    state={changeStatusFilter}
                    filterChoose={filterStatusState}/>
      <FilterSelect tabs={'Species'}
                    filter={filterSpecies}
                    state={changeSpeciesFilter}
                    filterChoose={filterSpeciesState}/>
      <FilterSelect tabs={'Gender'}
                    filter={filterGender}
                    state={changeGenderFilter}
                    filterChoose={filterGenderState}/>
    </div>
  )
}

export default React.memo(Filter)