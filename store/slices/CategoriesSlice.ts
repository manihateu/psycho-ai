import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: 'categoriesSlice',
    initialState: {
        selectCategories: false,
    },
    reducers: {
        select(state) {
            state.selectCategories = true;
        },
        deselect(state) {
            state.selectCategories = false;
        }
    },
});

export const { select, deselect } = categoriesSlice.actions;
export default categoriesSlice.reducer;
