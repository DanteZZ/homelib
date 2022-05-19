import Update from 'immutability-helper'

export const SET_MODAL_EXTERNAL = new String('SET_MODAL_EXTERNAL')

export const SetModalExternal = data => ({
  type: SET_MODAL_EXTERNAL,
  payload: data,
})

export const MutateModalExternal = (state, data) =>
  Update(state, {
    external: { $set: data },
  })
