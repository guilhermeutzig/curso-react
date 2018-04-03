import { combineReducers } from 'redux'
import CounterReducer from '../commons/counter/counterReducer'

const rootReducer = combineReducers({
    counter: CounterReducer
})

export default rootReducer