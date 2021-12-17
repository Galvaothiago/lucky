export const initialState = {
    user: null
}

export const actionTypes = {
    SET_USER: 'USER_USER',
    LOGOUT_USER: 'LOUGOUT_USER'
}

const reducer = (state, action) => {
    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }

        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                user: null
            }

        default:
            return state  
    }
}

export default reducer