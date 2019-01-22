import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        transactionDisabled: "header-links-disabled"
    };
  }

  createNewUser() {
      console.log('blahhhhhh')
  }

  render() {
    return (
      <div className="header">
        <p className="header-links" onClick={() => this.createNewUser()}>New User</p>
        <p className={`${this.state.transactionDisabled}`} onClick={() => this.createNewUser()}>New Budget</p>
        <p className={`${this.state.transactionDisabled}`} onClick={() => this.createNewUser()}>Add Transaction</p>
        <p className="todays-date">1/01/10</p>
      </div>
    );
  }
}

export default Header;