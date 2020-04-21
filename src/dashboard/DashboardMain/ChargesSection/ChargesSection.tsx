import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducers/reducer.state'
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'

const ChargesSection = () => {
  const charges = useSelector((state: RootState) => state.dashboard.charges)

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

  return (
    <div className="charges-section">
      <div>
        <LineChart
          width={730}
          height={250}
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
  )
}

export default ChargesSection
