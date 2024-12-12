import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type TRegisterBody = { 
  name: string,
  email: string,
  password: string
}

export type TLoginBody = {
  email: string,
  password: string
}

type TAuthResponse = {
  refreshToken: string,
  accessToken: string
}
console.log('123')
export const mainApiSlice = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  // baseQuery: fetchBaseQuery({ baseUrl: "https://psycho-ai-backend.onrender.com" }),
  endpoints: (builder) => ({
      register: builder.mutation<TAuthResponse, TRegisterBody>({
        query: body => ({
          url: "/auth/register",
          body,
          method: "POST"
        })
      }),
      login : builder.mutation<TAuthResponse, TLoginBody>({
        query: body => ({
          url: "/auth/login",
          body,
          method: "POST"
        })
      }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = mainApiSlice