import {combineReducers} from "redux"
import catalogReducer from '../features/catalogs/catalog.slice'


export const rootReducer = combineReducers({
  // reducers
  catalog: catalogReducer
})