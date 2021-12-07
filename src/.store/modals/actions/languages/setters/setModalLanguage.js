import Update from 'immutability-helper'

export const SET_MODAL_LANGUAGE = new String('SET_MODAL_LANGUAGE')

export const SetModalLanguage = data => ({
  type: SET_MODAL_LANGUAGE,
  payload: data,
})

export const MutateModalLanguage = (state, data) =>
  Update(state, {
    language: { $set: data },
  })
