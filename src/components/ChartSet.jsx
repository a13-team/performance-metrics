import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ChartSet = ({ title }) => {
  return (
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" w="full">
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      {}
      <Box h="200px" bg="gray.100" mt={4} />
    </Box>
  );
};

export default ChartSet;
