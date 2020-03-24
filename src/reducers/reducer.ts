import AppReducer from './app/app.reducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  app: AppReducer,
})

export default reducers
