import React from 'react';
import { Link, } from 'react-router-dom';
import { Card, } from 'semantic-ui-react';

const CharacterIndexCard = (props) => {
  const { name, url, } = props.character

  return (
    <Card as={Link} to={{pathname: "/character", url: url}} color="yellow">
      <Card.Content >
        <Card.Header>{name}</Card.Header>
      </Card.Content>
    </Card>
  );
};


export default CharacterIndexCard;