import React, { Component } from 'react';

class NewUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Enter name',
      email: 'Enter email',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name, 'sd', value, 'asdsd');
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.name, this.state.email, 'form level');
    this.props.handleSubmit(this.state.name, this.state.email);
  };

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <textarea
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Create New User" />
        </form>
      </div>
    );
  }
}

export default NewUserForm;
