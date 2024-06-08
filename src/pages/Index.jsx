import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, IconButton, Heading } from "@chakra-ui/react";
import ChartSet from "../components/ChartSet.jsx";
import { FaChartLine, FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={10}>
        <Text fontSize="3xl" fontWeight="bold">
          Business Dashboard
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} w="full">
          <StatCard title="Sales" value="1,200" change="+5%" icon={<FaShoppingCart />} color="green.500" />
          <StatCard title="Revenue" value="$34,000" change="+10%" icon={<FaDollarSign />} color="blue.500" />
          <StatCard title="Customers" value="300" change="-2%" icon={<FaUsers />} color="red.500" />
          <StatCard title="Growth" value="15%" change="+3%" icon={<FaChartLine />} color="purple.500" />
          <StatCard title="RU" value="500" change="+2%" icon={<FaChartLine />} color="orange.500" />
          <StatCard title="RUEU" value="300" change="+1%" icon={<FaChartLine />} color="yellow.500" />
          <StatCard title="AR" value="200" change="-1%" icon={<FaChartLine />} color="pink.500" />
          <StatCard title="EN" value="400" change="+4%" icon={<FaChartLine />} color="cyan.500" />
          <StatCard title="NN" value="100" change="0%" icon={<FaChartLine />} color="teal.500" />
          <StatCard title="Total" value="1,500" change="+3%" icon={<FaChartLine />} color="gray.500" />
        </SimpleGrid>
        <Heading as="h2" size="lg" mt={10}>
          Leads by Buyers
        </Heading>
        <ChartSet title="Leads by Buyers" />

        <Heading as="h2" size="lg" mt={10}>
          Leads by Landings
        </Heading>
        <ChartSet title="Leads by Landings" />

        <Heading as="h2" size="lg" mt={10}>
          Leads by Partner
        </Heading>
        <ChartSet title="Leads by Partner" />
      </VStack>
    </Container>
  );
};

const StatCard = ({ title, value, change, icon, color }) => {
  return (
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" w="full" bg={color}>
      <HStack spacing={4}>
        <IconButton aria-label={title} icon={icon} size="md" colorScheme={color} isRound />
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
