import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
  searchTicket,
  replyTicketLoading,
  replyTicketSuccess,
  replyTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  closeTicketFail,
} from "./ticketsSlice";

import {
  getSingleTicket,
  getAllTicket,
  updateReplyTicket,
  updateCloseTicket,
} from "../../api/ticketAPI";

export const fetchAllTicket = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    // fetch data from API
    const result = await getAllTicket();
    // console.log(result);
    result.data.result.length &&
      dispatch(fetchTicketSuccess(result.data.result));

    dispatch(filterSearchTicket());
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const fetchSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());
  try {
    // fetch data from API
    const result = await getSingleTicket(_id);
    console.log(result);
    dispatch(
      fetchSingleTicketSuccess(result.data.result && result.data.result[0])
    );
  } catch (error) {
    dispatch(fetchSingleTicketFail(error.message));
  }
};

// actions for replying on single ticket
export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
  dispatch(replyTicketLoading());
  try {
    // fetch data from API
    const result = await updateReplyTicket(_id, msgObj);
    console.log(result.data.status);
    if (result.data.status === "error") {
      return dispatch(replyTicketFail(result.data.message));
    }
    dispatch(replyTicketSuccess(result.data.message));
    dispatch(fetchSingleTicket(_id));
  } catch (error) {
    dispatch(replyTicketFail(error.message));
  }
};

export const closeTicket = (_id) => async (dispatch) => {
  dispatch(closeTicketLoading());
  try {
    // fetch data from API
    const result = await updateCloseTicket(_id);
    console.log(result);
    if (result.data.status === "error") {
      return dispatch(closeTicketFail(result.data.message));
    }
    dispatch(closeTicketSuccess(result.data.message));
    dispatch(fetchSingleTicket(_id));
  } catch (error) {
    dispatch(closeTicketFail(error.message));
  }
};

export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTicket(str));
};
