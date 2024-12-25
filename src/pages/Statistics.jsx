import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpRight, Users, DollarSign, Activity } from "lucide-react";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
];

const barData = [
  { name: "Mon", value: 20 },
  { name: "Tue", value: 45 },
  { name: "Wed", value: 30 },
  { name: "Thu", value: 60 },
  { name: "Fri", value: 40 },
];

const StatCard = ({ title, value, icon: Icon, trend }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-semibold">{value}</h3>
          <div className="flex items-center mt-2">
            <span className="text-emerald-500 text-sm flex items-center">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              {trend}%
            </span>
            <span className="text-gray-400 text-sm ml-2">vs last month</span>
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </Card>
  </motion.div>
);

const Statistics = () => {
  const [hoveredChart, setHoveredChart] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50/50 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-3xl font-semibold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dashboard Overview
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Users" value="2,543" icon={Users} trend={12} />
          <StatCard title="Revenue" value="$45,234" icon={DollarSign} trend={8} />
          <StatCard title="Active Users" value="1,235" icon={Activity} trend={15} />
          <StatCard title="Conversion Rate" value="3.24%" icon={ArrowUpRight} trend={4} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm"
            onHoverStart={() => setHoveredChart("line")}
            onHoverEnd={() => setHoveredChart(null)}
          >
            <h3 className="text-lg font-medium mb-4">Revenue Trend</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={hoveredChart === "line" ? "#10b981" : "#6366f1"}
                    strokeWidth={2}
                    dot={{ strokeWidth: 2 }}
                    animationDuration={2000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm"
            onHoverStart={() => setHoveredChart("bar")}
            onHoverEnd={() => setHoveredChart(null)}
          >
            <h3 className="text-lg font-medium mb-4">Weekly Activity</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
                    }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill={hoveredChart === "bar" ? "#10b981" : "#6366f1"}
                    radius={[4, 4, 0, 0]}
                    animationDuration={2000}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;