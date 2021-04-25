import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTicket,
} from "./ticketsSlice";

import getAllTicket from "../../api/ticketAPI";
export const fetchAllTicket = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    // fetch data from API
    const result = await getAllTicket();
    // console.log(result);
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTicket(str));
};
