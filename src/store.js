import { configureStore } from "@reduxjs/toolkit";
import ticketReducers from "../src/pages/ticketList.page/ticketsSlice";
import loginReducer from "../src/components/login/loginSlice";
const store = configureStore({
  reducer: {
    tickets: ticketReducers,
    login: loginReducer,
  },
});

export default store;
