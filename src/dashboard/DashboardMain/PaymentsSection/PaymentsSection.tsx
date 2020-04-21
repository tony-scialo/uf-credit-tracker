import React, { useState, useRef } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import './PaymentsSection.scss'

const PaymentsSection = () => {
  const [days, setDays] = useState(30)

  const handleChange = (event: any) => {
    setDays(event.target.value)
  }

  const wrapper: any = useRef(null)

  return (
    <div className="payments-section">
      <div className="filter">
        <FormControl ref={wrapper}>
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
      <div className="data"></div>
    </div>
  )
}

export default PaymentsSection
