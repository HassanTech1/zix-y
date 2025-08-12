import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Video } from "lucide-react";

export function LiveFeedCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <Video className="h-6 w-6 text-primary"/>
            <CardTitle>Live Feed</CardTitle>
        </div>
        <CardDescription>Primary forward-facing camera view.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video overflow-hidden rounded-lg border">
          <Image
            src="https://placehold.co/800x450.png"
            alt="Live camera feed"
            width={800}
            height={450}
            className="w-full h-full object-cover"
            data-ai-hint="road street"
          />
        </div>
      </CardContent>
    </Card>
  );
}
