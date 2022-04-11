import {combineReducers, configureStore} from '@reduxjs/toolkit'
import charactersSliceReducer from './slices/charactersSlice'

const rootReducer = combineReducers({
  charactersSliceReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false,})
})