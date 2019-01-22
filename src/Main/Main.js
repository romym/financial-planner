import React, { Component } from 'react';
import './Main.css';
import NewUserForm from './NewUserForm/NewUserForm';
import {
  createNewUser,
  createNewTransaction,
  createNewBudget,
} from '../Actions/requests';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('loggedInUser')) || null;
    this.setState({ user: user });
  }

  async createNewUser(name, email) {
    const user = await createNewUser({ name, email });
    this.props.enableTransactions();
    this.setState({ user: user }, () => {
      localStorage.setItem('loggedInUser', JSON.stringify(this.state.user));
    });
  }

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <div className="main">
        {this.props.formType === 'newUser' &&
          !user && (
            <NewUserForm
              handleSubmit={(name, email) => this.createNewUser(name, email)}
            />
          )}
        {user && <p>Hello {user.name}!</p>}
      </div>
    );
  }
}

export default Main;
