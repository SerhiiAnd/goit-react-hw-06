// import React, { Component } from "react";
// import { nanoid } from "nanoid";
// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import Filter from "./components/Filter/Filter";
// import {
//   saveContactsToLocalStorage,
//   loadContactsFromLocalStorage,
// } from "./components/localStorageUtils/localStorageUtils";

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidMount() {
//     const savedContacts = loadContactsFromLocalStorage();
//     this.setState({ contacts: savedContacts });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       saveContactsToLocalStorage(this.state.contacts);
//     }
//   }

//   handleAddContact = (newContact) => {
//     const { contacts } = this.state;

//     if (
//       contacts.some(
//         (contact) =>
//           contact.name.toLowerCase() === newContact.name.toLowerCase()
//       )
//     ) {
//       alert(`${newContact.name} is already in contacts.`);
//       return;
//     }

//     const contactToAdd = { ...newContact, id: nanoid() };
//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, contactToAdd],
//     }));
//   };

//   handleDeleteContact = (contactId) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== contactId
//       ),
//     }));
//   };

//   handleFilterChange = (e) => {
//     this.setState({ filter: e.target.value });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <div className="container">
//         <h1>Phonebook</h1>
//         <ContactForm onAddContact={this.handleAddContact} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.handleFilterChange} />
//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={this.handleDeleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;
import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import {
  saveContactsToLocalStorage,
  loadContactsFromLocalStorage,
} from "./components/localStorageUtils/localStorageUtils";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = loadContactsFromLocalStorage();
    this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      saveContactsToLocalStorage(this.state.contacts);
    }
  }

  handleAddContact = (newContact) => {
    const { contacts } = this.state;

    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    const contactToAdd = { ...newContact, id: nanoid() };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contactToAdd],
    }));
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
