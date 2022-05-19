import Update from 'immutability-helper'

export const SET_MODAL_COVER_SHOW = new String('SET_MODAL_COVER_SHOW')

export const SetModalCoverShow = data => ({
  type: SET_MODAL_COVER_SHOW,
  payload: data,
})

export const MutateModalCoverShow = (state, data) =>
  Update(state, {
    cover: { open: { $set: data } },
  })
