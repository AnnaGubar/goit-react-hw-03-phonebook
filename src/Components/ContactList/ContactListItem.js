import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactListItem({ name, number, deleteContact }) {
  return (
    <li className={s.contact}>
      <p>{name}</p>: <span>{number}</span>
      <button className={s.delete} type="button" onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
