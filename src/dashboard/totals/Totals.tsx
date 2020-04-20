import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers/reducer.state'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'
import './Totals.scss'

const Totals = () => {
  const dashboard = useSelector((state: RootState) => state.dashboard)

  const data = [{ name: 'Group A', value: dashboard.totals.numOfTuples }]

  return (
    <div className="totals">
      <h2>Total Number of Tuples</h2>

      <div className="totals-wrapper">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={200}
            cy={200}
            outerRadius={170}
            fill="#00bfa5"
            label
          />
        </PieChart>
      </div>
    </div>
  )
}

export default Totals
