import Update from 'immutability-helper'

export const SET_BOOK_LIST = new String('SET_BOOK_LIST')

export const SetBookList = data => ({
  type: SET_BOOK_LIST,
  payload: data,
})

export const MutateBookList = (state, data) =>
  Update(state, {
    books: { $set: data },
  })
