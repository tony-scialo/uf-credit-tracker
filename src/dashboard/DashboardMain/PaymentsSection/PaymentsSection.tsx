import React, { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import './PaymentsSection.scss'
import { PieChart, Pie, Cell } from 'recharts'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducers/reducer.state'

const PaymentsSection = () => {
  const payments = useSelector((state: RootState) => state.dashboard.payments)
  const [days, setDays] = useState(30)

  const handleChange = (event: any) => {
    setDays(event.target.value)
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#651fff']

  return (
    <div className="payments-section">
      <div className="filter">
        <FormControl>
          <InputLabel id="paymentInputLabel">Previous</InputLabel>
          <Select
            labelId="paymentInputLabel"
            id="paymentInput"
            value={days}
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
          <div className="pie-chart">
            <div className="title">Top 5 Regions</div>
            <PieChart width={450} height={250}>
              <Pie
                data={payments.topRegions.map((d) => {
                  return { name: d.regionName, value: d.totalPayments }
                })}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
                label={(entry) => entry.name}
              >
                {payments.topRegions.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="pie-chart">
            <div className="title">Top 5 Corps</div>
            <PieChart width={450} height={250}>
              <Pie
                data={payments.topCorp.map((d) => {
                  return { name: d.corpName, value: d.totalPayments }
                })}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
                label={(entry) => entry.name}
              >
                {payments.topRegions.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentsSection
