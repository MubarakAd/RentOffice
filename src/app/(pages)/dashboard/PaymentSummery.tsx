"use client";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Updated data for all months
const chartData = [
  { month: "January", payment: 320000 },
  { month: "February", payment: 400000 },
  { month: "March", payment: 490000 },
  { month: "April", payment: 410000 },
  { month: "May", payment: 400000 },
  { month: "June", payment: 520000 },
  { month: "July", payment: 410000 },
  { month: "August", payment: 400000 },
  { month: "September", payment: 505000 },
  { month: "October", payment: 450000 },
  { month: "November", payment: 410000 },
  { month: "December", payment: 510000 },
];

const chartConfig = {
  payment: {
    label: "payment",
    color: "#4C74F6",
  },
} satisfies ChartConfig;

export function PaymentSummery() {
  return (
    <Card className="p-[10px] shadow-[4px_2px_4px_#DFE5F9] w-full">
  <CardHeader className="flex flex-row p-[10px] items-center justify-between">
    <CardTitle className="text-xl font-semibold">Payment Summary</CardTitle>
    <Select defaultValue="monthly">
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select period" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="monthly">Monthly</SelectItem>
        <SelectItem value="quarterly">Quarterly</SelectItem>
        <SelectItem value="yearly">Yearly</SelectItem>
      </SelectContent>
    </Select>
  </CardHeader>
  
  <CardContent className="flex flex-col items-center">
  {/* ChartContainer should only have ONE child */}
  <ChartContainer config={chartConfig} className="w-full">
    <ResponsiveContainer width="100%" height={224}>
      <AreaChart
        data={chartData}
        margin={{ left: 0, right: 0 }}
      >
        <CartesianGrid vertical={false} stroke="#E6E6E6" strokeWidth={1} strokeDasharray="0" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={12}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          domain={[100000, 500000]}
          tickFormatter={(value) => `${value / 1000}K`}
          ticks={[100000, 200000, 300000, 400000, 500000]}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

        <defs>
          <linearGradient id="fillpayment" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4C74F6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#C5C8D1" stopOpacity={0.1} />
          </linearGradient>
        </defs>

        <Area
          dataKey="payment"
          type="monotone"
          fill="url(#fillpayment)"
          stroke="#4C74F6"
          fillOpacity={0.6}
          stackId="a"
        />
      </AreaChart>
    </ResponsiveContainer>
  </ChartContainer>
</CardContent>

</Card>
  );
}
