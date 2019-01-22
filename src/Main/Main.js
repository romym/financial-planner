import React, { Component } from 'react';
import './Main.css';
import NewUserForm from './NewUserForm/NewUserForm';
import NewAccountForm from './NewAccountForm/NewAccountForm';
import NewTransactionForm from './NewTransactionForm/NewTransactionForm';
import {
  createNewUser,
  createNewTransaction,
  createNewAccount,
  getAccount,
} from '../Actions/requests';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      account: null,
    };
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('loggedInUser')) || null;
    const account =
      JSON.parse(localStorage.getItem('loggedInUserAccount')) || null;
    if (user) this.props.enableTransactions();
    this.setState({ user, account });
  }
  async createNewUser(name, email) {
    const user = await createNewUser({ name, email });
    this.setState({ user: user }, () => {
      localStorage.setItem('loggedInUser', JSON.stringify(this.state.user));
      this.props.enableTransactions();
    });
  }

  async createNewAccount(period, budgetAmount, user) {
    const account = await createNewAccount({
      period,
      budget: budgetAmount,
      user,
    });
    this.setState({ account }, () => {
      localStorage.setItem(
        'loggedInUserAccount',
        JSON.stringify(this.state.account),
      );
    });
  }

  async createNewTransaction(type, category, account, amount, memo) {
    const transaction = await createNewTransaction({
      type,
      category,
      account,
      amount,
      memo,
    });
    const updatedAccount = await getAccount(account.id);
    this.setState({ account: updatedAccount });
  }

  render() {
    const { user, account } = this.state;
    return (
      <div className="main">
        {this.props.formType === 'newUser' &&
          !user && (
            <NewUserForm
              handleSubmit={(name, email) => this.createNewUser(name, email)}
            />
          )}
        {user && <p>Hello {user.name}!</p>}
        {this.props.formType === 'newBudget' && (
          <NewAccountForm
            user={user}
            handleSubmit={(period, budget, user) =>
              this.createNewAccount(period, budget, user)
            }
          />
        )}
        {this.props.formType === 'newTransaction' && (
          <NewTransactionForm
            account={account}
            handleSubmit={(type, category, account, amount, memo) =>
              this.createNewTransaction(type, category, account, amount, memo)
            }
          />
        )}
      </div>
    );
  }
}

export default Main;
