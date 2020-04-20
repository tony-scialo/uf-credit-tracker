import React from 'react'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import './Header.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers/reducer.state'

const Header = () => {
  const username = useSelector((state: RootState) => state.app.username)
  return (
    <div className="header">
      <div className="header-inner">
        <div className="left">
          <CreditCardIcon />
          <div className="title">Credit Tracker +</div>
        </div>
        <div className="right">
          <div className="username">{username ? username : '-'}</div>
        </div>
      </div>
    </div>
  )
}

export default Header
