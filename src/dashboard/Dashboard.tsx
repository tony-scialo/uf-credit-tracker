import React, { useEffect } from 'react'
import './Dashboard.scss'
import Header from '../header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../reducers/reducer.state'
import { getDashboardData } from '../reducers/dashboard/dashboard.actions'
import ErrorMessage from '../error-message/ErrorMessage'
import { CircularProgress } from '@material-ui/core'

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'
import Totals from './totals/Totals'

const Dashboard = () => {
  const dashboard = useSelector((state: RootState) => state.dashboard)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDashboardData())
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
    // const data = [
    //   {
    //     name: 'Page A',
    //     uv: 4000,
    //     pv: 2400,
    //     amt: 2400,
    //   },
    //   {
    //     name: 'Page B',
    //     uv: 3000,
    //     pv: 1398,
    //     amt: 2210,
    //   },
    //   {
    //     name: 'Page C',
    //     uv: 2000,
    //     pv: 9800,
    //     amt: 2290,
    //   },
    //   {
    //     name: 'Page D',
    //     uv: 2780,
    //     pv: 3908,
    //     amt: 2000,
    //   },
    //   {
    //     name: 'Page E',
    //     uv: 1890,
    //     pv: 4800,
    //     amt: 2181,
    //   },
    //   {
    //     name: 'Page F',
    //     uv: 2390,
    //     pv: 3800,
    //     amt: 2500,
    //   },
    //   {
    //     name: 'Page G',
    //     uv: 3490,
    //     pv: 4300,
    //     amt: 2100,
    //   },
    // ]
    return (
      <div className="dashboard">
        <Header />
        <div className="main-body">
          <div className="main-body-inner">
            {dashboard.currentScreen === 'dashboard' ? (
              <div>Dashboard</div>
            ) : null}

            {dashboard.currentScreen === 'totals' ? <Totals /> : null}

            {/* <LineChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
