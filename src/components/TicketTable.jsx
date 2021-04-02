import React from "react";
import { Table } from "react-bootstrap";

function TicketTable(props) {
  const { dataTicket } = props;
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
        {dataTicket.length > 0 ? (
          dataTicket.map((ticket) => {
            return (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.status}</td>
                <td>{ticket.addedAt}</td>
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
