import { AppState } from './app/app.state'
import { DashboardState } from './dashboard/dashboard.state'

export interface RootState {
  app: AppState
  dashboard: DashboardState
}
