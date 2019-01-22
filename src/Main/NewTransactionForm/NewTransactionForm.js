import React, { Component } from 'react';

class NewTransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Enter either income or spending',
      category: 'Enter category',
      account: this.props.account,
      amount: 'Enter amount',
      memo: 'Enter Memo',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'select-one' ? target.selected : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(
      this.state.type,
      this.state.category,
      this.state.account,
      this.state.amount,
      this.state.memo,
    );
  };

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea
              value={this.state.type}
              name="type"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <textarea
              value={this.state.category}
              name="category"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <textarea
              value={this.state.amount}
              name="amount"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <textarea
              value={this.state.memo}
              name="memo"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Create New Transaction" />
        </form>
      </div>
    );
  }
}

export default NewTransactionForm;
