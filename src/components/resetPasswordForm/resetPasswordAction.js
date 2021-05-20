import {
  resetPasswordPending,
  resetPasswordSuccess,
  resetPasswordFail,
  updatePassSuccess,
} from "./resetPasswordSlice";

import { reqPasswordOtp, updateUserPassword } from "../../api/passwordAPI";

export const sendReqOtp = (email) => async (dispatch) => {
  try {
    dispatch(resetPasswordPending());
    const { status, message } = await reqPasswordOtp(email);
    if (status === "success") {
      dispatch(resetPasswordSuccess({ message, email }));
    } else {
      dispatch(resetPasswordFail(message));
    }
  } catch (error) {
    console.log(error);
    dispatch(resetPasswordFail(error.message));
  }
};

export const updatePassword = (frmData) => async (dispatch) => {
  try {
    dispatch(resetPasswordPending());

    const { status, message } = await updateUserPassword(frmData);

    if (status === "success") {
      return dispatch(updatePassSuccess(message));
    }

    dispatch(resetPasswordFail(message));
  } catch (error) {
    dispatch(resetPasswordFail(error.message));
  }
};
