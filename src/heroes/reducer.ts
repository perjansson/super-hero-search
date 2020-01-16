import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Hero } from 'types'
import { AppThunk } from 'store/store'
import * as api from './api'

interface HeroState {
  data: Hero[]
  selectedHero?: Hero
  fetchState: undefined | 'loading' | 'error'
  error?: undefined | Error
}

const initialState: HeroState = {
  data: [],
  fetchState: undefined,
}

const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    addHero(state, action: PayloadAction<Hero>) {
      const hero = action.payload
      state.data.push(hero)
    },
    removeHero(state, action: PayloadAction<Hero>) {
      state.data.splice(
        state.data.findIndex(hero => hero.id === action.payload.id),
        1
      )
    },
    findSuperHeroRequest(state) {
      state.fetchState = 'loading'
    },
    findSuperHeroRequestSuccess(state, action) {
      state.selectedHero = action.payload
    },
    findSuperHeroRequestError(state, action) {
      state.fetchState = 'error'
      state.error = action.payload
    },
  },
})

export const {
  addHero,
  removeHero,
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
