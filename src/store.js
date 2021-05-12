import { configureStore } from "@reduxjs/toolkit";
import ticketReducers from "../src/pages/ticketList.page/ticketsSlice";
import loginReducer from "../src/components/login/loginSlice";
import userReducer from "../src/pages/dashboard.page/userSlice";
import newTicketReducer from "../src/components/addTicketForm/addTicketSlice";
const store = configureStore({
  reducer: {
    tickets: ticketReducers,
    login: loginReducer,
    user: userReducer,
    addNewTicket: newTicketReducer,
  },
});

export default store;
