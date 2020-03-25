import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers/reducer.state'
import './login.scss'
import { Button, TextField, InputAdornment } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import PersonIcon from '@material-ui/icons/Person'

const Login = () => {
  const username = useSelector((state: RootState) => state.app.username)
  const password = useSelector((state: RootState) => state.app.username)
  return (
    <div className="login">
      <div className="login-box">
        <div className="left">
          <form noValidate autoComplete="off">
            <TextField
              className="input"
              id="username-field"
              label="Username"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className="input"
              id="password-field"
              label="Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockOpenIcon />
                  </InputAdornment>
                ),
              }}
            />
          </form>
          <Button variant="contained">Sign In</Button>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Login
