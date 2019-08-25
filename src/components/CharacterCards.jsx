import React, { Component } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Jerry from "../images/JerryCard.jpg";
import George from "../images/GeorgeCard.jpg";
import Elaine from "../images/ElaineCard.jpg";
import Kramer from "../images/KramerCard.jpg";
import JerryBW from "../images/JerryBW.jpg";
import GeorgeBW from "../images/GeorgeBW.jpg";
import ElaineBW from "../images/ElaineBW.jpg";
import KramerBW from "../images/KramerBW.jpg";

class CharacterCards extends Component {
  state = {};
  render() {
    const characters = ["Jerry", "George", "Elaine", "Kramer"];

    const charImgs = {
      Jerry: <Card.Img height="85%" name="Jerry" src={JerryBW} />,
      George: <Card.Img height="85%" name="George" src={GeorgeBW} />,
      Elaine: <Card.Img height="85%" name="Elaine" src={ElaineBW} />,
      Kramer: <Card.Img height="85%" name="Kramer" src={KramerBW} />
    };

    return (
      <div className="sticky">
        <Container>
          <CardDeck>
            {characters.map((character, i) => (
              <Card
                // name={character}
                onClick={this.props.handleCharacter}
                key={i}
                style={{ width: "18rem" }}
              >
                {charImgs[character]}
                <Card.Title align="center">{character}</Card.Title>
              </Card>
            ))}
          </CardDeck>
          <br />
          <Button
            onClick={this.props.handleRandom}
            className="button-color"
            size="lg"
            block
          >
            Random Quote
          </Button>
        </Container>
      </div>
    );
  }
}

export default CharacterCards;
