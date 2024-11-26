import { configureStore } from '@reduxjs/toolkit'
import { mainApiSlice } from './api/mainApiSlice'

export const store = configureStore({
  reducer: {
    [mainApiSlice.reducerPath]: mainApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(mainApiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch