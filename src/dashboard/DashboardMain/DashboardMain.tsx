import React from 'react'
import './DashboardMain.scss'
import PaymentsSection from './PaymentsSection/PaymentsSection'
import ChargesSection from './ChargesSection/ChargesSection'

const DashboardMain = () => {
  return (
    <div className="dashboard-main">
      <h2>Dashboard</h2>
      <div className="container">
        <h3>Payments</h3>
        <div className="container-inner">
          <PaymentsSection />
        </div>
      </div>
      {/* <div className="container">
        <h3>Charges</h3>
        <div className="container-inner">
          <ChargesSection />
        </div>
      </div> */}
    </div>
  )
}

export default DashboardMain
