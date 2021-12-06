import DefaultState from './defaultState'

import { SET_MODAL_BOOK, MutateModalBook } from './actions/setters/setModalBook'
import { SET_MODAL_BOOK_SHOW, MutateModalBookShow } from './actions/setters/setModalBookShow'

export default function Reducer(state = DefaultState, { type, payload }) {
    switch (type) {
        case SET_MODAL_BOOK:
            return MutateModalBook(state, payload);
        case SET_MODAL_BOOK_SHOW:
            return MutateModalBookShow(state, payload);
        default:
            return state
  }
}