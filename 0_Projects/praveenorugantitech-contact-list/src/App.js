import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

import Contacts from './components/Contact';
import AddNewContacts from './components/AddNewContact';
import ViewContact from './components/ViewContact';


class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to='/contact'></Redirect>
          )} />
          <Route
            exact
            path="/contact"
            render={() => <Contacts contactList={this.props.contactList} />}
          />
          <Route exact path="/contacts/new" component={AddNewContacts} />
          <Route
            exact
            path="/contact/:id"
            render={(props) => <ViewContact {...props} contactList={this.props.contactList} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  contactList: PropTypes.array.isRequired,
}

export default App;
