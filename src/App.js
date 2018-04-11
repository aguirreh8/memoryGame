import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title"
import './App.css';

class App extends Component {


  render() {
    return (
      <Wrapper>
        <Title>Memory Game!</Title>
      </Wrapper>
    );
  }
}

export default App;
