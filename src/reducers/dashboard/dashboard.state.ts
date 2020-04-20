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
}
