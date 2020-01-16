import { combineReducers } from 'redux'
import heroes from '../heroes/reducer'

const rootReducer = combineReducers({ heroes })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
