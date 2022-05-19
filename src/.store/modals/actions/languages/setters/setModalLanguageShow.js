import Update from 'immutability-helper'

export const SET_MODAL_LANGUAGE_SHOW = new String('SET_MODAL_LANGUAGE_SHOW')

export const SetModalLanguageShow = data => ({
  type: SET_MODAL_LANGUAGE_SHOW,
  payload: data,
})

export const MutateModalLanguageShow = (state, data) =>
  Update(state, {
    language: { open: { $set: data } },
  })
