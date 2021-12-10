import Update from 'immutability-helper'

export const SET_OFFCANVAS = new String('SET_OFFCANVAS')

export const SetOffcanvas = data => ({
  type: SET_OFFCANVAS,
  payload: data,
})

export const MutateOffcanvas = (state, data) =>
  Update(state, {
    offcanvas: { $set: data },
  })
