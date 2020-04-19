import React, { useEffect } from 'react'
import './Dashboard.scss'
import Header from '../header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../reducers/reducer.state'
import { getDashboardData } from '../reducers/dashboard/dashboard.actions'

const Dashboard = () => {
  const dashboard = useSelector((state: RootState) => state.dashboard)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDashboardData())
  }, [])

  return (
    <div className="dashboard">
      <Header />
      <div className="main-body">
        <div className="main-body-inner">Body</div>
      </div>
    </div>
  )
}

export default Dashboard
