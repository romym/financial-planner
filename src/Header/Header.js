import React, { Component } from 'react';
import './Header.css';
import {
  createNewUser,
  createNewTransaction,
  createNewBudget,
} from '../Actions/requests';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledCSS: 'header-links-disabled',
    };
  }

  async createNewUser(name, email) {
    await createNewUser({ name, email });
    this.setState({ disabledCSS: 'header-links' });
  }

  newUserForm() {
    this.props.formTypeHandler('newUser');
  }

  newBudgetForm() {
    this.props.formTypeHandler('newBudget');
  }

  newTransactionForm() {
    this.props.formTypeHandler('newTransaction');
  }

  render() {
    return (
      <div className="header">
        <p className="header-links" onClick={() => this.newUserForm()}>
          New User
        </p>
        <p
          className={`${this.state.transactionDisabled}`}
          onClick={() => this.newBudgetForm()}
        >
          New Budget
        </p>
        <p
          className={`${this.state.transactionDisabled}`}
          onClick={() => this.newTransactionForm()}
        >
          Add Transaction
        </p>
        <p className="todays-date">1/01/10</p>
      </div>
    );
  }
}

export default Header;
