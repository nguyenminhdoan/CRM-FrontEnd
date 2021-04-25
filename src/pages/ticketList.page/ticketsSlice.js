import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  searchTicketList: [],
};

// CREATE ACTION CREATOR
const ticketListSlice = createSlice({
  name: "ticketList",
  initialState: initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.tickets = action.payload;
    },
    fetchTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    searchTicket: (state, action) => {
      state.searchTicketList = state.tickets.filter((ticket) => {
        if (!action.payload) return ticket;
        return ticket.subject
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
  },
});

const { reducer, actions } = ticketListSlice;
export const {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTicket,
} = actions;

export default reducer;
