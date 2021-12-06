import { combineReducers } from 'redux'

import main from './main/reducer'
import user from './user/reducer'
import modals from './modals/reducer'
export default combineReducers({
  main,
  user,
  modals
})
