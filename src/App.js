import logo from './logo.svg';
import './App.css';
import contactsData from "./contacts.json";
import React, { useState } from "react";

function App() {
  const contactList = [...contactsData].slice(0,5)  
  const [existingContacts, setContact] = useState(contactList);

  const insertRandomContact = () => {
     let remainingContacts = [...contactsData].slice(5, contactsData.length - 1);
        const randomIndex = Math.floor(Math.random() * remainingContacts.length);
        const randomContact = remainingContacts.splice(randomIndex, 1)[0];
        setContact([...existingContacts, randomContact]);
   };

  const sortByPopularity = () => {
        setContact([...existingContacts].sort((a, b) => b.popularity - a.popularity))
  }

  const sortByName = () => {
        setContact([...existingContacts].sort((a, b) => a.name.localeCompare(b.name)));
  };  
  
  const deleteContact = (contactId) => {
    setContact([...existingContacts].filter(contact => contact.id !== contactId))
  

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>IronContacts</h1>
      <button onClick={() => insertRandomContact()}>Add Random Contact</button>
      <button onClick={() => sortByPopularity()}>Sort By Popularity</button>
      <button onClick={() => sortByName()}>Sort By Name</button>

      <table className="contacts-table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {existingContacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt="contact-pic"
                    height="50px"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : null}</td>
                <td>{contact.wonEmmy ? "🏆" : null}</td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
