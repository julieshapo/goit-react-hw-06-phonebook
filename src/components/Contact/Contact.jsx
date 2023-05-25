import { deleteContact } from '../../redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, ContactItem } from './Contact.styled';

export const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <p>
        {name} : {number}
      </p>
      <Button onClick={() => dispatch(deleteContact({ id }))}>Delete</Button>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
