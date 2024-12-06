import { configureStore } from '@reduxjs/toolkit'
import { mainApiSlice } from './api/mainApiSlice'
import { authorizeApiSlice } from './api/authorizeApiSlice'
import userAuthReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    [mainApiSlice.reducerPath]: mainApiSlice.reducer,
    [authorizeApiSlice.reducerPath]: authorizeApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(mainApiSlice.middleware).concat(authorizeApiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch