import Update from 'immutability-helper'

export const SET_LANGUAGE_LIST = new String('SET_LANGUAGE_LIST')

export const SetLanguageList = data => ({
  type: SET_LANGUAGE_LIST,
  payload: data,
})

export const MutateLanguageList = (state, data) =>
  Update(state, {
    languages: { $set: data },
  })
