import { combineReducers } from 'redux'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

import heroes from '../heroes/reducer'

const rootReducer = combineReducers({ heroes })

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default rootReducer
