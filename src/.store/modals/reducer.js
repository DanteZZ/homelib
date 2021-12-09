import DefaultState from './defaultState'

import { SET_MODAL_BOOK, MutateModalBook } from './actions/books/setters/setModalBook'
import { SET_MODAL_BOOK_SHOW, MutateModalBookShow } from './actions/books/setters/setModalBookShow'

import { SET_MODAL_CATEGORY, MutateModalCategory } from './actions/categories/setters/setModalCategory'
import { SET_MODAL_CATEGORY_SHOW, MutateModalCategoryShow } from './actions/categories/setters/setModalCategoryShow'

import { SET_MODAL_COVER, MutateModalCover } from './actions/covers/setters/setModalCover'
import { SET_MODAL_COVER_SHOW, MutateModalCoverShow } from './actions/covers/setters/setModalCoverShow'

import { SET_MODAL_PUBLISHER, MutateModalPublisher } from './actions/publishers/setters/setModalPublisher'
import { SET_MODAL_PUBLISHER_SHOW, MutateModalPublisherShow } from './actions/publishers/setters/setModalPublisherShow'

import { SET_MODAL_LANGUAGE, MutateModalLanguage } from './actions/languages/setters/setModalLanguage'
import { SET_MODAL_LANGUAGE_SHOW, MutateModalLanguageShow } from './actions/languages/setters/setModalLanguageShow'

import { SET_MODAL_EXTERNAL, MutateModalExternal } from './actions/external/setters/setModalExternal'
import { SET_MODAL_EXTERNAL_SHOW, MutateModalExternalShow } from './actions/external/setters/setModalExternalShow'

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

        case SET_MODAL_PUBLISHER:
            return MutateModalPublisher(state, payload);
        case SET_MODAL_PUBLISHER_SHOW:
            return MutateModalPublisherShow(state, payload);

        case SET_MODAL_LANGUAGE:
            return MutateModalLanguage(state, payload);
        case SET_MODAL_LANGUAGE_SHOW:
            return MutateModalLanguageShow(state, payload);

        case SET_MODAL_EXTERNAL:
            return MutateModalExternal(state, payload);
        case SET_MODAL_EXTERNAL_SHOW:
            return MutateModalExternalShow(state, payload);

        default:
            return state
  }
}