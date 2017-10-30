import { FETCH_USER_SUCCESS } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      console.log(action.payload)
      return state
    default:
      return state
  }
}