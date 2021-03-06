import React from "react";
import "../style/styleMsgHistory.css";
function MessageHistory(props) {
  const { ticketHistory } = props;
  if (!ticketHistory) return null;

  return (
    <div>
      {ticketHistory
        ? ticketHistory.map((ticket, i) => (
            <div key={i} className="message-history mt-3 mb-4">
              <div className="send font-weight-bolder text-secondary">
                <div className="sender">{ticket.sender}</div>
                <div className="date">
                  {ticket.msAt && new Date(ticket.msAt).toLocaleString()}
                </div>
              </div>
              <div className="message-box mt-4">{ticket.message}</div>
            </div>
          ))
        : null}
    </div>
  );
}

export default MessageHistory;
