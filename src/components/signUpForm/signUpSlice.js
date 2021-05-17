import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialState,
  reducers: {
    signUpPending: (state) => {
      state.isLoading = true;
    },
    signUpSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    signUpFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
  },
});

const { reducer, actions } = signUpSlice;
export const { signUpPending, signUpSuccess, signUpFail } = actions;

export default reducer;
