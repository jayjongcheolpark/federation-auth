import { FETCH_USER_SUCCESS } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {...state, user: action.payload.data}
    default:
      return state
  }
}