import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import { Card, Header, Segment, } from 'semantic-ui-react';
import CharacterIndexCard from './CharacterIndexCard';

const Home = () => {
  const [characters, setCharacters] = useState([])

  const fetchData = async () => {
    let data = await axios.get(`https://swapi.co/api/people/`);
    return data;
  };

  useEffect( () => {
      fetchData().then( res => {
        setCharacters(res.data.results)
      });
  }, []);

  return (
    <Segment inverted>
      <Header as="h1" color="yellow">Star Wars Characters</Header>
      {
        characters.length === 0 ?
        <Header as="h2" color="yellow">Loading...</Header>
        :
        <Card.Group>
          {
            characters.map( character => (
              <CharacterIndexCard character={character} />
            ))
          }
        </Card.Group>
      }
    </Segment>
  );
};

export default Home;