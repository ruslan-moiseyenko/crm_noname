import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  phone: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    removeUser(state) {
      state.email = null;
      state.phone = null;
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
