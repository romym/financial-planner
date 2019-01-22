import React, { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      formType: 'none',
    };
  }

  componentDidMount() {}

  formTypeHandler(formType) {
    this.setState({ formType: formType });
    console.log(this.state.formType);
  }

  render() {
    return (
      <div className="App">
        <Header formTypeHandler={formType => this.formTypeHandler(formType)} />
        <Main formType={this.state.formType} />
        <Footer />
      </div>
    );
  }
}

export default App;
