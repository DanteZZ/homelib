import Update from 'immutability-helper'

export const SET_CATEGORY_LIST = new String('SET_CATEGORY_LIST')

export const SetCategoryList = data => ({
  type: SET_CATEGORY_LIST,
  payload: data,
})

export const MutateCategoryList = (state, data) =>
  Update(state, {
    categories: { $set: data },
  })
