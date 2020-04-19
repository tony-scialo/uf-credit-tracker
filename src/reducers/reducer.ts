import AppReducer from './app/app.reducer'
import { combineReducers } from 'redux'
import dashboardReducer from './dashboard/dashboard.reducer'

const reducers = combineReducers({
  app: AppReducer,
  dashboard: dashboardReducer,
})

export default reducers
