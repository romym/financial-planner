import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <p className="header-links">New User</p>
        <p className="header-links">New Budget</p>
        <p className="header-links">Add Transaction</p>
      </div>
    );
  }
}

export default Header;