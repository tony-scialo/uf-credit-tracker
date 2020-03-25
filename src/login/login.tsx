import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers/reducer.state'

const Login = () => {
  const username = useSelector((state: RootState) => state.app.username)
  const password = useSelector((state: RootState) => state.app.username)
  return (
    <div>
      <div>{username}</div>
      <div>{password}</div>
    </div>
  )
}

export default Login
