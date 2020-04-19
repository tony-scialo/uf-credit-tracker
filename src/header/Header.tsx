import React from 'react'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="left">
          <CreditCardIcon />
          <div className="title">Credit Tracker +</div>
        </div>
        <div className="right">
          <div className="username">tscialo@uf.org</div>
        </div>
      </div>
    </div>
  )
}

export default Header
