import React from "react";
import PropTypes from "prop-types";

import styles from "./Contact.module.css";

const ContactsList = ({ contacts, onRemoveContact }) => {
  return contacts.map((contact) => {
    return (
      <li className={styles.items} key={contact.id}>
        <p className={styles.item}>{contact.name}:</p>
        <p className={styles.item}>{contact.number}</p>
        <button onClick={() => onRemoveContact(contact.id)}>Delete</button>
      </li>
    );
  });
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactsList;
