import Update from 'immutability-helper'

export const SET_USER = new String('SET_USER')

export const SetUser = data => ({
  type: SET_USER,
  payload: data,
})

export const MutateUser = (state, data) =>
  Update(state, {
    info: { $set: data },
  })
