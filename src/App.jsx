import "./App.css";
import Entry from "./pages/entry.page/Entry";
import DefaultLayout from "./components/layouts/DefaultLayout";
import AddTicket from "./pages/addTicket.page/AddTicket";
import Dashboard from "./pages/dashboard.page/Dashboard";
import TicketHistory from "./pages/ticketHistory.page/TicketHistory";
import TicketList from "./pages/ticketList.page/TicketList";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketList /> */}
        <TicketHistory />
      </DefaultLayout>
    </div>
  );
}

export default App;
