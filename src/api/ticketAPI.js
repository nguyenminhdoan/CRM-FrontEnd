import axios from "axios";

const getAllTicket = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXI0QGdtYWlsLmNvbSIsImlhdCI6MTYxOTM1ODc0MCwiZXhwIjoxNjE5MzYwNTQwfQ.Xh5eLEC7nZY8p6ig2YKa0FvjEyi3xtW2wd9by55M2Pw",
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export default getAllTicket;
