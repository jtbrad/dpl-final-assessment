import React from 'react';
import { Card, Segment, } from 'semantic-ui-react';

const CharacterCard = (props) => (
  <Segment inverted>
    <Card color="yellow">
      <Card.Content>
      <Card.Header>{props.characterInfo.name}</Card.Header>
      <Card.Description>Birth Year: {props.characterInfo.birth_year}</Card.Description>
      <Card.Description>Homeworld: {props.homeworld}</Card.Description>
      </Card.Content>
    </Card>
  </Segment>
);

export default CharacterCard;