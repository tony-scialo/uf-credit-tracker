import React, { useState } from 'react'
import './login.scss'
import { Button, TextField, InputAdornment } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import PersonIcon from '@material-ui/icons/Person'
import SignIn from '../assets/Plain-credit-card.jpg'
import ErrorMessage from '../error-message/ErrorMessage'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../reducers/reducer.state'
import { loginTry } from '../reducers/app/app.actions'

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ username: '', password: '' })
  const app = useSelector((state: RootState) => state.app)
  const history = useHistory()
  const dispatch = useDispatch()

  const onSignIn = () => {
    dispatch(loginTry(loginInfo.username, loginInfo.password, history))
  }

  const usernameChange = (e: any) => {
    setLoginInfo({ ...loginInfo, username: e.target.value })
  }

  const passwordChange = (e: any) => {
    setLoginInfo({ ...loginInfo, password: e.target.value })
  }

  return (
    <div className="login">
      <div className="login-box">
        <div className="left">
          <div className="left-inner">
            <div className="title">
              <div>Credit Tracker +</div>
            </div>
            {app.error ? (
              <ErrorMessage message={'Username/password mismatch'} />
            ) : null}
            <form noValidate autoComplete="off">
              <div className="input-wrapper">
                <TextField
                  className="input"
                  id="username-field"
                  label="Username"
                  onChange={usernameChange}
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
                  onChange={passwordChange}
                  type="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LockOpenIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <Button variant="contained" onClick={onSignIn}>
                Sign In
              </Button>
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
