import Update from 'immutability-helper'

export const SET_MODAL_PUBLISHER_SHOW = new String('SET_MODAL_PUBLISHER_SHOW')

export const SetModalPublisherShow = data => ({
  type: SET_MODAL_PUBLISHER_SHOW,
  payload: data,
})

export const MutateModalPublisherShow = (state, data) =>
  Update(state, {
    publisher: { open: { $set: data } },
  })
