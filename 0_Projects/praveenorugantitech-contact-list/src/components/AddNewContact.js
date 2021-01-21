import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { sendEvent } from '../state';
import { Form } from 'react-bootstrap';

export default class AddNewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone_number: '',
      image_url: ''
    }
  }

  /* Set input vales to our state */
  onInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  /** Validate email by using regular a regular expression */
  validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  /** Validate phone number by using a regular expression */
  validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
    return phoneRegex.test(phoneNumber);
  }

  /** Validate Image URL by suing a regular expression */
  validateImageUrl = (url) => {
    const urlRegex = /(https)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i
    return urlRegex.test(url);
  }

  /** Handle submitting form */
  handleSubmit = (e) => {
    e.preventDefault();
    let formIsOk;
    // Validate empty input strings
    for (let i in this.state) {
      if (this.state[i] === '') {
        formIsOk = false;
      } else {
        formIsOk = true;
      }
    }

    if (!formIsOk) {
      return alert('Please do not leave empty fields');
    }

    // Validate email
    if (!this.validateEmail(this.state.email)) {
      alert('Invalid email, please enter email format as "myEmail@mydomain.com');
      return;
    }

    // Validate phone number
    if (!this.validatePhoneNumber(this.state.phone_number)) {
      alert('Invalid phone number format, please follow format: 888-888-8888');
      return;
    }

    // Validate url string
    if (!this.validateImageUrl(this.state.image_url)) {
      alert('Invalid image url')
      return;
    }

    sendEvent('addNewContact', this.state);
    this.props.history.push('/contact');

  }

  render() {

    return (
      <div className="container">
        <Link to="/contact">Go Back</Link>
        <Form className="contact-form">
          <h1 className="contact-header">Add new contact</h1>
          <div className="form-group">
            <input
              className="form-control"
              onChange={this.onInputChange}
              value={this.state.name}
              name="name"
              placeholder='name'
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              aria-describedby="emailHelp"
              onChange={this.onInputChange}
              name="email"
              placeholder='email'
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              value={this.state.phoneNumber}
              onChange={this.onInputChange}
              name="phone_number"
              placeholder='phone number 888-888-8888'
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              value={this.state.imageUrl}
              onChange={this.onInputChange}
              name="image_url"
              placeholder='Image URL'
            />
          </div>
          <button className="btn btn-info" type='submit' onClick={this.handleSubmit}>Submit</button>
        </Form>
      </div>
    )
  }
}
