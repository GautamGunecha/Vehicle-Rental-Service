import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { alertReducer } from './reducers/alertReducer'
import { loginReducer } from './reducers/authReducer'
import { getAllCarsReducer } from './reducers/carReducer'

const rootReducer = combineReducers({
    alertReducer,
    userLogin: loginReducer,
    carsCollections: getAllCarsReducer
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