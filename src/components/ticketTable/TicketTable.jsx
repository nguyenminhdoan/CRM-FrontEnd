import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function TicketTable() {
  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {searchTicketList.length > 0 ? (
          searchTicketList.map((ticket) => {
            return (
              <tr key={ticket._id}>
                <td>{ticket._id}</td>

                <td>
                  <Link to={`/ticket/${ticket._id}`}>{ticket.subject}</Link>
                </td>
                <td>{ticket.status}</td>
                <td>
                  {ticket.openAt && new Date(ticket.openAt).toLocaleString()}
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td className="text-center" colSpan="4">
              No Tickets To Show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default TicketTable;
