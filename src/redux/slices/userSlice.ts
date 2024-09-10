import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type User = {
  name: string;
};

type State = {
  isLoggedIn: boolean;
  data: User | null;
};

const initState: State = {
  isLoggedIn: false,
  data: null,
};

const userSlice = createSlice({
  initialState: initState,
  name: "user",
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      state.data = { name: "test" };
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { login } = userSlice.actions;

export default userSlice.reducer;
