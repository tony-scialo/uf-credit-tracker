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

      const [
        {
          data: { topRegions },
        },
        {
          data: { topCorp },
        },
        {
          data: { topMember },
        },
      ] = allData

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
  return Promise.resolve({
    status: 'success',
    data: {
      topRegions: [
        { regionNo: 9, regionName: 'Africa', totalPayments: 1815167 },
        { regionNo: 4, regionName: 'Western Europe', totalPayments: 1805543 },
        { regionNo: 3, regionName: 'Scandanavia', totalPayments: 1686398 },
        { regionNo: 7, regionName: 'China', totalPayments: 1678806 },
        { regionNo: 5, regionName: 'Easten Europe', totalPayments: 1678345 },
      ],
    },
    error: '',
  })
}

const getTopCorp = () => {
  return Promise.resolve({
    status: 'success',
    data: {
      topCorp: [
        { corpNo: 94, corpName: 'E*Trade', totalPayments: 79078 },
        { corpNo: 42, corpName: 'Mastercard Inc.', totalPayments: 69676 },
        { corpNo: 34, corpName: 'A.O. Smith Corp', totalPayments: 67211 },
        { corpNo: 71, corpName: 'Align Technology', totalPayments: 67073 },
        { corpNo: 13, corpName: 'CVS Health', totalPayments: 64746 },
      ],
    },
    error: '',
  })
}

const getTopMembers = () => {
  return Promise.resolve({
    status: 'success',
    data: {
      topMember: [
        {
          memberNo: 1,
          memberFName: 'Diego',
          memberLName: 'Abreba',
          totalPayments: 25602,
        },
        {
          memberNo: 2,
          memberFName: 'Brenda',
          memberLName: 'Smith',
          totalPayments: 23201,
        },
        {
          memberNo: 3,
          memberFName: 'John',
          memberLName: 'Yank',
          totalPayments: 22880,
        },
        {
          memberNo: 4,
          memberFName: 'Tony',
          memberLName: 'Gordon',
          totalPayments: 22240,
        },
        {
          memberNo: 5,
          memberFName: 'Kelsey',
          memberLName: 'Scezer',
          totalPayments: 22044,
        },
      ],
    },
    error: '',
  })
}

export { types, getDashboardData, onShowTotals }
