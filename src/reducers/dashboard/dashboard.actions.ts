import { Dispatch } from 'react'
import { RootState } from '../reducer.state'

const types = {
  GET_DASHBOARD_DATA: '[DASHBOARD] GET DASHBOARD DATA',
  REQUEST_DASHBOARD_DATA: '[DASHBOARD] REQUEST DASHBOARD DATA',
}

const getDashboardData = () => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(requestDashboardData())
  }
}

const requestDashboardData = () => {
  return {
    type: types.REQUEST_DASHBOARD_DATA,
  }
}

export { types, getDashboardData }
