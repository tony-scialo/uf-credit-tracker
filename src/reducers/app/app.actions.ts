import { Dispatch } from 'react'
import Axios from 'axios'

const types = {
  REQUEST_LOG_USER_IN: '[APP] REQUEST LOG USER IN',
  LOG_USER_IN_SUCCESS: '[APP] LOG USER IN SUCCESS',
  LOG_USER_IN_FAILURE: '[APP] LOG USER IN FAILURE',
}

const loginTry = (username: string, password: string, history: any) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(requestLogUserIn({ username, password }))
    try {
      const { data } = await Axios.get(
        `http://localhost:8080/login/${username}/${password}`
      )

      if (data.status === 'success' && data.data.validLogin) {
        history.push('/dashboard')
        return dispatch(requestLogUserSuccess({ username }))
      } else {
        throw Error()
      }
    } catch (err) {
      return dispatch(requestLogUserFailure())
    }
  }
}

const requestLogUserIn = (payload: { username: string; password: string }) => {
  return {
    type: types.REQUEST_LOG_USER_IN,
  }
}

const requestLogUserSuccess = (payload: { username: string }) => {
  return {
    type: types.LOG_USER_IN_SUCCESS,
    payload,
  }
}

const requestLogUserFailure = () => {
  return {
    type: types.LOG_USER_IN_FAILURE,
  }
}

export { types, loginTry }
