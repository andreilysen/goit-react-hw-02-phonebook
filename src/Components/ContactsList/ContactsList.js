import React from "react";
import ContactListItem from "./ContactListItem";

import PropTypes from "prop-types";

// import styles from "./Contact.module.css";

const ContactsList = ({ contacts, onRemoveContact }) => {
  return (
    contacts.length > 0 && (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onClickRemove={() => onRemoveContact(id)}
          />
        ))}
      </ul>
    )
  );
  // contacts.map(({contact}) => {
  // return (
  //   <li className={styles.items} key={contact.id}>
  //     <p className={styles.item}>{contact.name}:</p>
  //     <p className={styles.item}>{contact.number}</p>
  //     <button onClick={() => onRemoveContact(contact.id)}>Delete</button>
  //   </li>
  // );
  // });
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactsList;
