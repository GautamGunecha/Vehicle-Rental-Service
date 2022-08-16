import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { carsReducer } from './reducers/vehicleReducer'
import { alertReducer } from './reducers/alertReducer'

const rootReducer = combineReducers({
    carsReducer,
    alertReducer
})

const middleware = [thunk]

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store