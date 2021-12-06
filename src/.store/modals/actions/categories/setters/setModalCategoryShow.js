import Update from 'immutability-helper'

export const SET_MODAL_CATEGORY_SHOW = new String('SET_MODAL_CATEGORY_SHOW')

export const SetModalCategoryShow = data => ({
  type: SET_MODAL_CATEGORY_SHOW,
  payload: data,
})

export const MutateModalCategoryShow = (state, data) =>
  Update(state, {
    category: { open: { $set: data } },
  })
