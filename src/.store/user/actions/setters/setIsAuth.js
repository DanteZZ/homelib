import Update from 'immutability-helper'

export const SET_IS_AUTH = new String('SET_IS_AUTH')

export const SetIsAuth = data => ({
  type: SET_IS_AUTH,
  payload: data,
})

export const MutateIsAuth = (state, data) =>
  Update(state, {
    isAuth: { $set: data },
  })
