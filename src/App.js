import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';

class App extends Component {
  state = {
    filter: '',
    // contacts: [],

    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  // ContactForm
  updateAppContacts = ({ name, number }) => {
    //   name: newName.name,
    //   number: newName.number,

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.handleUniqueListContacts(contact);
  };

  handleSearch = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleUniqueListContacts(contact) {
    this.setState(() => ({
      contacts: [contact, ...uniqueContacts],
    }));

    let uniqueContacts = this.state.contacts.filter(listContact => {
      if (listContact.name === contact.name) {
        alert(`${contact.name} is already in contacts.`);

        this.setState(() => ({
          contacts: [...uniqueContacts],
        }));
      }
      return listContact;
    });
  }

  deleteContact = e => {
    const contactToDelete = e.currentTarget.parentNode.firstChild.textContent;

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name !== contactToDelete,
      ),
    }));
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()),
    );
  };

  render() {
    const { updateAppContacts, handleSearch, deleteContact, filterContacts } =
      this;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm updateAppContacts={updateAppContacts} />
        </Section>

        <Section title="Contacts">
          <Filter value={this.state.filter} handleSearch={handleSearch} />
          <ContactList
            contactName={filterContacts()}
            deleteContact={deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
