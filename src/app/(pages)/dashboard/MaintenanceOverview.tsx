"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";

const data = [
  { status: "Resolved", value: 35, fill: "hsl(142, 76%, 36%)" }, // Green
  { status: "In Progress", value: 30, fill: "hsl(207, 86%, 67%)" }, // Blue
  { status: "Open", value: 35, fill: "hsl(45, 93%, 47%)" }, // Yellow
];

export default function MaintenanceOverview() {
  return (
    <Card className="border-1 border-[#E9EBF3] rounded-[8px] shadow-[4px_2px_4px_#DFE5F9]">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl font-semibold">
          Maintenance overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
          <ChartContainer
            config={{
              status: {
                label: "Status",
              },
              resolved: {
                label: "Resolved",
                color: "hsl(142, 76%, 36%)",
              },
              inProgress: {
                label: "In Progress",
                color: "hsl(207, 86%, 67%)",
              },
              open: {
                label: "Open",
                color: "hsl(45, 93%, 47%)",
              },
            }}
            className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px]"
          >
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={60}
                strokeWidth={2}
                stroke="white"
              />
            </PieChart>
          </ChartContainer>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {data.map((entry) => (
              <div key={entry.status} className="flex items-center gap-2 sm:gap-[10px]">
                <div
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  style={{ backgroundColor: entry.fill }}
                />
                <span className="text-xs sm:text-sm font-medium">{entry.status}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
