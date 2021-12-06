import Update from 'immutability-helper'

export const SET_COVER_LIST = new String('SET_COVER_LIST')

export const SetCoverList = data => ({
  type: SET_COVER_LIST,
  payload: data,
})

export const MutateCoverList = (state, data) =>
  Update(state, {
    covers: { $set: data },
  })
