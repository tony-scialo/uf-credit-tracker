import { Dispatch } from 'react'
import { RootState } from '../reducer.state'

import axios from 'axios'

const types = {
  GET_DASHBOARD_DATA: '[DASHBOARD] GET DASHBOARD DATA',
  REQUEST_DASHBOARD_DATA: '[DASHBOARD] REQUEST DASHBOARD DATA',
  DASHBOARD_DATA_SUCCESS: '[DASHBOARD] REQUEST DASHBOARD DATA SUCCESS',
  DASHBOARD_DATA_ERROR: '[DASHBOARD] REQUEST DASHBOARD DATA ERROR',
  ON_SHOW_TOTALS_START: '[DASHBOARD] ON SHOW TOTALS START',
  ON_SHOW_TOTALS_SUCCESS: '[DASHBOARD] ON SHOW TOTALS SUCCESS',
  ON_SHOW_TOTALS_ERROR: '[DASHBOARD] ON SHOW TOTALS ERROR',
}

const getDashboardData = () => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(requestDashboardData())
    try {
      const allData = await Promise.all([
        getTopRegions(),
        getTopCorp(),
        getTopMembers(),
      ])

      const [topRegions, topCorp, topMember] = allData

      return dispatch(dashboardDataSuccess({ topRegions, topCorp, topMember }))
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

const dashboardDataSuccess = (payload: {
  topRegions: Array<any>
  topCorp: Array<any>
  topMember: Array<any>
}) => {
  return {
    type: types.DASHBOARD_DATA_SUCCESS,
    payload,
  }
}

const dashboardDataError = () => {
  return {
    type: types.DASHBOARD_DATA_ERROR,
  }
}

const onShowTotals = () => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(onShowTotalsStart())
    try {
      const { data } = await axios.get(`http://localhost:8080/dataPoints/`)
      if (data.status === 'success') {
        return dispatch(onShowTotalsSuccess(data.data.numOftuples))
      }
    } catch (err) {
      return dispatch(onShowTotalsError())
    }
  }
}

const onShowTotalsStart = () => {
  return {
    type: types.ON_SHOW_TOTALS_START,
  }
}

const onShowTotalsSuccess = (payload: { numOfTuples: number }) => {
  return {
    type: types.ON_SHOW_TOTALS_SUCCESS,
    payload,
  }
}

const onShowTotalsError = () => {
  return {
    type: types.ON_SHOW_TOTALS_ERROR,
  }
}

const getTopRegions = () => {
  return axios
    .get(`http://localhost:8080/regions/topfive/30`)
    .then((response) => {
      return response.data.data
    })
    .catch((err) => console.log(err))
}

const getTopCorp = () => {
  return axios
    .get(`http://localhost:8080/corporations/topfive/30`)
    .then((response) => {
      return response.data.data
    })
    .catch((err) => console.log(err))
}

const getTopMembers = () => {
  return axios
    .get(`http://localhost:8080/members/topfive/30`)
    .then((response) => {
      return response.data.data
    })
    .catch((err) => console.log(err))
}

const getTopMembershipType = () => {
  return Promise.resolve({
    status: 'success',
    data: {
      topMembershipType: [
        { membershipType: 'plat', month: '03-2019', percentage: '20' },
        { membershipType: 'plat', month: '04-2019', percentage: '30' },
        { membershipType: 'plat', month: '05-2019', percentage: '40' },
      ],
    },
    error: '',
  })
}

export { types, getDashboardData, onShowTotals }
