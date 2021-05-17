import { signUpPending, signUpSuccess, signUpFail } from "./signUpSlice";
import { createSignUp } from "../../api/userLoginAPI";

export const signUpNewUser = (formData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(signUpPending());
      // call API
      const result = await createSignUp(formData);
      // console.log(result);
      if (result.status === "success") {
        dispatch(signUpSuccess(result.message));
      } else {
        dispatch(signUpFail(result.message));
      }
    } catch (error) {
      console.log(error);
      dispatch(signUpFail(error.message));
    }
  });
};
