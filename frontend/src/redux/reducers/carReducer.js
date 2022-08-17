import * as actionTypes from '../constants/carConstant'

const initialState = {
    cars: []
}

export const getAllCarsReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case actionTypes.FETCH_ALL_CARS:
            return { ...state, cars: action.payload }

        default:
            return state
    }
}
