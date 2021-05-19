import { configureStore } from "@reduxjs/toolkit";
import ticketReducers from "../src/pages/ticketList.page/ticketsSlice";
import loginReducer from "../src/components/login/loginSlice";
import userReducer from "../src/pages/dashboard.page/userSlice";
import newTicketReducer from "../src/components/addTicketForm/addTicketSlice";
import signUpReducer from "../src/components/signUpForm/signUpSlice";
import resetPasswordReducer from "../src/components/resetPasswordForm/resetPasswordSlice";
const store = configureStore({
  reducer: {
    tickets: ticketReducers,
    login: loginReducer,
    user: userReducer,
    addNewTicket: newTicketReducer,
    signUpUser: signUpReducer,
    resetPassword: resetPasswordReducer,
  },
});

export default store;
