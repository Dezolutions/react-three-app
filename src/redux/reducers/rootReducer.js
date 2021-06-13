import {combineReducers} from 'redux'
import meshReducer from './meshReducer'
import newMeshReducer from './newMeshReducer'
const rootReducer = combineReducers({
  meshReducer,
  newMeshReducer
})

export default rootReducer;