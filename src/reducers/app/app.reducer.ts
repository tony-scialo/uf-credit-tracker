import { types } from './app.actions'
import { AppState } from './app.state'
import { initialState } from './app.intitial'

const AppReducer = (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case types.LOG_USER_IN: {
      return { ...state }
    }
    default: {
      return { ...state }
    }
  }
}

export default AppReducer
