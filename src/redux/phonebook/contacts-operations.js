import * as actions from "./contacts-action";
import * as API from "../../services/ApiContacts";

export const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactsRequest());

  const contacts = await API.fetchContacts();
  console.log(contacts.data);
  dispatch(actions.fetchContactsSucces(contacts.data));
};
