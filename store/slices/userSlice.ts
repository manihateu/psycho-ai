import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userAuth',
  initialState: {
    isAuth: false,
    accessToken: ""
  },
  reducers: {
    login(state, action) {
      state.isAuth = true
      state.accessToken = action.payload
    },
    quit(state, action) {
        state.isAuth = false;
        state.accessToken = ""
    },
  },
})

export const { login, quit } = userSlice.actions
export default userSlice.reducer