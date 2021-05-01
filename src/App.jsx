import "./App.css";
import Entry from "./pages/entry.page/Entry";
import AddTicket from "./pages/addTicket.page/AddTicket";
import Dashboard from "./pages/dashboard.page/Dashboard";
import TicketHistory from "./pages/ticketHistory.page/TicketHistory";
import TicketList from "./pages/ticketList.page/TicketList";

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

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/add-ticket">
            <AddTicket />
          </PrivateRoute>

          <PrivateRoute path="/tickets">
            <TicketList />
          </PrivateRoute>

          <PrivateRoute path="/ticket/:tId">
            <TicketHistory />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
