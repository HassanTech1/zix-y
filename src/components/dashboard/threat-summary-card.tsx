import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Copy, Download } from "lucide-react";

export function ThreatSummaryCard() {
  const threatDetails = [
    { label: "Status", value: "MITIGATED" },
    { label: "Mitigation Actions Taken", value: "KILLED" },
    { label: "AI Confidence Level", value: "MALICIOUS" },
    { label: "Quarantined", value: "01/1" },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-6">
            <ShieldCheck className="h-20 w-20 text-teal-500" />
            <div>
              <h2 className="text-lg font-bold text-primary mb-4">Threat</h2>
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                {threatDetails.map((detail) => (
                  <>
                    <div className="font-semibold text-muted-foreground">{detail.label}</div>
                    <div className="flex items-center">
                      <span className="mr-2">:</span>
                      <span>{detail.value}</span>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
             <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Copy className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                </Button>
            </div>
            <div className="flex items-end gap-4 mt-6">
              <div className="grid gap-1.5">
                <Label htmlFor="analyst-verdict">Analyst Verdict:</Label>
                <Select defaultValue="true-positive">
                  <SelectTrigger id="analyst-verdict" className="w-[180px]">
                    <SelectValue placeholder="Select verdict" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true-positive">True Positive</SelectItem>
                    <SelectItem value="false-positive">False Positive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="incident-status">Incident Status:</Label>
                <Select defaultValue="resolved">
                  <SelectTrigger id="incident-status" className="w-[180px]">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
