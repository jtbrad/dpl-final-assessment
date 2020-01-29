import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import { Card, } from 'semantic-ui-react';

const Character = (props) => {
  const url = props.location.url;
  const [characterInfo, setCharacterInfo] = useState({name: "", birth_year: ""});
  const [homeworld, setHomeworld] = useState("");

  useEffect( () => {
    axios.get(url)
      .then( res => {
        setCharacterInfo(res.data)
        axios.get(res.data.homeworld)
          .then( res => {
            setHomeworld(res.data.name)
          })
      })
  }, []);


  return (
    <Card>
      <Card.Content>
      <Card.Header>{characterInfo.name}</Card.Header>
      <Card.Description>Birth Year: {characterInfo.birth_year}</Card.Description>
      <Card.Description>Homeworld: {homeworld}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Character;