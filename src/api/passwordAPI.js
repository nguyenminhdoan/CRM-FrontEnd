import axios from "axios";

export const reqPasswordOtp = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/v1/user/reset-password",
        { email }
      );
      resolve(data);
    } catch (error) {
      reject({
        status: "error",
        message: error.message,
      });
    }
  });
};
