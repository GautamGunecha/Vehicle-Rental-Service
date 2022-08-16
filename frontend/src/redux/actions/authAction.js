import * as actionTypes from '../constants/authConstant'

export const loginAction = (data) => async (dispatch) =>
{
    dispatch({
        type: actionTypes.LOADING,
        payload: true
    })

    try
    {
        dispatch({
            type: actionTypes.USER_LOGIN,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
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

export const userLogout = () => async (dispatch) =>
{
    try
    {
        dispatch({
            type: actionTypes.LOADING,
            payload: true
        })

        dispatch({
            type: actionTypes.USER_LOGOUT,
            payload: []
        })

        localStorage.removeItem('userInfo')

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