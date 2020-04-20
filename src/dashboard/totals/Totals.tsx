import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../reducers/reducer.state'

const Totals = () => {
  const dashboard = useSelector((state: RootState) => state.dashboard)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getDashboardData())
  }, [])

  return <div>Totals</div>
}

export default Totals
