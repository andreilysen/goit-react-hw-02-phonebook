import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  static propTypes = {
    onAddContacts: PropTypes.func.isRequired,
  };

  handleChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  resetInput = () => {
    this.setState({ name: "", number: "" });
  };

  handleAddContact = (e) => {
    e.preventDefault();

    this.props.onAddContacts(this.state);
    this.resetInput();
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleAddContact}>
        <label className={styles.item}>
          <p>name</p>
          <input
            className={styles.input}
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
            className={styles.input}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChangeInput}
          />
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

export default Form;
