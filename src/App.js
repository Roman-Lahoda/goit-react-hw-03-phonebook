import { Component } from "react";
import shortid from "shortid";
import s from "./App.module.css";
import ContactsForm from "./component/ContactsForm";
import Filter from "./component/Filter";
import ContactsList from "./component/ContactsList";

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

  onAddContact = (data) => {
    const newContact = {
      id: shortid.generate(),
      ...data,
    };

    const sameContact = this.state.contacts.find(
      (contact) => contact.name === newContact.name
    );

    if (sameContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  onChangeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  onDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("phonebook"));
    if (contacts) {
      this.setState({
        contacts: contacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("phonebook", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className={s.phonebook}>
        <h1 className={s.pageTitle}>Phonebook</h1>
        <ContactsForm onSubmit={this.onAddContact} />
        {contacts.length > 0 && <h2 className={s.title}>Contacts</h2>}
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.onChangeFilter} />
        )}
        {/* <Filter value={filter} onChange={this.onChangeFilter} /> */}
        <ContactsList list={filteredContacts} onDelete={this.onDeleteContact} />
      </div>
    );
  }
}

export default App;
