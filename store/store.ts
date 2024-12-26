import { authorizeApiSlice } from './api/authorizeApiSlice';
import { mainApiSlice } from './api/mainApiSlice';
import CategoriesSliceReducer from './slices/CategoriesSlice';
import userAuthReducer from './slices/userSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        userAuth: userAuthReducer,
        categoriesSlice: CategoriesSliceReducer,
        [mainApiSlice.reducerPath]: mainApiSlice.reducer,
        [authorizeApiSlice.reducerPath]: authorizeApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApiSlice.middleware).concat(authorizeApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
