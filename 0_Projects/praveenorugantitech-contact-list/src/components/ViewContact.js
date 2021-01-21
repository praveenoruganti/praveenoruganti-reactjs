import React from 'react';
import { Link } from 'react-router-dom';

const ViewContact = ({ contactList, match: { params: { id } } }) => {
  const contactId = parseInt(id, 10);
  const contactFound = contactList.find(function (user) {
    return user.id === contactId;
  });

  if (!contactFound) {
    return <h1>Sorry, no contact was found</h1>;
  }

  return (
    <div className="container">
      <Link to="/contact">Go Back</Link>
      <div className="card">
        <img className="card-img-top" src={contactFound.image_url} alt="profile" />
        <h1 className="card-title">{contactFound.name}</h1>
        <p>Email: <strong>{contactFound.email}</strong></p>
        <p>Phone number: <strong>{contactFound.phone_number}</strong></p>
      </div>
    </div>
  )
}

export default ViewContact;