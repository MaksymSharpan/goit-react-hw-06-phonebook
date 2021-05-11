import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contacts from '../../redux/contacts-actions';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={style.filter}>
    <label>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contacts.findContact(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
