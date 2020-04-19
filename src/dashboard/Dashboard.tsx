import React from 'react'
import './Dashboard.scss'
import Header from '../header/Header'

const Dashboard = () => {
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
