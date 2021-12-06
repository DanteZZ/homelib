import Update from 'immutability-helper'

export const SET_MODAL_COVER = new String('SET_MODAL_COVER')

export const SetModalCover = data => ({
  type: SET_MODAL_COVER,
  payload: data,
})

export const MutateModalCover = (state, data) =>
  Update(state, {
    cover: { $set: data },
  })
