import { API_TOKEN } from '../constants'

export const findSuperHero = (query: string) =>
  fetch(`https://superheroapi.com/api/${API_TOKEN}/search/${query}`).then(
    response => {
      return response.json()
    }
  )
