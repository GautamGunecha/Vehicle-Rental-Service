import * as actionTypes from '../constants/authConstant'

export const loginReducer = (state = {}, action) =>
{
    if (action.type === actionTypes.USER_LOGIN)
        return { userInfo: action.payload }
    return state
}