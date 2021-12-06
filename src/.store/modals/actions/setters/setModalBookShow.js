import Update from 'immutability-helper'

export const SET_MODAL_BOOK_SHOW = new String('SET_MODAL_BOOK_SHOW')

export const SetModalBookShow = data => ({
  type: SET_MODAL_BOOK_SHOW,
  payload: data,
})

export const MutateModalBookShow = (state, data) =>
  Update(state, {
    book: { open: { $set: data } },
  })
