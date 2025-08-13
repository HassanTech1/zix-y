
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, Bot, FileText, Send } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const threats = [
    { time: "14:37:12", description: "Abnormal CAN frames detected" },
    { time: "14:37:32", description: "Repeated spoofing frames" },
    { time: "14:36:05", description: "ECU throttle command blocked" },
    { time: "14:38:50", description: "Agent mitigated anomaly" },
];

export function ThreatsCard() {
    const [note, setNote] = useState("");

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <ShieldAlert className="h-6 w-6 text-destructive"/>
            <CardTitle>Potential Threats Detected</CardTitle>
        </div>
        <CardDescription>
          Live feed of potential threats and system alerts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="indicators">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="indicators">
              <ShieldAlert className="mr-2 h-4 w-4" /> Threat Indicators
            </TabsTrigger>
            <TabsTrigger value="notes">
              <FileText className="mr-2 h-4 w-4" /> Notes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="indicators" className="mt-4 pt-4">
            <div className="relative pl-6">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
                {threats.map((threat, index) => (
                    <div key={index} className="relative flex items-start gap-4 mb-6">
                        <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary -translate-x-1/2"></div>
                        <div className="pl-4">
                            <p className="text-sm text-muted-foreground">{threat.time}</p>
                            <p className="font-medium">{threat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="notes" className="mt-4">
            <div className="flex flex-col gap-4">
              <Textarea
                placeholder="Add notes about the current threats..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={8}
              />
              <Button className="self-end">Save Note</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
