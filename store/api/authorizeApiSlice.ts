import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const TOKEN = ""

export const authorizeApiSlice = createApi({
  reducerPath: 'authorizeApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL, headers: {Authorization: `Bearer ${TOKEN}`} }),
  endpoints: (builder) => ({
      getCategories: builder.query({
        query: () => ({url: '/categories'})
      })
  }),
})

export const { useGetCategoriesQuery } = authorizeApiSlice