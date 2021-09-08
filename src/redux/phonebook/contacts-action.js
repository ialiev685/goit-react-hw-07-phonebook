import { createAction } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

export const fetchContactsRequest = createAction("contacts/request");

export const fetchContactsSucces = createAction("contacts/succes");

export const addItem = createAction("contacts/add", (item) => ({
  payload: {
    id: uuidv4(),
    ...item,
  },
}));

export const deleteItem = createAction("contacts/delete");

export const getFilterItems = createAction("contacts/getFilter");
