import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TStore} from "../../store";
import {Items} from "./components/list";


type TSliceState = {
  test: string,
  articles: Items | null,
  sections: Items | null
}

const initialState: TSliceState = {
  test: 'test-value',
  articles: null,
  sections: null
}


/*
* Slice
* */
export const CatalogSlice = createSlice({
  name: 'CatalogReducer',

  initialState,

  reducers: {
    changeTestValue: (state: TSliceState, {payload}: PayloadAction<any>) => {
      state.test = payload.test
    }
  }
})



/*
* Selectors
* */
export const testSelector = (state: TStore) => state.catalog.test


/*
* Actions
* */
export const {} = CatalogSlice.actions


/*
* Reducer
* */
export default CatalogSlice.reducer