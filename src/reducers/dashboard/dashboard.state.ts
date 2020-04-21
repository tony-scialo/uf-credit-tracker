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
  currentScreen: 'dashboard' | 'totals'
  payments: {
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
    topMembershipType: Array<{
      membershipType: string
      month: string
      percentage: number
    }>
  }
}
