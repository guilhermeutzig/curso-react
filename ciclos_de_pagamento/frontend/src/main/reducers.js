import { combineReducers } from 'redux'

import DashboardReducer from '../components/dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer';
import BillingCycleReducer from '../components/billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer