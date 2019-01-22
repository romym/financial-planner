import React, { Component } from 'react';
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  componentDidMount() {
      
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
