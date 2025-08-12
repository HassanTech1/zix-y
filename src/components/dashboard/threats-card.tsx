
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
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const threats = [
  { alert: "Unexpected Obstacle", time: "14:32:10", system: "LIDAR", status: "Critical" },
  { alert: "GPS Signal Lost", time: "14:31:55", system: "Navigation", status: "High" },
  { alert: "Camera Occlusion", time: "14:30:02", system: "Perception", status: "Medium" },
  { alert: "Low Tire Pressure", time: "14:28:45", system: "Vehicle Health", status: "Low" },
];

const ChatMessage = ({ author, message, avatar }: { author: string; message: string; avatar: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        {avatar}
        <div className="flex flex-col">
        <p className="font-bold">{author}</p>
        <p>{message}</p>
        </div>
    </div>
)

const getStatusColor = (status: string) => {
    switch (status) {
        case "Critical":
        return "bg-red-500";
        case "High":
        return "bg-yellow-500";
        case "Medium":
        return "bg-orange-500";
        case "Low":
        return "bg-blue-500";
        default:
        return "bg-gray-500";
    }
}

export function ThreatsCard() {
    const [note, setNote] = useState("");
    const [chatMessage, setChatMessage] = useState("");

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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="indicators">
              <ShieldAlert className="mr-2 h-4 w-4" /> Threat Indicators
            </TabsTrigger>
            <TabsTrigger value="notes">
              <FileText className="mr-2 h-4 w-4" /> Notes
            </TabsTrigger>
            <TabsTrigger value="chat">
              <Bot className="mr-2 h-4 w-4" /> AI Chat
            </TabsTrigger>
          </TabsList>
          <TabsContent value="indicators" className="mt-4 pt-8">
            <div className="relative w-full">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
              <div className="relative flex justify-between">
                {threats.map((threat, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    <div className="relative">
                      <div className={cn("w-4 h-4 rounded-full z-10 relative", getStatusColor(threat.status))}></div>
                    </div>
                    <div className="absolute top-full mt-2 w-40 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card p-2 rounded-lg border shadow-lg z-20">
                      <p className="font-bold text-sm">{threat.alert}</p>
                      <p className="text-xs text-muted-foreground">{threat.system}</p>
                      <p className="text-xs text-muted-foreground">{threat.time}</p>
                      <Badge
                        variant={
                          threat.status === "Critical" || threat.status === "High"
                            ? "destructive"
                            : "secondary"
                        }
                        className="mt-1"
                      >
                        {threat.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="notes" className="mt-4">
            <div className="flex flex-col gap-4">
              <Textarea
                placeholder="Add notes about the current threats..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={6}
              />
              <Button className="self-end">Save Note</Button>
            </div>
          </TabsContent>
          <TabsContent value="chat" className="mt-4">
            <div className="flex flex-col gap-4 h-[300px]">
                <ScrollArea className="flex-1 pr-4">
                    <div className="space-y-4">
                        <ChatMessage 
                            author="AI Assistant"
                            message="Hello! How can I assist you with these threats?"
                            avatar={<Avatar><AvatarFallback>AI</AvatarFallback></Avatar>}
                        />
                         <ChatMessage 
                            author="You"
                            message="What is the standard procedure for a LIDAR obstruction?"
                            avatar={
                                <Avatar>
                                    <AvatarImage src="https://placehold.co/100x100.png" alt="User avatar" data-ai-hint="person portrait" />
                                    <AvatarFallback>ZX</AvatarFallback>
                                </Avatar>
                            }
                        />
                    </div>
                </ScrollArea>
                <div className="flex gap-2">
                    <Input 
                        placeholder="Ask AI for assistance..."
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                    />
                    <Button><Send className="h-4 w-4" /></Button>
                </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
