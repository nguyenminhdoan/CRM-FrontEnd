import React from "react";
import "./style/styleMsgHistory.css";
function MessageHistory(props) {
  const { ticketHistory } = props;

  return (
    <div>
      {ticketHistory
        ? ticketHistory.map((ticket, i) => (
            <div key={i} className="message-history mt-3 mb-4">
              <div className="send font-weight-bolder text-secondary">
                <div className="sender">{ticket.messageBy}</div>
                <div className="date">{ticket.date}</div>
              </div>
              <div className="message-box mt-4">{ticket.message}</div>
            </div>
          ))
        : null}
    </div>
  );
}

export default MessageHistory;