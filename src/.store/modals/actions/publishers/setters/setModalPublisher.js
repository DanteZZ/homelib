import Update from 'immutability-helper'

export const SET_MODAL_PUBLISHER = new String('SET_MODAL_PUBLISHER')

export const SetModalPublisher = data => ({
  type: SET_MODAL_PUBLISHER,
  payload: data,
})

export const MutateModalPublisher = (state, data) =>
  Update(state, {
    publisher: { $set: data },
  })
