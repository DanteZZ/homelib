import Update from 'immutability-helper'

export const SET_LOADED = new String('SET_LOADED')

export const SetLoaded = data => ({
  type: SET_LOADED,
  payload: data,
})

export const MutateLoaded = (state, data) =>
  Update(state, {
    loaded: { $set: data },
  })
