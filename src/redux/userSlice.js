import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUsers = createAsyncThunk("users/add", async (user) => {
  const response = await axios.post(
    "https://ekart-ca3cf-default-rtdb.firebaseio.com/users.json",
    user
  );

  return response.data;
});

export const showUsers = createAsyncThunk("users/get", async (id = null) => {
  const res = await axios.get(
    "https://ekart-ca3cf-default-rtdb.firebaseio.com/users.json"
  );
  const userList = res.data;
  return userList;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      username: "",
      fullName: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      gender: "",
      active: "",
    },
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [showUsers.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [showUsers.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [showUsers.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [addUsers.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [addUsers.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [addUsers.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

//export const { updateStart, updateSuccess, updateEror } = userSlice.actions;
export default userSlice.reducer;
