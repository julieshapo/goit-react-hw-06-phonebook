import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { Container } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.initContacts);

  return (
    <Container>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
