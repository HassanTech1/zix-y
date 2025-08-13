
"use client";

import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Car } from "lucide-react";
import { CarModel } from "./car-model";

const StatusIndicator = ({ label, operational }: { label: string; operational: boolean }) => (
    <div className="flex items-center gap-2">
        <div className={`h-3 w-3 rounded-full ${operational ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
        <span className="text-sm font-medium">{label}:</span>
        <span className="text-sm text-muted-foreground">{operational ? 'Operational' : 'Error'}</span>
    </div>
)

export function VehicleStatusCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <Car className="h-6 w-6 text-primary"/>
            <CardTitle>Vehicle XA-7</CardTitle>
        </div>
        <CardDescription>Overall system status overview.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative aspect-video overflow-hidden rounded-lg border">
          <Suspense fallback={<div className="w-full h-full bg-muted animate-pulse" />}>
            <CarModel />
          </Suspense>
        </div>
        <div className="flex flex-col justify-center space-y-4">
            <StatusIndicator label="System Status" operational={true} />
            <StatusIndicator label="AI Driver" operational={true} />
            <StatusIndicator label="Connectivity" operational={true} />
        </div>
      </CardContent>
    </Card>
  );
}
