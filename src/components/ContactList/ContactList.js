import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contacts from '../../redux/contacts-actions';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={style.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={style.item} key={id}>
        {name}: {number}
        <button
          type="button"
          className={style.btn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contacts.deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
