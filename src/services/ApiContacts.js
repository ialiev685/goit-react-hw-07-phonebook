const axios = require("axios");

const API = axios.create({
  baseURL: "http://localhost:3001",
});

export const fetchContacts = () => {
  return API.get("/contacts").then((response) => response);
};

export const fetchCreateContact = (item) => {
  return API.post("/contacts", item).then((response) => response);
};

export const fetchDeleteContact = (id) => {
  return API.delete(`/contacts/${id}`).then((response) => response);
};
