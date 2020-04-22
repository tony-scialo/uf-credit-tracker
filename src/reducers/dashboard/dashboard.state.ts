export interface DashboardState {
  username: string
  loading: boolean
  error: {
    showError: boolean
    message: string
  }
  totals: {
    numOfTuples: number
  }
  currentScreen: 'dashboard' | 'totals' | 'charges'
  payments: {
    numOfDays: number
    topRegions: Array<{
      regionNo: number
      regionName: string
      totalPayments: number
    }>
    topCorp: Array<{
      corpNo: number
      corpName: string
      totalPayments: number
    }>
    topMember: Array<{
      memberNo: number
      memberFName: string
      memberLName: string
      totalPayments: number
    }>
  }
  charges: {
    numOfDays: number
    cat1: string
    cat2: string
    topMembershipType: Array<{
      membershipType: string
      month: string
      percentage: number
    }>
    compareCharge: Array<{
      chargeDate: string
      cat1Amt: number
      cat2Amt: number
    }>
  }
}
