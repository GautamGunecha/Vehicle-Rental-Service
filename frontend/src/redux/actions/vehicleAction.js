import server from "../../apis/server";
import * as actionTypes from '../constants/vehicleConstant'

export const getAllVehicles = () => async (dispatch, getState) =>
{
    dispatch({ type: actionTypes.LOADING, payload: true })
    try
    {
        const response = await server.get('/vehicle')
        dispatch({
            type: actionTypes.GET_ALL_VEHICLE_SUCCESS,
            payload: response.data
        })
        dispatch({
            type: actionTypes.LOADING,
            payload: false
        })
    } catch (error)
    {
        dispatch({
            type: actionTypes.LOADING,
            payload: false
        })
    }
}