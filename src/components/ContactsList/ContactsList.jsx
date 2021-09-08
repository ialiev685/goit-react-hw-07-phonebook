import ContactItem from "../ContactItem";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilterContacts } from "../../redux/phonebook/contacts-selector";
import { fetchContacts } from "../../redux/phonebook/contacts-operations";
import "./ContactsList.scss";

const ContactsList = () => {
  const items = useSelector(getFilterContacts);
  const dispatch = useDispatch();
  console.log(items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul className="contacts-list">
        {items.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
