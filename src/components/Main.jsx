import React, { useState, useEffect } from "react";
import { ContactList } from "./";
// import dummyContacts from "../dummyData";
import { getAllContactsWithFetch } from "../API_adapter"
import { SingleContact } from "./"

const Main = () => {
  const [contacts, setContacts] = useState([])
  const [selectedContact, setSelectedContact] = useState({})
  
  async function getAllContacts(){
    try{
      const data = await getAllContactsWithFetch()
      setContacts(data)
    }catch(error){
      console.error(error)
    }
  }

  async function selectContact(contactId){
    const response = await getAllContactsWithFetch();
    const contact = response[contactId-1]
    // const contact = await response.json();
    setSelectedContact(contact);
  }

  useEffect(()=>{
    getAllContacts()
  }, [])

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {
        selectedContact.id ? <SingleContact selectedContact={selectedContact}/> : <ContactList contacts={contacts} selectContact={selectContact}/> 
        }
      </div>
    </div>
  );
};

export default Main;
