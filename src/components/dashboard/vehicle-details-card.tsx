import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Car, HardDrive, Wifi, Network, GitBranch, Cpu } from "lucide-react";

const details = [
  { icon: Cpu, label: "Console", value: "ZX-Primary-A" },
  { icon: GitBranch, label: "OS Version", value: "ZiaOS 14.2.1" },
  { icon: Wifi, label: "Network", value: "5G Cellular" },
  { icon: Network, label: "IP Address", value: "192.168.1.10" },
  { icon: HardDrive, label: "Storage", value: "78% Free" },
];

export function VehicleDetailsCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Car className="h-6 w-6 text-primary" />
          <CardTitle>Vehicle Details</CardTitle>
        </div>
        <CardDescription>Core system and network information.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {details.map((detail, index) => (
            <li key={detail.label}>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <detail.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">{detail.label}</span>
                </div>
                <span className="font-medium">{detail.value}</span>
              </div>
              {index < details.length - 1 && <Separator className="mt-4" />}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
