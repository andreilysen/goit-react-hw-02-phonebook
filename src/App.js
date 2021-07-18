import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "./Components/Form";
import Filter from "./Components/Filter";
import ContactsList from "./Components/ContactsList";

import "./App.css";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  AddContact = (newContact) => {
    const inContact = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (inContact) {
      alert(`${inContact.name}  is already in contacts!`);
      return;
    }
    this.setState((prevState) => ({
      contacts: [{ ...newContact, id: uuidv4() }, ...prevState.contacts],
    }));
  };

  ChangeFilter = (e) => {
    console.log(e);

    this.setState({ filter: e.target.value });
  };

  removeContact = (dataId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== dataId),
      };
    });
  };

  render() {
    const filterContact = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <>
        <h2>Phonebook</h2>
        <Form onAddContacts={this.AddContact} />

        <h2>Contacts</h2>
        {this.state.contacts.length > 1 && (
          <Filter value={this.state.filter} changeFilter={this.ChangeFilter} />
        )}
        <ul>
          <ContactsList
            contacts={filterContact}
            onRemoveContact={this.removeContact}
          />
        </ul>
      </>
    );
  }
}

export default App;
