import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  replyTicketError: "",
  searchTicketList: [],
  selectedTicket: {},
  msgStatusReply: "",
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

    // FETCH single ticket
    fetchSingleTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.selectedTicket = action.payload;
      state.error = "";
    },
    fetchSingleTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //  SINGLE TICKET REPLY
    replyTicketLoading: (state) => {
      state.isLoading = true;
    },
    replyTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.replyTicketError = "";
      state.msgStatusReply = action.payload;
    },
    replyTicketFail: (state, action) => {
      state.isLoading = false;
      state.replyTicketError = action.payload;
    },

    // CLOSE TICKET
    closeTicketLoading: (state) => {
      state.isLoading = true;
    },
    closeTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.msgStatusReply = action.payload;
    },
    closeTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    refreshMsg: (state) => {
      state.isLoading = false;
      state.error = "";
      state.msgStatusReply = "";
      state.replyTicketError = "";
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
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  replyTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  closeTicketFail,
  refreshMsg,

  searchTicket,
} = actions;

export default reducer;
