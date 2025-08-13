
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ChatMessage = ({ author, message, avatar }: { author: string; message: string; avatar: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        {avatar}
        <div className="flex flex-col">
        <p className="font-bold">{author}</p>
        <p>{message}</p>
        </div>
    </div>
)

export function AiChatCard() {
    const [chatMessage, setChatMessage] = useState("");

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary"/>
            <CardTitle>AI Assistant</CardTitle>
        </div>
        <CardDescription>
          Ask for assistance with the detected threats.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 h-[330px]">
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
      </CardContent>
    </Card>
  );
}
