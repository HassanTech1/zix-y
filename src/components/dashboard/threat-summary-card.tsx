
"use client";

import React, { useState } from "react";
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
import { ShieldCheck, ShieldAlert, ShieldQuestion, Copy, Download } from "lucide-react";

type ThreatStatus = "mitigated" | "active" | "undetermined";

export function ThreatSummaryCard() {
  const [status, setStatus] = useState<ThreatStatus>("mitigated");

  const threatDetails = {
    mitigated: [
      { label: "Status", value: "MITIGATED" },
      { label: "Mitigation Actions Taken", value: "KILLED" },
      { label: "AI Confidence Level", value: "MALICIOUS" },
      { label: "Quarantined", value: "01/1" },
    ],
    active: [
        { label: "Status", value: "ACTIVE" },
        { label: "Detected Anomaly", value: "UNAUTHORIZED_COMMAND" },
        { label: "AI Confidence Level", value: "HIGH" },
        { label: "Actions Pending", value: "Analyst Review" },
    ],
    undetermined: [
        { label: "Status", value: "UNPREPARED" },
        { label: "Anomaly", value: "Unknown" },
        { label: "AI Confidence Level", value: "LOW" },
        { label: "Required Action", value: "Immediate Investigation" },
    ],
  };

  const threatIcons: Record<ThreatStatus, React.ReactNode> = {
    mitigated: <ShieldCheck className="h-20 w-20 text-green-500" />,
    active: <ShieldAlert className="h-20 w-20 text-red-500" />,
    undetermined: <ShieldQuestion className="h-20 w-20 text-muted-foreground" />,
  }

  const currentDetails = threatDetails[status];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-6">
            {threatIcons[status]}
            <div>
              <h2 className="text-lg font-bold text-primary mb-4">Threat</h2>
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                {currentDetails.map((detail) => (
                  <React.Fragment key={detail.label}>
                    <div className="font-semibold text-muted-foreground">{detail.label}</div>
                    <div className="flex items-center">
                      <span className="mr-2">:</span>
                      <span>{detail.value}</span>
                    </div>
                  </React.Fragment>
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
                <Label htmlFor="threat-status-sim">Simulate Threat Status:</Label>
                <Select value={status} onValueChange={(value) => setStatus(value as ThreatStatus)}>
                  <SelectTrigger id="threat-status-sim" className="w-[180px]">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mitigated">Success (Mitigated)</SelectItem>
                    <SelectItem value="active">Danger (Active)</SelectItem>
                    <SelectItem value="undetermined">Unprepared</SelectItem>
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
