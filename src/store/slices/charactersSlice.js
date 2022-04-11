import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  characters: [],
  isLoading: false,
  maxPage: 0,
  charactersSpecies: [],
  response: {
    status: 0,
    message: '',
  },
  modalWindow: {
    isShow: false,
    person: {},
  },
  filterParams: {
    page: 1,
    status: '',
    species: '',
    genders: '',
  },
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    fetchCharacters(state) {
      state.isLoading = true
    },
    fetchCharactersDone(state, action) {
      state.characters = action.payload.data.results
      state.isLoading = false
      state.maxPage = action.payload.data.info.pages
    },
    fetchCharactersSpeciesDone(state, action) {
      state.charactersSpecies = action.payload
    },
    fetchCharactersError(state, action) {
      state.isLoading = false
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
    openModalWindow(state, action) {
      state.modalWindow = {
        person: action.payload,
        isShow: true
      }
    },
    closeModalWindow(state, action) {
      state.modalWindow = {
        person: action.payload.person,
        isShow: false
      }
    },
    filterParams(state, action) {
      state.filterParams = {
        page: action.payload.page,
        status: action.payload.status,
        species: action.payload.species,
        genders: action.payload.genders,
      }
    },

  },
})

export default charactersSlice.reducer