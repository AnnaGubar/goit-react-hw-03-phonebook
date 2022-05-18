import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';

function ContactList({ contactName, deleteContact }) {
  return (
    <ul className={s.list}>
      {contactName.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
