import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <p className="stats">$tat$</p>
        <div className="historical-container">
            <p className="historical">Today so far:</p>
            <p className="historical">Yesterday:</p>
            <p className="historical">This month so far:</p>
            <p className="historical">Last month:</p>
        </div>
        <div className="stats-container">
            <p className="percentage">22%</p>
            <p className="remaining">$310 remaining</p>
        </div>
      </div>
    );
  }
}

export default Footer;