import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
}));

const deleteContact = createAction('contacts/delete');

const findContact = createAction('contacts/find');

export default { addContact, deleteContact, findContact };
