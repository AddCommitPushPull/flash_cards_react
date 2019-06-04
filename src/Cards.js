import React from "react";
import { Button, Card, Table, } from "semantic-ui-react";

const Cards = ({ cards }) => (
  <Card.Group>
      {
        cards.map( card => (
      <Card>
      <Card.Content key={card.id}>
        <Card.Header>Q: {card.question}</Card.Header>
        <hr></hr>
        <Card.Header>A: {card.answer}</Card.Header>
        <div className='ui two buttons'>
          <Button  color='blue'>
            Edit
          </Button>
          <Button color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
      ))
      }
  </Card.Group>
  




  // {
  // cards.map( card => (
  //   <Card.Group key={cards.id}>
  //   <Card >
  //     <Card.Content>
  //       <Card.Header>Q: {cards.question}</Card.Header>
  //   </Card.Content>
  //     <Card.Content>
  //       <Card.Header>A: {cards.answer}</Card.Header>
  //     </Card.Content>
  //     <Card.Content extra>
  //       <div className='ui two buttons'>
  //         <Button color='blue'>
  //           Edit
  //         </Button>
  //         <Button color='red'>
  //           Delete
  //         </Button>
  //       </div>
  //     </Card.Content>

  // ))
  // }
  //   </Card>}
  // </Card.Group>
);


export default Cards;
