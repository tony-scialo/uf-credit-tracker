import React from 'react'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import './Header.scss'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../reducers/reducer.state'
import {
  onShowTotals,
  getDashboardData,
  onShowCharges,
} from '../reducers/dashboard/dashboard.actions'

const Header = () => {
  const username = useSelector((state: RootState) => state.app.username)
  const dispatch = useDispatch()

  const navigate = (path: string) => {
    if (path === 'dashboard') {
      dispatch(getDashboardData(30))
    } else if (path === 'totals') {
      dispatch(onShowTotals())
    } else if (path === 'charges') {
      dispatch(onShowCharges())
    }
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
          <div className="menu-item" onClick={() => navigate('dashboard')}>
            Dashboard
          </div>
          <div className="menu-item" onClick={() => navigate('charges')}>
            Charges
          </div>
          <div className="menu-item" onClick={() => navigate('totals')}>
            Total Records
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
