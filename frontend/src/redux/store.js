import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { carsReducer } from './reducers/vehicleReducer'
import { alertReducer } from './reducers/alertReducer'
import { loginReducer } from './reducers/authReducer'

const rootReducer = combineReducers({
    carsReducer,
    alertReducer,
    userLogin: loginReducer
})

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store