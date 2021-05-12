import axios from "axios";

const loginURL = "http://localhost:3001/v1/user/login";
const userProfileURL = "http://localhost:3001/v1/user";
const logoutURL = "http://localhost:3001/v1/user/logout";
const newAccessJWT = "http://localhost:3001/v1/tokens";

export const userLogin = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(loginURL, formData);
      resolve(result.data);
      // console.log(result);
      if (result.data.status === "success") {
        sessionStorage.setItem("accessJWT", result.data.accessJWT);
        localStorage.setItem(
          "crmSite",
          JSON.stringify({ refreshJWT: result.data.refreshJWT })
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const fetUserProfile = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) reject("Token not found");
      const result = await axios.get(userProfileURL, {
        headers: {
          Authorization: accessJWT,
        },
      });
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const userLogout = async () => {
  try {
    await axios.delete(logoutURL, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("crmSite"));
      if (!refreshJWT) {
        reject("Token not found");
      }

      const result = await axios.get(newAccessJWT, {
        headers: {
          Authorization: refreshJWT,
        },
      });

      if (result.data.status === "success") {
        sessionStorage.setItem("accessJWT", result.data.accessJWT);
      }
      resolve(true);
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("crmSite");
      }
      console.log(error.message);
      reject(false);
    }
  });
};
