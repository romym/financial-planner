import React, { Component } from 'react';
import './Main.css';
// FORM LIBRARY

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.formType === 'newUser');
    return (
      <div className="main">
        {this.props.formType === 'newUser' && <p>FORM LIBRARY</p>}
      </div>
    );
  }
}

export default Main;
