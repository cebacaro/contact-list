import React, { useState } from "react"
import { ContactList } from "./"

const Main = () => {
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <ContactList />
      </div>
    </div>
  )
}

export default Main;
