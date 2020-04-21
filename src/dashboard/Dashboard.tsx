import React, { useEffect } from 'react'
import './Dashboard.scss'
import Header from '../header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../reducers/reducer.state'
import { getDashboardData } from '../reducers/dashboard/dashboard.actions'
import ErrorMessage from '../error-message/ErrorMessage'
import { CircularProgress } from '@material-ui/core'
import Totals from './totals/Totals'
import DashboardMain from './DashboardMain/DashboardMain'

const Dashboard = () => {
  const dashboard = useSelector((state: RootState) => state.dashboard)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDashboardData(30))
  }, [])

  if (dashboard.loading) {
    const loadingStyle = {
      height: '80px',
      width: '80px',
    }

    return (
      <div className="dashboard">
        <Header />
        <div className="main-body">
          <div className="main-body-inner">
            <div className="loading">
              <CircularProgress
                classes={{
                  root: 'progress-bar',
                }}
                thickness={1}
                style={loadingStyle}
              />
            </div>
          </div>
        </div>
      </div>
    )
  } else if (dashboard.error.showError) {
    return (
      <div className="dashboard">
        <Header />
        <div className="main-body">
          <div className="main-body-inner">
            <ErrorMessage message={dashboard.error.message} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="dashboard">
        <Header />
        <div className="main-body">
          <div className="main-body-inner">
            {dashboard.currentScreen === 'dashboard' ? <DashboardMain /> : null}
            {dashboard.currentScreen === 'totals' ? <Totals /> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
