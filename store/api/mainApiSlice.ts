import AsyncStorage from '@react-native-async-storage/async-storage'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, quit } from '../slices/userSlice'
import { RootState } from '../store'

export type TRegisterBody = { 
  name: string,
  email: string,
  password: string
}

export type TLoginBody = {
  email: string,
  password: string
}

type TRefreshBody = {
  refreshToken: string
}

type TRefreshResponse = {
  accessToken: string
}

type TAuthResponse = {
  refreshToken: string,
  accessToken: string
}

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
      refreshToken : builder.mutation<TRefreshResponse, TRefreshBody>({
        query: body => ({
          url: "/auth/generate-refresh",
          body,
          method: "POST",
        })
      })
  }),
})

export const { useLoginMutation, useRegisterMutation, useRefreshTokenMutation } = mainApiSlice

export const useTokenPolling = () => {
  const [refreshTokenMutation] = useRefreshTokenMutation();
  const dispath = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const isAuth = useSelector((state: RootState) => state.userAuth.isAuth)
  useEffect(() => {
    const refresh = async () => {
      const refreshToken = await AsyncStorage.getItem('x-token-refresh');
      if (!refreshToken) {
        dispath(quit())
        return
      };
      try {
        setIsLoading(true)
        const response = await refreshTokenMutation({ refreshToken }).unwrap();
        const { accessToken } = response;

        await AsyncStorage.setItem('x-token-access', accessToken);
        console.log('Access token refreshed:', accessToken);
        dispath(loginAction(accessToken))
      } catch (error) {
        console.error('Failed to refresh token:', error);
        dispath(quit())
        setIsLoading(false)
      } finally {
        setIsLoading(false)
      }
    }
    refresh()
  }, [])

  useEffect(() => {
    const startPolling = async () => {
      const refreshToken = await AsyncStorage.getItem('x-token-refresh');
      if (!refreshToken) {
        dispath(quit())
        return
      };

      const interval = setInterval(async () => {
        try {
          const response = await refreshTokenMutation({ refreshToken }).unwrap();
          const { accessToken } = response;

          await AsyncStorage.setItem('x-token-access', accessToken);
          console.log('Access token refreshed:', accessToken);
          dispath(loginAction(accessToken))
        } catch (error) {
          console.error('Failed to refresh token:', error);
          dispath(quit())
        }
      }, 14 * 60 * 1000); 

      return () => clearInterval(interval);
    };

    startPolling();
  }, [refreshTokenMutation]);

  return isLoading
};