import React, { Component } from 'react';
import { Container, Header, } from "semantic-ui-react";
import './App.css';
import Cards from "./Cards";
class App extends Component {
  state = {
    cards: [
      { id: 1, question: "Exposure Effect", answer: "Multiple, consistent interactions cause an icrease in feelings towards what is presented.", },
      { id: 2, question: "Expectation Effect", answer: "People will have preset expectations unless displayed otherwise.", },
      { id: 3, question: "Framing Effect", answer: "The same fact can be displayed positively or negatively.", },
    ],
  };
 render() {
   return (
     <Container>
      <Header as="h1">React Flash Cards</Header>
      <Cards cards={this.state.cards}  />
     </Container>
   );
 }
}

export default App;