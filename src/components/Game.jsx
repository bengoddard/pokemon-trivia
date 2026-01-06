import React, { useState, useEffect } from "react";
import { Input, Box, Image, Button, Text, VStack, Heading, HStack, Badge } from '@chakra-ui/react';
import { usePokemon } from "../hooks/usePokemon";
import ScoreBoard from "./ScoreBoard";
import PokemonCard from "./PokemonCard";

function Game(){
    const [count, setCount] = useState(0);
    const [guess, setGuess] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const { pokemon, isLoading, error } = usePokemon(count);

    const handleCheckGuess = () => {
    if (guess.toLowerCase().trim() === pokemon.species.name.toLowerCase()) {
      setIsCorrect(true);
      setCorrectCount(prev => prev + 1);
      setTimeout(() => {
      setCount(prev => prev + 1);
      setGuess("");
      setIsCorrect(false);
    }, 2000);
    } else {
      setWrongCount(prev => prev + 1);
    }
  }

    return (
		<Box textAlign="center" py={10} bg="blue.200" minH="100vh">
            <VStack gap={6}>
                <Heading size="2xl" color="white">Who's That Pokémon?</Heading>

                <ScoreBoard correct={correctCount} wrong={wrongCount} />

                {error ? <Text color="red.500">{error}</Text> : (
                    <PokemonCard pokemon={pokemon} isCorrect={isCorrect} isLoading={isLoading} />
                )}

                <Input
                    placeholder="Enter Pokemon Name"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    width="300px"
                    bg="white"
                    disabled={isCorrect || isLoading}
                />

                <HStack gap="4">
                    <Button colorPalette="blue" onClick={handleCheckGuess} disabled={isCorrect || isLoading}>
                        Submit
                    </Button>
                    <Button variant="outline" bg="white" onClick={() => setCount(prev => prev + 1)}>
                        Skip
                    </Button>
                </HStack>
            </VStack>
        </Box>
	);
}

export default Game;