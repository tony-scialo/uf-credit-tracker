import React, { useState } from 'react'
import './login.scss'
import { Button, TextField, InputAdornment } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import PersonIcon from '@material-ui/icons/Person'
import SignIn from '../assets/Plain-credit-card.jpg'
import ErrorMessage from '../error-message/ErrorMessage'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ username: '', password: '' })
  const [showError, setShowError] = useState(false)
  const history = useHistory()

  const onSignIn = () => {
    if (
      loginInfo.username === 'tscialo@uf.org' &&
      loginInfo.password === 'credit1'
    ) {
      history.push('/dashboard')
    } else {
      setShowError(true)
    }
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
            {showError ? (
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
