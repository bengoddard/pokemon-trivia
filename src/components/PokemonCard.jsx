import React from "react";
import { Box, Image, Spinner, Center } from "@chakra-ui/react";

const PokemonCard = ({ pokemon, isCorrect, isLoading }) => {
  if (isLoading) {
    return (
      <Center boxSize="250px">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  return (
    <Box border="4px solid" borderColor="white" borderRadius="full" p={8} bg="whiteAlpha.800" shadow="xl">
      <Image
        src={pokemon?.sprites.other['official-artwork'].front_default}
        alt="Pokemon"
        boxSize="250px"
      />
    </Box>
  );
};

export default PokemonCard;