import { API_TOKEN } from '../constants'
import { HeroSearchResult } from 'types'

export const findSuperHero = (query: string): Promise<HeroSearchResult> =>
  fetch(`https://superheroapi.com/api/${API_TOKEN}/search/${query}`).then(
    response => {
      return response.json()
    }
  )
