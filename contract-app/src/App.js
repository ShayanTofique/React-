import React, { useState } from 'react';
import './App.css';
import {Header} from './components/header/header';
import AddContactList from './components/AddContactList';
import ContactList from './components/ContactList';



function App() {


  const [contact, setcontact] = useState([]);

  const addcontact=(Contact)=>{
    setcontact([...contact,Contact])    //recieving this.state ere
  }

  return (
    <>
<Header />
<AddContactList addcontact={addcontact}/>
<ContactList contacts={contact} />
</>
    );
}

export default App;
