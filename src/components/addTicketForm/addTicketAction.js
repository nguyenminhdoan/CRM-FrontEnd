import {
  addNewTicketPending,
  addNewTicketSuccess,
  addNewTicketFail,
} from "./addTicketSlice";

import { addNewTicket } from "../../api/ticketAPI";

export const addNewTicketAction = (formData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(addNewTicketPending());

      //call api
      const result = await addNewTicket(formData);
      console.log(result.data);
      if (result.data.status === "error") {
        return dispatch(addNewTicketFail(result.data.message));
      }
      dispatch(addNewTicketSuccess(result.data.message));
    } catch (error) {
      console.log(error);
      dispatch(addNewTicketFail(error.message));
    }
  });
};
