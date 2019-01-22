import React, { Component } from 'react';

class NewAccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      period: 'Enter either week or month',
      budgetAmount: 'Enter budget amount',
      user: this.props.user,
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
      this.state.period,
      this.state.budgetAmount,
      this.state.user,
    );
  };

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea
              value={this.state.period}
              name="period"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <textarea
              value={this.state.budgetAmount}
              name="budgetAmount"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Create New Budget" />
        </form>
      </div>
    );
  }
}

export default NewAccountForm;
