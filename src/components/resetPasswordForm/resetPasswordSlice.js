import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  showUpdatePassForm: false,
  email: "",
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
      state.message = payload.message;
      state.email = payload.email;
      state.showUpdatePassForm = true;
    },
    updatePassSuccess: (state, { payload }) => {
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

export const {
  resetPasswordPending,
  resetPasswordSuccess,
  resetPasswordFail,
  updatePassSuccess,
} = actions;
export default reducer;
