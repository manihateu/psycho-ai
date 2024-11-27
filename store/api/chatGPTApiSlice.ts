import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const chatGPTApiSlice = createApi({
  reducerPath: 'chatGPT',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://10.0.2.2:11434/api',
  }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
        query: (message) => ({
            url: '/generate',
            method: 'POST',
            body: {
              model: "llama3.2",
              prompt: message,
              stream: false
            },
          }),
    })
  }),
})

export const { useSendMessageMutation } = chatGPTApiSlice