import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout/Layout';
import { useEffect, useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
// import initialContacts from '../contacts.json';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
// import { nanoid } from 'nanoid';

import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.initContacts);

  const [filter, setFilter] = useState('');

  const findContact = e => {
    // setFilter(e.currentTarget.value.toLowerCase().trim());
  };

  const contactsToShow = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Layout>
      <ContactForm />
      <Filter value={filter} onChange={findContact} />
      <ContactsList contacts={contactsToShow} />
      <GlobalStyle />
      <Toaster />
    </Layout>
  );
};
