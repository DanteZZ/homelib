import Update from 'immutability-helper'

export const SET_MODAL_CATEGORY = new String('SET_MODAL_CATEGORY')

export const SetModalCategory = data => ({
  type: SET_MODAL_CATEGORY,
  payload: data,
})

export const MutateModalCategory = (state, data) =>
  Update(state, {
    category: { $set: data },
  })
