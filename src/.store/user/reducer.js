import DefaultState from './defaultState'

import { SET_USER, MutateUser } from './actions/setters/setUser'
import { SET_IS_AUTH, MutateIsAuth } from './actions/setters/setIsAuth'

export default function Reducer(state = DefaultState, { type, payload }) {
    switch (type) {
        case SET_USER:
            return MutateUser(state, payload);
        case SET_IS_AUTH:
            return MutateIsAuth(state, payload);
        default:
            return state
  }
}