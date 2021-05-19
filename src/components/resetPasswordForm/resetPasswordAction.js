import {
  resetPasswordPending,
  resetPasswordSuccess,
  resetPasswordFail,
} from "./resetPasswordSlice";

import { reqPasswordOtp } from "../../api/passwordAPI";

export const sendReqOtp = (email) => async (dispatch) => {
  try {
    dispatch(resetPasswordPending());
    const { status, message } = await reqPasswordOtp(email);
    if (status === "success") {
      dispatch(resetPasswordSuccess(message));
    } else {
      dispatch(resetPasswordFail(message));
    }
  } catch (error) {
    console.log(error);
    dispatch(resetPasswordFail(error.message));
  }
};
