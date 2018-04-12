import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Main from "./components/Main";
import Characters from "./components/Characters";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  state = {
    characters,
    lastId: 0,
    counter: 0,
    highScore: 0,
  };

  handleIncrement = (id) => {
    if (this.state.lastId !== id) {
      this.setState(
        { 
          counter: this.state.counter + 1,
          lastId: id,
          highScore: 
            this.state.counter >= this.state.highScore 
              ? 
              this.state.counter + 1 : this.state.highScore
        }
      )
    }
    else {
      this.setState(
        {
          counter: 0,
        }
      )
    }

  };

  render() {
    return (
      <Wrapper>
        <Title>Memory Game!</Title>
        <h1>{this.state.counter} {this.state.highScore}</h1>
        <Main>
          {this.state.characters.map(character => (
            <Characters
            key={character.id}
            alt={character.name}
            id={character.id} 
            image={character.image}
            handleIncrement={this.handleIncrement} 
            />
          ))}
        </Main>
      </Wrapper>
    );
  }
}

export default App;
