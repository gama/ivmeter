import { initialState } from './store'
import { actionTypes }  from './actions'

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.TICK:
        return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light })
    case actionTypes.INCREMENT:
        return Object.assign({}, state, { count: state.count + 1 })
    case actionTypes.DECREMENT:
        return Object.assign({}, state, { count: state.count - 1 })
    case actionTypes.RESET:
        return Object.assign({}, state, { count: initialState.count })

    // BACKEND FETCH
    case actionTypes.FETCHING:
        return Object.assign({}, state, { fetching: true })
    case actionTypes.FETCH_ERROR:
        return Object.assign({}, state, { fetching: false, error: action.error })

    // AUTH
    case actionTypes.LOGIN:
        return Object.assign({}, state, { fetching: false, authToken: action.authToken })
    case actionTypes.LOGOUT:
        return Object.assign({}, state, { fetching: false, authToken: null })

    default: return state
    }
}

export default reducer