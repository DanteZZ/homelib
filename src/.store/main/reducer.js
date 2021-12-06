import DefaultState from './defaultState'

import { SET_LOADED, MutateLoaded } from './actions/setters/setLoaded'

import { SET_BOOK_LIST, MutateBookList } from './actions/books/setters/setBookList'
import { SET_PUBLISHER_LIST, MutatePublisherList } from './actions/publishers/setters/setPublisherList'
import { SET_LANGUAGE_LIST, MutateLanguageList } from './actions/languages/setters/setLanguageList'
import { SET_CATEGORY_LIST, MutateCategoryList } from './actions/categories/setters/setCategoryList'
import { SET_COVER_LIST, MutateCoverList } from './actions/covers/setters/setCoverList'

export default function Reducer(state = DefaultState, { type, payload }) {
    switch (type) {
        case SET_LOADED:
            return MutateLoaded(state, payload)
        case SET_BOOK_LIST:
            return MutateBookList(state, payload)
        case SET_PUBLISHER_LIST:
            return MutatePublisherList(state, payload)
        case SET_LANGUAGE_LIST:
            return MutateLanguageList(state, payload)
        case SET_CATEGORY_LIST:
            return MutateCategoryList(state, payload)
        case SET_COVER_LIST:
            return MutateCoverList(state, payload)
        default:
            return state
  }
}