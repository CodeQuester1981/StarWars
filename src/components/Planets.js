import React from "react";
import { Card, Container } from "react-bootstrap";
import "./Cards.css";

export default function Planets({ data }) {
  return (
    <>
      <h1 style={{margin: "40px"}}>Planetary Information</h1>
      {data.map((planets, i) => {
        return (
          <Container className="cardPeople" key={i}>
            <Card style={{ width: "20rem" }}>
              <Card.Body className="card_body_People">
                <Card.Title>
                  <h3>{planets.name}</h3>
                </Card.Title>
                <Card.Text>
                  <h5><strong>Rotation: </strong>{planets.rotation_period}</h5>
                  <h5><strong>Climate: </strong>{planets.climate}</h5>
                  <h5><strong>Terrain: </strong>{planets.terrain}</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </>
  );
}
