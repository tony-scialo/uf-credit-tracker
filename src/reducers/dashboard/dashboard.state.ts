export interface DashboardState {
  username: string
  loading: boolean
  error: {
    showError: boolean
    message: string
  }
}
