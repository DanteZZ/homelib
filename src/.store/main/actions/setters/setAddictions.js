import Update from 'immutability-helper'

export const SET_ADDICTIONS = new String('SET_ADDICTIONS')

export const SetAddictions = data => ({
  type: SET_ADDICTIONS,
  payload: data,
})

export const MutateAddictions = (state, data) =>
  Update(state, {
    addictions: { $set: data },
  })
