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
    case types.DASHBOARD_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case types.DASHBOARD_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: {
          showError: true,
          message: 'Error loading dashboard data',
        },
      }
    }
    default: {
      return { ...state }
    }
  }
}

export default dashboardReducer
