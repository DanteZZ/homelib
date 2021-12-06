import DefaultState from './defaultState'

import { SET_MODAL_BOOK, MutateModalBook } from './actions/books/setters/setModalBook'
import { SET_MODAL_BOOK_SHOW, MutateModalBookShow } from './actions/books/setters/setModalBookShow'

import { SET_MODAL_CATEGORY, MutateModalCategory } from './actions/categories/setters/setModalCategory'
import { SET_MODAL_CATEGORY_SHOW, MutateModalCategoryShow } from './actions/categories/setters/setModalCategoryShow'

import { SET_MODAL_COVER, MutateModalCover } from './actions/covers/setters/setModalCover'
import { SET_MODAL_COVER_SHOW, MutateModalCoverShow } from './actions/covers/setters/setModalCoverShow'

export default function Reducer(state = DefaultState, { type, payload }) {
    switch (type) {
        case SET_MODAL_BOOK:
            return MutateModalBook(state, payload);
        case SET_MODAL_BOOK_SHOW:
            return MutateModalBookShow(state, payload);

        case SET_MODAL_CATEGORY:
            return MutateModalCategory(state, payload);
        case SET_MODAL_CATEGORY_SHOW:
            return MutateModalCategoryShow(state, payload);

        case SET_MODAL_COVER:
            return MutateModalCover(state, payload);
        case SET_MODAL_COVER_SHOW:
            return MutateModalCoverShow(state, payload);
        default:
            return state
  }
}