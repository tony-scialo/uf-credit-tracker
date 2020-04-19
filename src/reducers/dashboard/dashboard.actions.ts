import { Dispatch } from 'react'
import { RootState } from '../reducer.state'

import axios from 'axios'

const types = {
  GET_DASHBOARD_DATA: '[DASHBOARD] GET DASHBOARD DATA',
  REQUEST_DASHBOARD_DATA: '[DASHBOARD] REQUEST DASHBOARD DATA',
  DASHBOARD_DATA_SUCCESS: '[DASHBOARD] REQUEST DASHBOARD DATA SUCCESS',
  DASHBOARD_DATA_ERROR: '[DASHBOARD] REQUEST DASHBOARD DATA ERROR',
}

const getDashboardData = () => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(requestDashboardData())
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      )
      console.log(data)
      return dispatch(dashboardDataSuccess())
    } catch (err) {
      return dispatch(dashboardDataError())
    }
  }
}

const requestDashboardData = () => {
  return {
    type: types.REQUEST_DASHBOARD_DATA,
  }
}

const dashboardDataSuccess = () => {
  return {
    type: types.DASHBOARD_DATA_SUCCESS,
  }
}

const dashboardDataError = () => {
  return {
    type: types.DASHBOARD_DATA_ERROR,
  }
}

export { types, getDashboardData }
