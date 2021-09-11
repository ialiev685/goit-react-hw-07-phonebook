import React from "react";
import { getError } from "redux/phonebook";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";
import Section from "./Section";
import Filter from "./Filter";
import "./App.scss";

const App = () => {
  const error = useSelector(getError);
  return (
    <Section>
      <h1 className="caption">Phonebook</h1>
      <ContactForm />

      <h2 className="title">Contacts</h2>
      <Filter />
      {error && <p>{error}</p>}
      <ContactsList />
    </Section>
  );
};

export default App;
