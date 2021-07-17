import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  filterContact = () => {
    const result = this.state.contacts.filter((contact) =>
      contact.name.includes(this.state.filter)
    );
    // this.setState({ contacts: [...result] });
    console.log(result);
  };

  resetInput = () => {
    this.setState({ name: "", number: "" });
  };

  handleChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.filterContact();
  };

  handleAddContact = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      contacts: [
        { name: this.state.name, phone: this.state.number, id: uuidv4() },
        ...prevState.contacts,
      ],
    }));
    this.resetInput();
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleAddContact}>
          <label>
            <p>name</p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChangeInput}
            />
            <p>Number</p>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleChangeInput}
            />
            <button type="submit">Add contact</button>
          </label>
        </form>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleChangeInput}
        />
        <ul>
          {/* <li key={this.state.contacts.map((contact) => contact.id)}>
            <p>{this.state.contacts.map((contact) => contact.name)}</p>
          </li> */}
          {this.state.contacts.map((contact) => {
            return (
              <li key={contact.id}>
                <p>{contact.name}:</p>
                <p>{contact.phone}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
