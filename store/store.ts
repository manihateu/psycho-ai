import { configureStore } from '@reduxjs/toolkit'
import { mainApiSlice } from './api/mainApiSlice'
import { chatGPTApiSlice } from './api/chatGPTApiSlice'

export const store = configureStore({
  reducer: {
    [mainApiSlice.reducerPath]: mainApiSlice.reducer,
    [chatGPTApiSlice.reducerPath]: chatGPTApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(mainApiSlice.middleware).concat(chatGPTApiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch