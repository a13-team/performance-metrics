import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <Text fontSize="4xl" fontWeight="bold">
          Business Dashboard
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} w="full">
          <StatCard title="Sales" value="1,200" change="+5%" icon={<FaShoppingCart />} color="green.500" />
          <StatCard title="Revenue" value="$34,000" change="+10%" icon={<FaDollarSign />} color="blue.500" />
          <StatCard title="Customers" value="300" change="-2%" icon={<FaUsers />} color="red.500" />
          <StatCard title="Growth" value="15%" change="+3%" icon={<FaChartLine />} color="purple.500" />
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

const StatCard = ({ title, value, change, icon, color }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" w="full">
      <HStack spacing={4}>
        <IconButton aria-label={title} icon={icon} size="lg" colorScheme={color} isRound />
        <VStack align="start">
          <Stat>
            <StatLabel>{title}</StatLabel>
            <StatNumber>{value}</StatNumber>
            <StatHelpText>
              <StatArrow type={change.startsWith("+") ? "increase" : "decrease"} />
              {change}
            </StatHelpText>
          </Stat>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Index;
