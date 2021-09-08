const axios = require("axios");

const API = axios.create({
  baseURL: "http://localhost:3001",
});

export const fetchContacts = () => {
  return API.get("/contacts").then((response) => response);
};
