import React, { useState, useEffect } from "react";
import { Input, Box, Image, Button, Text, VStack, Heading, HStack, Badge } from '@chakra-ui/react';

function App({ Component, pageProps }){
    const [pokemon, setPokemon] = useState(null);
    const [count, setCount] = useState(0);
    const [guess, setGuess] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [message, setMessage] = useState("");
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);

    const handleCheckGuess = () => {
    if (guess.toLowerCase().trim() === pokemon.species.name.toLowerCase()) {
      setMessage(`Correct! It's ${pokemon.species.name}!`);
      setIsCorrect(true);
      setCorrectCount(prev => prev + 1);
      setTimeout(() => {
      setCount(prev => prev + 1);
    }, 2000);
    } else {
      setMessage("Incorrect! Try again.");
      setWrongCount(prev => prev + 1);
    }
  }

    useEffect(() => {
        setGuess("");
        setIsCorrect(false);
        setMessage("");
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
        <Input
        placeholder="Enter Pokemon Name"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        width="300px"
        textAlign="center"
        disabled={isCorrect}
      />
        <HStack gap="4" justify="center">
        <Button
            colorPalette="black"
            onClick={handleCheckGuess}
            disabled={isCorrect}
        >
            Submit Guess
        </Button>

        <Button
            variant="outline"
            colorPalette="gray"
            onClick={() => setCount(prev => prev + 1)}
        >
            Next
        </Button>
        </HStack>

        <Box mt={4}>
        <Text status={isCorrect ? "success" : "error"} borderRadius="md">
        {message}
        </Text>
        </Box>
        <HStack gap={10} mb={6}>
            <VStack>
            <Text fontSize="sm">CORRECT</Text>
            <Badge colorPalette="green" fontSize="xl">{correctCount}</Badge>
            </VStack>

            <VStack>
            <Text fontSize="sm">INCORRECT</Text>
            <Badge colorPalette="red" fontSize="xl">{wrongCount}</Badge>
            </VStack>
        </HStack>
      </VStack>
    </Box>
	);
}

export default App;