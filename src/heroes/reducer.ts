import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Hero, HeroSearchResult } from 'types'
import { AppThunk } from 'store/store'
import * as api from './api'

interface HeroesMap {
  [key: string]: Hero
}

interface HeroState {
  findRequest: {
    query: string
    state: 'initial' | 'loading' | 'success' | 'error'
    data?: HeroSearchResult
    error?: undefined | Error
  }
  heroesById: HeroesMap
  favourites: Hero[]
}

const initialState: HeroState = {
  findRequest: {
    query: '',
    state: 'initial',
    data: undefined,
  },
  heroesById: {},
  favourites: [],
}

const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    findSuperHeroRequest(state, action) {
      state.findRequest.state = 'loading'
      state.findRequest.query = action.payload
      state.heroesById = {}
    },
    findSuperHeroRequestSuccess(state, action) {
      state.findRequest.state = 'success'
      state.findRequest.data = action.payload
      state.heroesById = state.findRequest.data
        ? state.findRequest.data.results.reduce((memo: HeroesMap, hero) => {
            memo[hero.id] = hero
            return memo
          }, {})
        : {}
    },
    findSuperHeroRequestError(state, action) {
      state.findRequest.state = 'error'
      state.findRequest.error = action.payload
    },
    setFavourite(state, action: PayloadAction<Hero>) {
      state.favourites.push(action.payload)
    },
    removeFavourite(state, action: PayloadAction<Hero>) {
      state.favourites.splice(
        state.favourites.findIndex(hero => hero.id === action.payload.id),
        1
      )
    },
  },
})

export const {
  setFavourite,
  removeFavourite,
  findSuperHeroRequest,
  findSuperHeroRequestSuccess,
  findSuperHeroRequestError,
} = heroesSlice.actions

export const findSuperHero = (query: string): AppThunk => async (
  dispatch,
  getState
) => {
  try {
    dispatch(findSuperHeroRequest(query))
    const searchResult = await api.findSuperHero(query)
    if (searchResult.response === 'error') {
      dispatch(findSuperHeroRequestError({ message: searchResult.error }))
    } else if (
      searchResult['results-for'] === getState().heroes.findRequest.query
    ) {
      dispatch(findSuperHeroRequestSuccess(searchResult))
    }
  } catch (error) {
    dispatch(findSuperHeroRequestError(error))
  }
}

export default heroesSlice.reducer
