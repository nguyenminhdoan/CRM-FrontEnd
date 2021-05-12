import axios from "axios";

export const getAllTicket = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const getSingleTicket = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(`http://localhost:3001/v1/ticket/${_id}`, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const updateReplyTicket = (_id, msgObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.put(
        `http://localhost:3001/v1/ticket/${_id}`,
        msgObj,
        {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        }
      );
      resolve(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const updateCloseTicket = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        `http://localhost:3001/v1/ticket/close-ticket/${_id}`,
        {},
        {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        }
      );
      resolve(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const addNewTicket = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(
        `http://localhost:3001/v1/ticket`,
        formData,
        {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        }
      );
      resolve(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};
