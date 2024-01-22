import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contacts) {
    return (<Card 
        key = {contacts.id}
        id = {contacts.id}
        name = {contacts.name}
        imgURL = {contacts.imgURL}
        phone = {contacts.phone}
        email = {contacts.email}

    />);
}

function App(props) {
  return (
    <div>
      <Avatar imgURL="https://lh3.googleusercontent.com/a/ACg8ocITRU1LqsXe7J3hk3NEflJQyJj7OT_gjV9hI2wpYSs2XQg=s360-c-no" />
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
