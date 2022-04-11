import {CharacterService, GetCharacterSpecies} from '../../services/CharactersService'
import {charactersSlice} from '../slices/charactersSlice'

export const fetchCharacters = (payload) => async (dispatch) => {
  try {
    dispatch(charactersSlice.actions.fetchCharacters)
    const res = await CharacterService.getCharacter(payload)
    if (res.status === 200) {
      dispatch(charactersSlice.actions.fetchCharactersDone(res))
    } else {
      dispatch(charactersSlice.actions.fetchCharactersError(res))
    }
  } catch (error) {
    console.log(error)
  }
}

export const fetchCharactersSpecies = (payload) => async (dispatch) => {
  try {
    const allCharacters = await GetCharacterSpecies.getCharacterSpecies(payload)
    if (allCharacters.status === 200) {
      const filterSpecies = []
      allCharacters.data.forEach((el)=>{
        if(filterSpecies.includes(el.species)){
          return
        }
        filterSpecies.push(el.species)
      })
      dispatch(charactersSlice.actions.fetchCharactersSpeciesDone(filterSpecies))
    } else {
      dispatch(charactersSlice.actions.fetchCharactersError(allCharacters))
    }
  } catch (error) {
    console.log(error)
  }
}