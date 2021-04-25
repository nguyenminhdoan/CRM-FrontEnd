import { configureStore } from "@reduxjs/toolkit";
import ticketReducers from "../src/pages/ticketList.page/ticketsSlice";
const store = configureStore({
  reducer: {
    tickets: ticketReducers,
  },
});

export default store;
