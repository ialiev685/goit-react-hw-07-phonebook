import ContactItem from "../ContactItem";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIsLoader } from "../../redux/phonebook/contacts-selector";
import { getFilterContacts } from "../../redux/phonebook/contacts-selector";
import { fetchContacts } from "../../redux/phonebook/contacts-operations";
import "./ContactsList.scss";

const ContactsList = () => {
  const items = useSelector(getFilterContacts);
  const loading = useSelector(getIsLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="contacts-wrapper">
      {loading && <p className="contacts-wrapper__loader">loading...</p>}
      <ul className="contacts-wrapper__contacts-list">
        {items.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
