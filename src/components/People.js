import React from "react";
import { Card, Container } from "react-bootstrap";
import "./Cards.css";

export default function People({ data }) {
  return (
    <>
      <h1 style={{margin: "40px"}}>Character Information</h1>
      {data.map((people, i) => {
        return (
          <Container className="cardPeople" key={i}>
            <Card style={{ width: "20rem" }}>
              <Card.Body className="card_body_People">
                <Card.Title>
                  <h3>{people.name}</h3>
                </Card.Title>
                <Card.Text>
                  <h5><strong>Height: </strong>{people.height}</h5>
                  <h5><strong>Hair Colour: </strong>{people.hair_color}</h5>
                  <h5><strong>Eye Colour: </strong>{people.eye_color}</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </>
  );
}
