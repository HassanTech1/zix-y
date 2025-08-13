import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Car } from "lucide-react";
  
  const DetailItem = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between py-2 border-b border-dashed">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
  
  export function VehicleDetailsCard() {
    const leftDetails = [
      { label: "Console Connectivity", value: "Online" },
      { label: "Full Disk Scan", value: "Completed at Jan 20, 2025 19:45:47" },
      { label: "Pending Reboot", value: "No" },
      { label: "Number of Not Mitigated Threats", value: "0" },
      { label: "Network Status", value: "Connected" },
      { label: "Domain", value: "SPOS" },
      { label: "IP v4 Address", value: "10.1.10.85" },
    ];
  
    const rightDetails = [
      { label: "At detection Time", value: "" },
      { label: "Scope", value: "HCL / America / Default Group" },
      { label: "OS Version", value: "ROS" },
      { label: "Agent Version", value: "23.4.6.347" },
      { label: "Policy", value: "Protect" },
      { label: "Logged In User", value: "SIERRA" },
      { label: "UUID", value: "d7c1af04e68a4b82a80dabda6e061695" },
      { label: "IP v6 Address", value: "N/A" },
      { label: "Console Visible IP Address", value: "70.89.204.134" },
      { label: "Subscription Time", value: "Jan 16, 2025 22:34:55" },
    ];
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Vehicle Details</CardTitle>
          <CardDescription>Real-time data about the vehicle</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 mb-6">
            <div className="p-3 bg-primary/10 rounded-md">
              <Car className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold text-lg">Tesla</p>
              <p className="text-sm text-muted-foreground">
                HCL / America / Default Group
              </p>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div>
              {leftDetails.map((item) => (
                <DetailItem key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
            <div>
              {rightDetails.map((item) => (
                <DetailItem key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  