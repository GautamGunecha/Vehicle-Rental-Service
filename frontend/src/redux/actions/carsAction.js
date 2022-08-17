import * as actionTypes from '../constants/carConstant'
import server from '../../apis/server'

export const getAllCarsAction = () => async (dispatch) =>
{
    dispatch({
        type: actionTypes.LOADING,
        payload: true
    })

    const response = await server.get('/vehicle/getallcars')

    dispatch({
        type: actionTypes.FETCH_ALL_CARS,
        payload: response.data
    })

    dispatch({
        type: actionTypes.LOADING,
        payload: true
    })
    try
    {
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