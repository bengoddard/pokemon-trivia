import { Box, VStack, Heading, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <Box textAlign="center" py={20} bg="blue.500" minH="100vh" color="white">
      <VStack gap={8}>
        <Heading size="4xl">Pokémon Trivia</Heading>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          boxSize="150px"
        />
        <Button as={Link} to="/play" colorPalette="yellow" size="lg">
          Start Game
        </Button>
      </VStack>
    </Box>
  );
}

export default Home;