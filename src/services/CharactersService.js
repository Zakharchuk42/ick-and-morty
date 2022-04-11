import axios from 'axios'

let API_URL = 'https://rickandmortyapi.com/api'

export class CharacterService {
  static getCharacter(payload) {
    return axios.get(`${API_URL}/character/`, {
      params: {
        'page': payload.page,
        'status': payload.status,
        'species': payload.species,
        'gender': payload.genders,
      }
    })
  }
}

export class GetCharacterSpecies {
  static getCharacterSpecies(payload) {
    return axios.get(`${API_URL}/character/${payload}`)
  }
}