import React, { Component } from 'react';
import css from './App.module.css';

class App extends Component {
  state = {
    name: '',
    contact: ''
  };

  handleInputChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  handleButtonClick = () => {
    this.setState({
      contact: this.state.name,
      name: ''
    });
  };

  render() {
    return (
      <>
        <form className={css.form}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={this.handleInputChange}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="button" onClick={this.handleButtonClick}>
            Add contact
          </button>
        </form>
        <h3>Contacts</h3>
        <p>{this.state.contact}</p>
      </>
    );
  }
}

export default App;
