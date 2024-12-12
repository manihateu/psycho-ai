import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

async function getToken() {
  return await AsyncStorage.getItem("x-token-access");
}

type TSendBotRequest = {
  message: string,
}
type TSendbotResponse = {
  model: string,
  response: string,
  created_at: string
}

export const authorizeApiSlice = createApi({
  reducerPath: 'authorizeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
    // baseUrl: "https://psycho-ai-backend.onrender.com",
    prepareHeaders: async (headers) => {
      const token = await getToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({ url: '/categories' }),
    }),
    getUser: builder.query({
        query: () => ({ url: "/users/user"})
    }),
    sendBotMessage: builder.mutation <TSendbotResponse, TSendBotRequest> ({
        query: data => ({
          url: "/bot/send",
          method: "POST",
          data
        })
    })
  }),
});

export const { useGetCategoriesQuery, useGetUserQuery, useSendBotMessageMutation } = authorizeApiSlice;
