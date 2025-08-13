import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AttackDetailItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="grid grid-cols-[150px_1fr] items-start">
    <span className="font-semibold text-muted-foreground">{label}</span>
    <div className="flex items-center">
      <span className="mr-2">:</span>
      <span>{value}</span>
    </div>
  </div>
);

export function AttackDetailsCard() {
  const details = [
    {
      label: "Description",
      value:
        "Suspicious CAN frames detected with abnormal torque and brake values",
    },
    { label: "Attack Vector", value: "Internal Network / Diagnostic Port" },
    { label: "First Detected", value: "May 10, 14:37:12 GMT" },
    { label: "Source IP / MAC", value: "192.168.10.14 / EC:12:FF:A:C.93" },
    { label: "Integrity Risk", value: "Brake override / Throttle mismatch" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Attack Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {details.map((detail) => (
          <AttackDetailItem
            key={detail.label}
            label={detail.label}
            value={detail.value}
          />
        ))}
      </CardContent>
    </Card>
  );
}
