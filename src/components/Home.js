import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import { Card, Header, } from 'semantic-ui-react';
import CharacterIndexCard from './CharacterIndexCard';

const Home = () => {
  const [characters, setCharacters] = useState([])

  useEffect( () => {
    axios.get(`https://swapi.co/api/people/`)
      .then( res => {
        setCharacters(res.data.results)
      })
    }, []);

  return (
    <>
      <Header as="h1">Star Wars Characters</Header>
      <Card.Group>
        {
          characters.map( character => (
            <CharacterIndexCard character={character} />
          ))
        }
      </Card.Group>
    </>
  );
};


export default Home;