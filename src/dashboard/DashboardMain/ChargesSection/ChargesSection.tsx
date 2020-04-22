import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../reducers/reducer.state'
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { onShowCharges } from '../../../reducers/dashboard/dashboard.actions'
import '../PaymentsSection/PaymentsSection.scss'

const ChargesSection = () => {
  const charges = useSelector((state: RootState) => state.dashboard.charges)
  const dispatch = useDispatch()

  const mapMembershipData = (data: Array<any>) => {
    const silver = data
      .filter((d) => d.membershipType === 'Silver')
      .sort((x, y) => (x.month < y.month ? -1 : x.month > y.month ? 1 : 0))
    const gold = data
      .filter((d) => d.membershipType === 'Gold')
      .sort((x, y) => (x.month < y.month ? -1 : x.month > y.month ? 1 : 0))
    const plat = data
      .filter((d) => d.membershipType === 'Platinum')
      .sort((x, y) => (x.month < y.month ? -1 : x.month > y.month ? 1 : 0))

    const final = []
    while (silver.length > 0) {
      const s = silver.shift()
      const g = gold.shift()
      const p = plat.shift()
      final.push({
        name: s.month,
        silver: s.percentages,
        gold: g.percentages,
        plat: p.percentages,
      })
    }

    return final
  }

  const handleChange = (event: any) => {
    dispatch(onShowCharges(event.target.value))
  }

  return (
    <div className="dashboard-main">
      <h2>Dashboard</h2>
      <div className="container">
        <h3>Charges</h3>
        <div className="container-inner">
          <div className="payments-section">
            <div className="filter">
              <FormControl>
                <InputLabel id="paymentInputLabel">Previous</InputLabel>
                <Select
                  labelId="paymentInputLabel"
                  id="paymentInput"
                  value={charges.numOfDays}
                  onChange={handleChange}
                >
                  <MenuItem value={30}>30 days</MenuItem>
                  <MenuItem value={60}>60 days</MenuItem>
                  <MenuItem value={90}>90 days</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="data">
              <div className="data-inner">
                <div className="row">
                  <div className="bar-chart">
                    <div className="title">Charges By Membership Type</div>
                    <LineChart
                      width={830}
                      height={350}
                      data={mapMembershipData(charges.topMembershipType)}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="silver" stroke="#0088FE" />
                      <Line type="monotone" dataKey="gold" stroke="#FFBB28" />
                      <Line type="monotone" dataKey="plat" stroke="#FF8042" />
                    </LineChart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChargesSection
