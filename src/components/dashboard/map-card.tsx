import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Map, Pin, ZoomIn, ZoomOut, Navigation, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function MapCard() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Map className="h-6 w-6 text-primary" />
          <CardTitle>Location</CardTitle>
        </div>
        <CardDescription>
          Real-time vehicle location and navigation.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 relative">
        <Image
          src="https://placehold.co/1200x400.png"
          width={1200}
          height={400}
          alt="Map of vehicle location"
          className="w-full h-auto"
          data-ai-hint="map"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <div className="flex bg-background rounded-md p-1 items-center">
            <Input
              type="search"
              placeholder="Search location..."
              className="w-full appearance-none bg-background shadow-none h-8 border-0 focus-visible:ring-0"
            />
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <Button variant="outline" size="icon" className="bg-background">
            <ZoomIn />
          </Button>
          <Button variant="outline" size="icon" className="bg-background">
            <ZoomOut />
          </Button>
          <Button variant="outline" size="icon" className="bg-background">
            <Navigation />
          </Button>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Pin className="w-8 h-8 text-primary fill-primary" />
        </div>
      </CardContent>
    </Card>
  );
}
