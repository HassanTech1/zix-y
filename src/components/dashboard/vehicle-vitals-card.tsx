import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity } from "lucide-react";

export function VehicleVitalsCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          <CardTitle>Vehicle Vitals</CardTitle>
        </div>
        <CardDescription>
          Real-time energy and speed metrics.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 pt-4">
        <div>
          <h3 className="text-lg font-medium text-primary mb-2">
            Vehicle energy
          </h3>
          <div className="flex items-center gap-4">
            <Progress value={70} className="h-5" indicatorClassName="bg-green-500" />
            <span className="font-semibold text-lg">70%</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-primary mb-2">
            Vehicle speed
          </h3>
          <div className="flex items-center gap-4">
            <Progress value={50} className="h-5" />
            <span className="font-semibold text-lg">50 km/h</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
