import { DashboardState } from './dashboard.state'
import { initialState } from './dashboard.initial'
import { types } from './dashboard.actions'

const dashboardReducer = (
  state: DashboardState = initialState,
  action: any
) => {
  switch (action.type) {
    case types.REQUEST_DASHBOARD_DATA: {
      return {
        ...state,
        loading: true,
      }
    }
    default: {
      return { ...state }
    }
  }
}

export default dashboardReducer
