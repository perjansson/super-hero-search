import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Hero } from 'types'
import { AppThunk } from 'store/store'
import * as api from './api'

interface HeroState {
  findRequest: {
    state: 'initial' | 'loading' | 'success' | 'error'
    data?: Hero
    error?: undefined | Error
  }
  favourites: Hero[]
}

const initialState: HeroState = {
  findRequest: {
    state: 'initial',
    data: undefined,
  },
  favourites: [],
}

const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    findSuperHeroRequest(state) {
      state.findRequest.state = 'loading'
    },
    findSuperHeroRequestSuccess(state, action) {
      state.findRequest.state = 'success'
      state.findRequest.data = action.payload
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

export const findSuperHero = (query: string): AppThunk => async dispatch => {
  try {
    dispatch(findSuperHeroRequest())
    const superHero = await api.findSuperHero(query)
    dispatch(findSuperHeroRequestSuccess(superHero))
  } catch (error) {
    dispatch(findSuperHeroRequestError(error))
  }
}

export default heroesSlice.reducer
