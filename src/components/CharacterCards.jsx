import React, { Component } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import JerryBW from "../images/JerryBW.jpg";
import GeorgeBW from "../images/GeorgeBW.jpg";
import ElaineBW from "../images/ElaineBW.jpg";
import KramerBW from "../images/KramerBW.jpg";

class CharacterCards extends Component {
  state = {
    Jerry: (
      <Card.Img
        height="85%"
        name="Jerry"
        src={process.env.PUBLIC_URL + "/JerryCard.jpg"}
      />
    ),
    George: (
      <Card.Img
        height="85%"
        name="George"
        src={process.env.PUBLIC_URL + "/GeorgeCard.jpg"}
      />
    ),
    Elaine: (
      <Card.Img
        height="85%"
        name="Elaine"
        src={process.env.PUBLIC_URL + "/ElaineCard.jpg"}
      />
    ),
    Kramer: (
      <Card.Img
        height="85%"
        name="Kramer"
        src={process.env.PUBLIC_URL + "/KramerCard.jpg"}
      />
    )
  };

  handleImageChange = character => {
    this.setState({
      Jerry: <Card.Img height="85%" name="Jerry" src={JerryBW} />,
      George: <Card.Img height="85%" name="George" src={GeorgeBW} />,
      Elaine: <Card.Img height="85%" name="Elaine" src={ElaineBW} />,
      Kramer: <Card.Img height="85%" name="Kramer" src={KramerBW} />,
      [character]: (
        <Card.Img
          height="85%"
          name="Jerry"
          src={process.env.PUBLIC_URL + `/${character}Card.jpg`}
        />
      )
    });
  };

  render() {
    const characters = ["Jerry", "George", "Elaine", "Kramer"];
    const fontStyle = {
      fontSize: 24,
      textAlign: "center"
    };

    return (
      <div className="sticky">
        <Container>
          <CardDeck>
            {characters.map((character, i) => (
              <Card
                onClick={e => {
                  this.handleImageChange(character);
                  this.props.handleCharacter(e);
                }}
                key={i}
                style={{ width: "18rem" }}
              >
                {this.state[character]}
                <Card.Title style={fontStyle}>{character}</Card.Title>
              </Card>
            ))}
          </CardDeck>
          <br />
          <Button
            onClick={e => {
              this.handleImageChange();
              this.props.handleRandom(e);
            }}
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
