import { types } from './app.actions'
import { AppState } from './app.state'
import { initialState } from './app.intitial'

const AppReducer = (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case types.REQUEST_LOG_USER_IN:
      return { ...state, loading: true }
    case types.LOG_USER_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        username: action.payload.username,
      }
    case types.LOG_USER_IN_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return { ...state }
  }
}

export default AppReducer
