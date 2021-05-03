import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";
import { fetUserProfile } from "../../api/userLoginAPI";
export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());
    const userProfile = await fetUserProfile();
    if (userProfile.user && userProfile.user._id) {
      return dispatch(getUserSuccess(userProfile.user));
    }
    dispatch(getUserFail("User is not found"));
  } catch (error) {
    console.log(error);
    dispatch(getUserFail());
  }
};
