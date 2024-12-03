import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

async function getToken() {
  return await AsyncStorage.getItem("x-token-access");
}

export const authorizeApiSlice = createApi({
  reducerPath: 'authorizeApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.API_URL,
    baseUrl: "https://psycho-ai-backend.onrender.com",
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
    })
  }),
});

export const { useGetCategoriesQuery, useGetUserQuery } = authorizeApiSlice;
