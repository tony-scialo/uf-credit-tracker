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
        error: {
          showError: false,
        },
        currentScreen: 'dashboard',
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
    case types.ON_SHOW_TOTALS_START: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.ON_SHOW_TOTALS_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        totals: {
          numOfTuples: action.payload,
        },
        error: {
          showError: false,
        },
        currentScreen: 'totals',
      }
    }
    case types.ON_SHOW_TOTALS_ERROR: {
      return {
        ...state,
        loading: false,
        error: {
          showError: true,
          message: 'Error getting number of tuples',
        },
      }
    }
    default: {
      return { ...state }
    }
  }
}

export default dashboardReducer
