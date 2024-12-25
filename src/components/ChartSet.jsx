import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const generateRandomData = (count) => {
  const data = [];
  const sources = ["Google", "Facebook", "Direct", "Referral", "Email", "Other"];
  
  for (let i = 0; i < count; i++) {
    data.push({
      name: sources[i],
      value: Math.floor(Math.random() * 1000) + 100,
    });
  }
  return data;
};

const ChartSet = ({ title }) => {
  const data = generateRandomData(6);

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