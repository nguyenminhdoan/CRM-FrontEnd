import "./App.css";
import Entry from "./pages/entry.page/Entry";
import AddTicket from "./pages/addTicket.page/AddTicket";
import Dashboard from "./pages/dashboard.page/Dashboard";
import TicketHistory from "./pages/ticketHistory.page/TicketHistory";
import TicketList from "./pages/ticketList.page/TicketList";
import SingUp from "./pages/signUp.page/SignUp";
import Verify from "./pages/verify.page/Verify";
import ResetPasswordPage from "./pages/resetPassword.page/ResetPasswordPage";

// ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>

          <Route exact path="/reset-password">
            <ResetPasswordPage />
          </Route>

          <Route exact path="/signup">
            <SingUp />
          </Route>

          <Route exact path="/verification/:_id/:email">
            <Verify />
          </Route>

          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute exact path="/add-ticket">
            <AddTicket />
          </PrivateRoute>

          <PrivateRoute exact path="/tickets">
            <TicketList />
          </PrivateRoute>

          <PrivateRoute exact path="/ticket/:tId">
            <TicketHistory />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
