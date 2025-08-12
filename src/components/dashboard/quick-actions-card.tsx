import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, ShieldCheck, Terminal, AlertTriangle } from "lucide-react";

export function QuickActionsCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary"/>
          <CardTitle>Quick Actions</CardTitle>
        </div>
        <CardDescription>Access critical system commands.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        <Button variant="outline">
          <ShieldCheck className="mr-2 h-4 w-4" /> Run Diagnostics
        </Button>
        <Button variant="outline">
          <Terminal className="mr-2 h-4 w-4" /> View System Logs
        </Button>
        <Button variant="destructive">
          <AlertTriangle className="mr-2 h-4 w-4" /> Engage Manual Override
        </Button>
      </CardContent>
    </Card>
  );
}
