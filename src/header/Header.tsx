import React from 'react'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import './Header.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers/reducer.state'
import { useHistory } from 'react-router'

const Header = () => {
  const username = useSelector((state: RootState) => state.app.username)
  const history = useHistory()

  const navigate = (path: string) => {
    history.push(path)
  }

  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-inner inner">
          <div className="left">
            <CreditCardIcon />
            <div className="title">Credit Tracker +</div>
          </div>
          <div className="right">
            <div className="username">{username ? username : '-'}</div>
          </div>
        </div>
      </div>
      <div className="menu-wrapper">
        <div className="menu-inner inner">
          <div className="menu-item" onClick={() => navigate('/dashboard')}>
            Dashboard
          </div>
          <div className="menu-item" onClick={() => navigate('/totals')}>
            Total Records
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
