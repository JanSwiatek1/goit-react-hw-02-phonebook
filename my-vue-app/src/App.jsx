
// import { useState } from 'react';
import {ContactForm} from './assets/contactForm/contactForm';
// import ContactList from './assets/contactList';
// import './App.css'
// import { nanoid } from 'nanoid';
// import React from 'react';

function App() {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };



  return (
    <div>
      <h2>Phone Book</h2>
      <ContactForm />
        
      <h2>Contacts</h2>

      {/* <Filter /> */}
      {/* <ContactList /> */}
    </div>
  );


}

export default App
