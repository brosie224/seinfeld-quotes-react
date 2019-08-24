import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Jerry from "../images/JerryCard.jpg";
import George from "../images/GeorgeCard.jpg";
import Elaine from "../images/ElaineCard.jpg";
import Kramer from "../images/KramerCard.jpg";

const characters = ["Jerry", "George", "Elaine", "Kramer"];

const charImgs = {
  Jerry: <Card.Img height="85%" name="Jerry" src={Jerry} />,
  George: <Card.Img height="85%" name="George" src={George} />,
  Elaine: <Card.Img height="85%" name="Elaine" src={Elaine} />,
  Kramer: <Card.Img height="85%" name="Kramer" src={Kramer} />
};

const CharacterCards = props => (
  <div className="sticky">
    <Container>
      <CardDeck>
        {characters.map((character, i) => (
          <Card
            name={character}
            onClick={props.handleCharacter}
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
        onClick={props.handleRandom}
        className="button-color"
        size="lg"
        block
      >
        Random Quote
      </Button>
    </Container>

    {/* {characters.map((character, i) => (
      <Link key={i} to={`/quotes/${character}`}>
        {character}{" "}
      </Link>
    ))} */}
  </div>
);

export default CharacterCards;
