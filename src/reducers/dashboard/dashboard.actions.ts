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
  ON_SHOW_CHARGES_START: '[DASHBOARD] ON SHOW CHARGES START',
  ON_SHOW_CHARGES_SUCCESS: '[DASHBOARD] ON SHOW CHARGES SUCCESS',
  ON_SHOW_CHARGES_ERROR: '[DASHBOARD] ON SHOW CHARGES ERROR',
}

const getDashboardData = (numOfDays: number) => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(requestDashboardData())
    try {
      const allData = await Promise.all([
        getTopRegions(numOfDays),
        getTopCorp(numOfDays),
        getTopMembers(numOfDays),
      ])

      const [topRegions, topCorp, topMember] = allData

      return dispatch(
        dashboardDataSuccess({ topRegions, topCorp, topMember, numOfDays })
      )
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
  numOfDays: number
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

const onShowCharges = (cat1: string, cat2: string, numOfDays: number) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(onShowChargesStart())
    try {
      const allData = await Promise.all([
        getTopMembershipType(numOfDays),
        getCompareTwoCategory(cat1, cat2, numOfDays),
        getChargeByRegion(numOfDays),
      ])

      const [topMembershipType, compareCharge, chargeByRegion] = allData

      return dispatch(
        onShowChargesSuccess({
          topMembershipType,
          compareCharge,
          numOfDays,
          cat1,
          cat2,
          chargeByRegion,
        })
      )
    } catch (err) {
      return dispatch(onShowChargesError())
    }
  }
}

const onShowChargesStart = () => {
  return {
    type: types.ON_SHOW_CHARGES_START,
  }
}

const onShowChargesSuccess = (payload: {
  topMembershipType: Array<any>
  compareCharge: Array<any>
  numOfDays: number
  cat1: string
  cat2: string
  chargeByRegion: Array<any>
}) => {
  return {
    type: types.ON_SHOW_CHARGES_SUCCESS,
    payload,
  }
}

const onShowChargesError = () => {
  return {
    type: types.ON_SHOW_CHARGES_ERROR,
  }
}

const getTopRegions = (numOfDays: number) => {
  return axios
    .get(`http://localhost:8080/regions/topfive/${numOfDays}`)
    .then((response) => {
      return response.data.data
    })
    .catch((err) => console.log(err))
}

const getTopCorp = (numOfDays: number) => {
  return axios
    .get(`http://localhost:8080/corporations/topfive/${numOfDays}`)
    .then((response) => {
      return response.data.data
    })
    .catch((err) => console.log(err))
}

const getTopMembers = (numOfDays: number) => {
  return axios
    .get(`http://localhost:8080/members/topfive/${numOfDays}`)
    .then((response) => {
      return response.data.data
    })
    .catch((err) => console.log(err))
}

const getTopMembershipType = (numOfDays: number) => {
  return axios
    .get(`http://localhost:8080/charge/membershipType/${numOfDays}`)
    .then((response) => {
      return response.data.data
    })
    .catch((err) => console.log(err))
}

const getCompareTwoCategory = (
  cat1: string,
  cat2: string,
  numOfDays: number
) => {
  return axios
    .get(`http://localhost:8080/charge/compare/${cat1}/${cat2}/${numOfDays}`)
    .then((response) => {
      return response.data.data
    })
    .catch((err) => console.log(err))
}

const getChargeByRegion = (numOfDays: number) => {
  return axios
    .get(`http://localhost:8080/charge/region/${numOfDays}`)
    .then((response) => {
      return response.data.data
    })
    .catch((err) => console.log(err))
}

export { types, getDashboardData, onShowTotals, onShowCharges }
