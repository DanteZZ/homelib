import Update from 'immutability-helper'

export const SET_PUBLISHER_LIST = new String('SET_PUBLISHER_LIST')

export const SetPublisherList = data => ({
  type: SET_PUBLISHER_LIST,
  payload: data,
})

export const MutatePublisherList = (state, data) =>
  Update(state, {
    publishers: { $set: data },
  })
