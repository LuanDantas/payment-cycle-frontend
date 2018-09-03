// Default imports
import { combineReducers } from 'redux'

// Custom imports
import DashboardReducer from '../dashboard/dashboard-reducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer