import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../reducers/reducer.state'
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
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
    dispatch(onShowCharges(charges.cat1, charges.cat2, event.target.value))
  }

  const handleCat1Change = (event: any) => {
    dispatch(onShowCharges(event.target.value, charges.cat2, charges.numOfDays))
  }
  const handleCat2Change = (event: any) => {
    dispatch(onShowCharges(charges.cat1, event.target.value, charges.numOfDays))
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#651fff']

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
                <div className="filter">
                  <FormControl className="bar-filter-thing">
                    <InputLabel id="cat1Label">Category 1</InputLabel>
                    <Select
                      labelId="cat1Label"
                      id="cat1"
                      value={charges.cat1}
                      onChange={handleCat1Change}
                    >
                      <MenuItem value={'Travel'}>Travel</MenuItem>
                      <MenuItem value={'Meals'}>Meals</MenuItem>
                      <MenuItem value={90}>90 days</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className="bar-filter-thing">
                    <InputLabel id="cat2Label">Category 2</InputLabel>
                    <Select
                      labelId="cat2Label"
                      id="cat2"
                      value={charges.cat2}
                      onChange={handleCat2Change}
                    >
                      <MenuItem value={'Travel'}>Travel</MenuItem>
                      <MenuItem value={'Meals'}>Meals</MenuItem>
                      <MenuItem value={90}>90 days</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="row">
                  <div className="bar-chart">
                    <div className="title">Compare Two Charges By Category</div>
                    <LineChart
                      width={830}
                      height={350}
                      data={charges.compareCharge}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="chargeDate" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="cat1Amt"
                        stroke="#0088FE"
                      />
                      <Line
                        type="monotone"
                        dataKey="cat2Amt"
                        stroke="#FF8042"
                      />
                    </LineChart>
                  </div>
                </div>
                <div className="row">
                  <div className="bar-chart">
                    <div className="title">Charges By Region</div>
                    <PieChart width={450} height={250}>
                      <Pie
                        data={charges.chargeByRegion.map((d) => {
                          return { name: d.regionName, value: d.percentages }
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
                        {charges.chargeByRegion.map((entry, index) => (
                          <Cell
                            key={index}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
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
