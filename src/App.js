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
      disabledCSS: 'header-links-disabled',
    };
  }

  componentDidMount() {}

  formTypeHandler(formType) {
    this.setState({ formType: formType });
  }

  enableTransactions() {
    this.setState({ disabledCSS: 'header-links' });
  }

  render() {
    return (
      <div className="App">
        <Header
          disabledCSS={this.state.disabledCSS}
          formTypeHandler={formType => this.formTypeHandler(formType)}
        />
        <Main
          enableTransactions={() => this.enableTransactions()}
          formType={this.state.formType}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
