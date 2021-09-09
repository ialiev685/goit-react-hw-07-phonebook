// import * as actions from "./contacts-action";
import * as API from "../../services/ApiContacts";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(actions.fetchRequest());

//   const contacts = await API.fetchContacts();

//   dispatch(actions.fetchSuccess(contacts.data));
// };

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const contacts = await API.fetchContacts();

      return contacts.data;
    } catch (err) {
      return err;
    }
  }
);

// export const fetchCreateContact = (item) => async (dispatch) => {
//   dispatch(actions.fetchRequest());
//   try {
//     const contacts = await API.fetchCreateContact(item);

//     dispatch(actions.fetchSuccess([contacts.data]));
//   } catch (err) {
//     dispatch(actions.fetchError(err));
//   }
// };

export const fetchCreateContact = createAsyncThunk(
  "contacts/fetchCreateContact",
  async (item) => {
    try {
      const contacts = await API.fetchCreateContact(item);

      return contacts.data;
    } catch (err) {
      return err;
    }
  }
);

// export const fetchDeleteContact = (id) => async (dispatch) => {
//   dispatch(actions.fetchRequest());

//   const requestDelete = await API.fetchDeleteContact(id);
//   if (requestDelete.statusText === "OK") {
//     dispatch(actions.deleteItem(id));
//   }
// };

export const fetchDeleteContact = createAsyncThunk(
  "contacts/fetchDeleteContact",
  async (id) => {
    try {
      const requestDelete = await API.fetchDeleteContact(id);
      if (requestDelete.statusText === "OK") {
        return id;
      }
    } catch (err) {
      return err;
    }
  }
);
