import React, { Component } from "react";
import styles from "./ContactsList.module.css";

class ContactsList extends Component {
  render() {
    return (
      <>
        <ul className={styles.contactsList}>
          {this.props.contacts.map((contact) => (
            <li key={contact.id} className={styles.contactsListItem}>
              {contact.name}: {contact.number}
              <button
                type="button"
                onClick={() => this.props.deleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ContactsList;
