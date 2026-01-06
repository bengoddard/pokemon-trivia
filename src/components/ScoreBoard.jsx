import React from "react";
import { HStack, VStack, Text, Badge } from "@chakra-ui/react";

const ScoreBoard = ({ correct, wrong }) => {
  return (
    <HStack gap={10} mb={6} bg="whiteAlpha.500" p={4} borderRadius="lg">
      <VStack>
        <Text fontSize="sm" fontWeight="bold">CORRECT</Text>
        <Badge colorPalette="green" fontSize="2xl">{correct}</Badge>
      </VStack>
      <VStack>
        <Text fontSize="sm" fontWeight="bold">INCORRECT</Text>
        <Badge colorPalette="red" fontSize="2xl">{wrong}</Badge>
      </VStack>
    </HStack>
  );
};

export default ScoreBoard;