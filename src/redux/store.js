import { createStore } from 'redux'
import meshReducer from './reducers/meshReducer'

const store = createStore(meshReducer)

export default store;