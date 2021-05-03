import { configureStore } from "@reduxjs/toolkit";
import ticketReducers from "../src/pages/ticketList.page/ticketsSlice";
import loginReducer from "../src/components/login/loginSlice";
import userReducer from "../src/pages/dashboard.page/userSlice";
const store = configureStore({
  reducer: {
    tickets: ticketReducers,
    login: loginReducer,
    user: userReducer,
  },
});

export default store;
