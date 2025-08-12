"use client";

import { Line, LineChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartTooltipContent } from "@/components/ui/chart";
import { Cpu } from "lucide-react";

const chartData = [
  { time: "12:00", cpu: 32, gpu: 45 },
  { time: "12:05", cpu: 41, gpu: 51 },
  { time: "12:10", cpu: 52, gpu: 62 },
  { time: "12:15", cpu: 58, gpu: 60 },
  { time: "12:20", cpu: 48, gpu: 55 },
  { time: "12:25", cpu: 50, gpu: 61 },
  { time: "12:30", cpu: 60, gpu: 70 },
  { time: "12:35", cpu: 55, gpu: 65 },
];

export function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <Cpu className="h-6 w-6 text-primary"/>
            <CardTitle>Performance Monitoring</CardTitle>
        </div>
        <CardDescription>Real-time CPU and GPU usage.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 10, left: -10, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="time"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  cursor={{ stroke: "hsl(var(--accent))", strokeWidth: 2, strokeDasharray: "3 3" }}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Line
                  dataKey="cpu"
                  type="monotone"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={false}
                  name="CPU (%)"
                />
                <Line
                  dataKey="gpu"
                  type="monotone"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={false}
                  name="GPU (%)"
                />
              </LineChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
