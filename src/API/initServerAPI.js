import axios from "axios";

// useApiServer.js
const useApiServer = () => {
  const apiServer = process.env.REACT_APP_API_SERVER;

  if (!apiServer) {
    throw new Error("API server address is not defined in environment variables.");
  } else {
    return 
  }

  return apiServer;
};

export default useApiServer;
