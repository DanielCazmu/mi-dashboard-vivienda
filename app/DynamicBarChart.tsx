import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataItem {
  categoria: string;
  presupuestado: number;
  gastado: number;
}

interface DynamicBarChartProps {
  data: DataItem[];
}

export default function DynamicBarChart({ data }: DynamicBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="categoria" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="presupuestado" fill="#8884d8" name="Presupuestado" />
        <Bar dataKey="gastado" fill="#82ca9d" name="Gastado" />
      </BarChart>
    </ResponsiveContainer>
  );
}