import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    resetPasswordPending: (state) => {
      state.isLoading = true;
    },
    resetPasswordSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    resetPasswordFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
  },
});

const { reducer, actions } = resetPasswordSlice;

export const { resetPasswordPending, resetPasswordSuccess, resetPasswordFail } =
  actions;
export default reducer;
