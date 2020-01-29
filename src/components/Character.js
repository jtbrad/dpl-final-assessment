import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Header, } from 'semantic-ui-react';

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
    <>
      {
        homeworld === "" ?
        <Header>Loading</Header>
        :
        <CharacterCard characterInfo={characterInfo} homeworld={homeworld} />
      }
    </>
  );
};

export default Character;