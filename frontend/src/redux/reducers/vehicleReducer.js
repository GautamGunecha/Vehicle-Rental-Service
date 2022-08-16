import * as actionType from '../constants/vehicleConstant'

const initialState = { cars: [] }

export const carsReducer = (state = initialState, action) =>
{
    if (action.type === actionType.GET_ALL_VEHICLE_SUCCESS)
        return [...state, state.cars = action.payload]
    return state
}