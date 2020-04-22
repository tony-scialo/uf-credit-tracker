import { DashboardState } from './dashboard.state'

export const initialState: DashboardState = {
  username: 'tscialo@uf.org',
  loading: true,
  error: {
    showError: false,
    message: '',
  },
  totals: {
    numOfTuples: 0,
  },
  currentScreen: 'dashboard',
  payments: {
    numOfDays: 30,
    topRegions: [],
    topCorp: [],
    topMember: [],
  },
  charges: {
    numOfDays: 30,
    cat1: 'Travel',
    cat2: 'Meals',
    topMembershipType: [],
    compareCharge: [],
  },
}
