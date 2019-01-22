import React, { Component } from 'react';
import './Footer.css';
import { getAccount } from '../Actions/requests';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null,
    };
  }

  async componentWillMount() {
    let account =
      JSON.parse(localStorage.getItem('loggedInUserAccount')) || null;
    account = await getAccount(account.id);
    this.setState({ account });
  }

  async componentWillUpdate() {
    let account =
      JSON.parse(localStorage.getItem('loggedInUserAccount')) || null;
    account = await getAccount(account.id);
    this.setState({ account });
  }

  render() {
    const { account } = this.state;
    return (
      <div className="footer">
        <p className="stats">$tat$</p>
        <div className="historical-container">
          <p className="historical">
            Today so far: ${(account && account.spending) || 0}
          </p>
          <p className="historical">Yesterday: $90</p>
          <p className="historical">
            This month so far:$
            {(account && account.budget - account.remaining) || 0}
          </p>
          <p className="historical">Last month: $408.98</p>
        </div>
        <div className="stats-container">
          <p className="percentage">
            Budget: ${(account && account.budget) || 0}
          </p>
          <p className="percentage">
            {(account &&
              ((account.budget - account.spending) / account.budget) * 100) ||
              0}
            %
          </p>
          <p className="remaining">
            ${(account && account.budget - account.spending) || 0}
            Remaining
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
