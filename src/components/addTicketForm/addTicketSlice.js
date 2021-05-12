import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  msgSuccess: "",
};
const newTicketSlice = createSlice({
  name: "newTicket",
  initialState,
  reducers: {
    addNewTicketPending: (state) => {
      state.isLoading = true;
    },
    addNewTicketSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.msgSuccess = payload;
    },
    addNewTicketFail: (state, { payload }) => {
      state.isLoading = true;
      state.error = payload;
    },
    refreshMsg: (state) => {
      state.isLoading = false;
      state.msgSuccess = "";
      state.error = "error";
    },
  },
});

export const {
  addNewTicketPending,
  addNewTicketSuccess,
  addNewTicketFail,
  refreshMsg,
} = newTicketSlice.actions;

export default newTicketSlice.reducer;
