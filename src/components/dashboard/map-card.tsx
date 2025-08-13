
"use client";

import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
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
import { Skeleton } from "@/components/ui/skeleton";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

export function MapCard() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null)
  }, []);

  const onZoomIn = () => {
    if (map) {
      const currentZoom = map.getZoom() || 0;
      map.setZoom(currentZoom + 1);
    }
  }

  const onZoomOut = () => {
    if (map) {
      const currentZoom = map.getZoom() || 0;
      map.setZoom(currentZoom - 1);
    }
  }

  const onRecenter = () => {
    if (map) {
      map.panTo(center);
    }
  }

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
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onLoad={setMap}
            onUnmount={onUnmount}
            options={{
              disableDefaultUI: true,
              streetViewControl: false,
              mapTypeControl: false
            }}
          >
            <MarkerF position={center} icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "hsl(var(--primary))",
                fillOpacity: 1,
                strokeWeight: 0
            }}/>
             <MarkerF position={center} />
          </GoogleMap>
        ) : (
          <Skeleton className="w-full h-[400px]" />
        )}
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
          <Button variant="outline" size="icon" className="bg-background" onClick={onZoomIn}>
            <ZoomIn />
          </Button>
          <Button variant="outline" size="icon" className="bg-background" onClick={onZoomOut}>
            <ZoomOut />
          </Button>
          <Button variant="outline" size="icon" className="bg-background" onClick={onRecenter}>
            <Navigation />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
