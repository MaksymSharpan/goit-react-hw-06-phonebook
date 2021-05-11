import React from 'react';

// import { v4 as uuidv4 } from 'uuid';

// import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  const contactListItem = contacts.map(({ id, name, number }, idx) => {
    // console.log(id);
    return (
      <li key={id}>
        {name} : {number}
        <button onClick={() => deleteContact(idx)}>Del</button>
      </li>
    );
  });

  return <ul>{contactListItem}</ul>;
};

export default ContactList;
