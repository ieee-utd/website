import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  router: routerReducer,
  loadingBar: loadingBarReducer
})