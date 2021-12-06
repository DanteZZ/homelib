import Update from 'immutability-helper'

export const SET_MODAL_BOOK = new String('SET_MODAL_BOOK')

export const SetModalBook = data => ({
  type: SET_MODAL_BOOK,
  payload: data,
})

export const MutateModalBook = (state, data) =>
  Update(state, {
    book: { $set: data },
  })
