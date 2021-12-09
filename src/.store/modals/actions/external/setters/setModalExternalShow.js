import Update from 'immutability-helper'

export const SET_MODAL_EXTERNAL_SHOW = new String('SET_MODAL_EXTERNAL_SHOW')

export const SetModalExternalShow = data => ({
  type: SET_MODAL_EXTERNAL_SHOW,
  payload: data,
})

export const MutateModalExternalShow = (state, data) =>
  Update(state, {
    external: { open: { $set: data } },
  })
