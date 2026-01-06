import React, { useState, useEffect } from "react";
import { Input, Box, Image, Button, Text, VStack, Heading } from '@chakra-ui/react';

function App({ Component, pageProps }){
    const [pokemon, setPokemon] = useState(null);
    const [count, setCount] = useState(0);
    const [guess, setGuess] = useState("");
    const correct_score = 0;
    const incorrect_score = 0;
    useEffect(() => {
        const randomId = Math.floor(Math.random() * 1025) + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then(response => response.json())
            .then((json => setPokemon(json)))
            .catch(error => console.error('Error fetching data:', error));
    }, [count]);
    return (
		<Box textAlign="center" py={10} bg="blue.200">
      <VStack spacing={6}>
        <Heading>Who's That Pokémon?</Heading>
        <Box border="1px" borderColor="gray.200" borderRadius="md" p={4}>
          <Image
            src={pokemon?.sprites.other['official-artwork'].front_default}
            alt="Pokemon"
            boxSize="250px"
          />
        </Box>

        <Button colorScheme="teal" onClick={() => setCount(prev => prev + 1)}>
          Next Pokémon
        </Button>
      </VStack>
    </Box>
	);
}

export default App;