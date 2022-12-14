import * as actionType from '../constants/authConstant'

const initialData = {
    loading: false
}

export const alertReducer = (state = initialData, action) =>
{
    if (action.type === actionType.LOADING)
        return { ...state, loading: action.payload }
    return state
}