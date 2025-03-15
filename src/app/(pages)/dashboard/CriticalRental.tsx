import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  
  TableCell,
  
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
const data = [
  {
    tenant: "Name",
    OfficeNo: "004",
    startDate: "3/10/2024",
    EndDate: "20/5/2025",
  },
  {
    tenant: "Name",
    OfficeNo: "004",
    startDate: "3/10/2024",
    EndDate: "20/5/2025",
  },
  {
    tenant: "Name",
    OfficeNo: "004",
    startDate: "3/10/2024",
    EndDate: "20/5/2025",
  },
  {
    tenant: "Name",
    OfficeNo: "004",
    startDate: "3/10/2024",
    EndDate: "20/5/2025",
  },
  {
    tenant: "Name",
    OfficeNo: "004",
    startDate: "3/10/2024",
    EndDate: "20/5/2025",
  },
  {
    tenant: "Name",
    OfficeNo: "004",
    startDate: "3/10/2024",
    EndDate: "20/5/2025",
  },
  {
    tenant: "Name",
    OfficeNo: "004",
    startDate: "3/10/2024",
    EndDate: "20/5/2025",
  },
];
const CriticalRental = () => {
  return (
    <Card className="border-1 border-[#E9EBF3] rounded-[8px] shadow-[4px_2px_4px_#DFE5F9]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Critical Rentals
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="h-[330px]">
          <TableHeader>
            <TableRow className="text-center px-[10px] border-1 border-[#E6E6E6] rounded-tl-[5px] rounded-tr-[5px] bg-[#E9ECF3]">
              <TableHead className="text-sm text-black font-semibold">
                Tenant
              </TableHead>
              <TableHead className="text-sm text-black font-semibold">
                Office No
              </TableHead>
              <TableHead className="text-sm text-black font-semibold">
                Start date
              </TableHead>
              <TableHead className="text-sm text-black font-semibold">
                End date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((items, index) => (
              <TableRow
                key={index}
                className="px-[10px] border-1 border-r border-l border-b border-t border-[#E6E6E6]"
              >
                <TableCell className="text-sm font-semibold text-[#8A8A8A]">
                  {items.tenant}
                </TableCell>
                <TableCell className="text-sm font-semibold text-[#8A8A8A]">
                  {items.OfficeNo}
                </TableCell>
                <TableCell className="text-sm font-semibold text-[#8A8A8A]">
                  {items.startDate}
                </TableCell>
                <TableCell className="text-sm font-semibold text-[#8A8A8A]">
                  {items.EndDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CriticalRental;
