
"use client";

import { Line, LineChart, CartesianGrid, XAxis, AreaChart, Area } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu, Network } from "lucide-react";

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

const networkData = [
    { time: "12:00", upload: 20, download: 30 },
    { time: "12:05", upload: 25, download: 35 },
    { time: "12:10", upload: 30, download: 40 },
    { time: "12:15", upload: 28, download: 38 },
    { time: "12:20", upload: 35, download: 45 },
    { time: "12:25", upload: 40, download: 50 },
    { time: "12:30", upload: 38, download: 48 },
    { time: "12:35", upload: 45, download: 55 },
];

const chartConfig = {
  cpu: {
    label: "CPU",
    color: "hsl(var(--primary))",
  },
  gpu: {
    label: "GPU",
    color: "hsl(var(--accent))",
  },
  upload: {
      label: "Upload",
      color: "hsl(var(--chart-2))",
  },
  download: {
      label: "Download",
      color: "hsl(var(--chart-1))",
  }
};

export function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Cpu className="h-6 w-6 text-primary" />
          <CardTitle>Performance Monitoring</CardTitle>
        </div>
        <CardDescription>Real-time system performance metrics.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="cpu-gpu">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cpu-gpu">CPU & GPU Performance</TabsTrigger>
            <TabsTrigger value="network">Network</TabsTrigger>
          </TabsList>
          <TabsContent value="cpu-gpu">
            <div className="h-[300px] w-full pt-4">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <AreaChart
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
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <defs>
                    <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-cpu)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--color-cpu)" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorGpu" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-gpu)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--color-gpu)" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="cpu"
                    type="monotone"
                    fill="url(#colorCpu)"
                    stroke="var(--color-cpu)"
                    strokeWidth={2}
                    dot={false}
                    name="CPU (%)"
                  />
                  <Area
                    dataKey="gpu"
                    type="monotone"
                    fill="url(#colorGpu)"
                    stroke="var(--color-gpu)"
                    strokeWidth={2}
                    dot={false}
                    name="GPU (%)"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </TabsContent>
          <TabsContent value="network">
            <div className="h-[300px] w-full pt-4">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <AreaChart
                  data={networkData}
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
                   <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <defs>
                    <linearGradient id="colorUpload" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-upload)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--color-upload)" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorDownload" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-download)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--color-download)" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="upload"
                    type="monotone"
                    fill="url(#colorUpload)"
                    stroke="var(--color-upload)"
                    strokeWidth={2}
                    dot={false}
                    name="Upload (Mbps)"
                  />
                  <Area
                    dataKey="download"
                    type="monotone"
                    fill="url(#colorDownload)"
                    stroke="var(--color-download)"
                    strokeWidth={2}
                    dot={false}
                    name="Download (Mbps)"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
