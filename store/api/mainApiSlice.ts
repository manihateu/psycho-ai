import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mainApiSlice = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    
  }),
})

export const { } = mainApiSlice