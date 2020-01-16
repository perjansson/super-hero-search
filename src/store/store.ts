import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import rootReducer, { RootState } from './reducer'

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

const store = configureStore({
  reducer: rootReducer,
})

export default store
