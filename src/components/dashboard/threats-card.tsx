import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert } from "lucide-react";

const threats = [
  { alert: "Unexpected Obstacle", time: "14:32:10", system: "LIDAR", status: "Critical" },
  { alert: "GPS Signal Lost", time: "14:31:55", system: "Navigation", status: "High" },
  { alert: "Camera Occlusion", time: "14:30:02", system: "Perception", status: "Medium" },
  { alert: "Low Tire Pressure", time: "14:28:45", system: "Vehicle Health", status: "Low" },
];

export function ThreatsCard() {
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Alert</TableHead>
              <TableHead>System</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {threats.map((threat) => (
              <TableRow key={threat.alert}>
                <TableCell className="font-medium">{threat.alert}</TableCell>
                <TableCell>{threat.system}</TableCell>
                <TableCell>{threat.time}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant={
                      threat.status === "Critical" || threat.status === "High"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {threat.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
