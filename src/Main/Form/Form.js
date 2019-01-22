import React, { Component } from 'react';
import './NewPlayerForm.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Enter name',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.value);
  };

  render() {
    const { numberOfPlayers } = this.props;
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          {numberOfPlayers < 1 && (
            <input type="submit" value="Create Your Player" />
          )}
          {numberOfPlayers > 0 && (
            <input type="submit" value="Create Computer Player" />
          )}
        </form>
      </div>
    );
  }
}

export default NewPlayerForm;
