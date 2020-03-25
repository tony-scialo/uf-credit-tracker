import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers/reducer.state'
import './login.scss'
import { Button, TextField, InputAdornment } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import PersonIcon from '@material-ui/icons/Person'

import SignIn from '../assets/Plain-credit-card.jpg'

const Login = () => {
  const username = useSelector((state: RootState) => state.app.username)
  const password = useSelector((state: RootState) => state.app.username)
  return (
    <div className="login">
      <div className="login-box">
        <div className="left">
          <div className="left-inner">
            <div className="title">
              <div>Credit Tracker +</div>
            </div>
            <form noValidate autoComplete="off">
              <div className="input-wrapper">
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
              </div>
              <div className="input-wrapper">
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
              </div>

              <Button variant="contained">Sign In</Button>
            </form>
          </div>
        </div>
        <div className="right">
          <img src={SignIn} />
        </div>
      </div>
    </div>
  )
}

export default Login
