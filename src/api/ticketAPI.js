import axios from "axios";

const getAllTicket = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXI0QGdtYWlsLmNvbSIsImlhdCI6MTYxOTg1Mjk2MCwiZXhwIjoxNjE5ODU0NzYwfQ.13Ea3F560itLfA62PSCEyq2BUY85osfJlDZJGgjNW20",
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export default getAllTicket;
