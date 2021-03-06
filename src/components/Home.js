import React from "react";
import { Container } from "react-bootstrap";
import image from "../assets/troopers.png";
import "./Home.css";

export default function Home() {
  return (
    <Container className="container">
      <div className="paragraphs">
        <h1 className="home-header">Welcome to the Star Wars Info Sheet</h1>
        <img src={image} alt="troopers"/>
        <p>
          The Star Wars franchise depicts the adventures of characters "A long
          time ago in a galaxy far, far away", in which humans and many species
          of aliens (often humanoid) co-exist with robots, or 'droids', who may
          assist them in their daily routines; space travel between planets is
          common due to lightspeed hyperspace technology. Spacecrafts range from
          small starfighters, to huge capital ships such as the Star Destroyers,
          to space stations such as the moon-sized Death Stars.
        </p>

        <p>
          Telecommunication includes two-way audio and audiovisual screens, and
          holographic projections. A mystical power known as the Force is
          described in the original film as "an energy field created by all
          living things ... that binds the galaxy together". Through training
          and meditation, those whom "the Force is strong with" are able to
          perform various superpowers (such as telekinesis, precognition,
          telepathy, and manipulation of physical energy).
        </p>

        <p>
          The Force is wielded by two major knightly orders at conflict with
          each other: the Jedi, peacekeepers of the Galactic Republic who act on
          the light side of the Force through non-attachment and arbitration,
          and the Sith, who use the dark side by manipulating fear and
          aggression. While Jedi Knights can be numerous, the Dark Lords of the
          Sith (or 'Darths') are intended to be limited to two: a master and
          their apprentice. Force-wielders are very limited in numbers in
          comparison to the population. The Jedi and Sith prefer the use of a
          weapon called a lightsaber, a blade of energy that can cut through
          virtually any surface and deflect energy bolts. The rest of the
          population, as well as renegades and soldiers, use laser-powered
          blaster firearms. In the outer reaches of the galaxy, crime syndicates
          such as the Hutt cartel are dominant. Bounty hunters are often
          employed by both gangsters and governments. Illicit activities include
          smuggling and slavery.
        </p>
      </div>
    </Container>
  );
}
