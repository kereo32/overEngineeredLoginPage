import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  userInformation: {
    username: string;
    email: string;
  } | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  userInformation: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess(state: UserState, action: PayloadAction<UserState['userInformation']>) {
      state.isAuthenticated = true;
      state.userInformation = action.payload;
    },
    logout(state: UserState) {
      state.isAuthenticated = false;
      state.userInformation = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
