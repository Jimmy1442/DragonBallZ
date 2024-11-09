// src/pages/NonHumansPage.jsx
import React, { useEffect, useState } from 'react';
import { Grid, Container, CircularProgress } from '@mui/material';
import CharacterCard from '../components/CharacterCard';
import { getCharacters } from '../api';

const NonHumansPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      const nonHumanCharacters = data.filter(char => char.race !== 'Human');
      setCharacters(nonHumanCharacters);
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NonHumansPage;