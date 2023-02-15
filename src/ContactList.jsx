import React, {useState} from 'react'
import dummyContacts from "./dummyData"

const ContactList = () => {
    const [contacts, setContacts] = useState(dummyContacts)
    return(
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
            {
              contacts.map(contact => {
                return <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.email}</td>
                  </tr>
              })
            }
          </tbody>
        </table>
    )
}

export default ContactList