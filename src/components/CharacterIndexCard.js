import React from 'react';
import { Card, } from 'semantic-ui-react';

const CharacterIndexCard = (props) => {
  const { name, } = props.character

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
    </Card>
  );
};


export default CharacterIndexCard;