import { createSlice } from '@reduxjs/toolkit'

const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState: {
    selectCategories: false
  },
  reducers: {
    select(state) {
      state.selectCategories = true
    },
  },
})

export const { select } = categoriesSlice.actions
export default categoriesSlice.reducer