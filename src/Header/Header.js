import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          className={`${this.props.disabledCSS}`}
          onClick={() => this.newBudgetForm()}
        >
          New Budget
        </p>
        <p
          className={`${this.props.disabledCSS}`}
          onClick={() => this.newTransactionForm()}
        >
          Add Transaction
        </p>
        <p className="todays-date">{new Date().toString().slice(4, 15)}</p>
      </div>
    );
  }
}

export default Header;
