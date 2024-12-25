import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const generateDataByType = (type) => {
  switch (type) {
    case "Leads by Buyers":
      return [
        { name: "Enterprise", value: 850 },
        { name: "Small Business", value: 620 },
        { name: "Startups", value: 430 },
        { name: "Individual", value: 280 },
        { name: "Government", value: 190 },
        { name: "Non-Profit", value: 150 }
      ];
    case "Leads by Landings":
      return [
        { name: "Homepage", value: 750 },
        { name: "Product Page", value: 580 },
        { name: "Blog", value: 420 },
        { name: "Pricing", value: 380 },
        { name: "Features", value: 290 },
        { name: "About Us", value: 180 }
      ];
    case "Leads by Partner":
      return [
        { name: "Microsoft", value: 680 },
        { name: "Amazon", value: 540 },
        { name: "Google", value: 490 },
        { name: "IBM", value: 380 },
        { name: "Oracle", value: 320 },
        { name: "Salesforce", value: 290 }
      ];
    default:
      return [];
  }
};

const ChartSet = ({ title }) => {
  const data = generateDataByType(title);

  return (
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" w="full" bg="white">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        {title}
      </Text>
      <Box h="300px">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ChartSet;