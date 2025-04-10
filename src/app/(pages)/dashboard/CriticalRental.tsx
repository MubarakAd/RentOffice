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
        <CardTitle className="text-lg sm:text-xl font-semibold">
          Critical Rentals
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table className="h-auto sm:h-[330px]">
            <TableHeader>
              <TableRow className="text-center px-[10px] border-1 border-[#E6E6E6] rounded-tl-[5px] rounded-tr-[5px] bg-[#E9ECF3]">
                <TableHead className="text-xs text-black whitespace-nowrap">
                  Tenant
                </TableHead>
                <TableHead className="text-xs text-black whitespace-nowrap">
                  Office No
                </TableHead>
                <TableHead className="text-xs text-black whitespace-nowrap">
                  Start date
                </TableHead>
                <TableHead className="text-xs text-black whitespace-nowrap">
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
                  <TableCell className="text-xs sm:text-sm font-semibold text-[#8A8A8A] whitespace-nowrap">
                    {items.tenant}
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm font-semibold text-[#8A8A8A] whitespace-nowrap">
                    {items.OfficeNo}
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm font-semibold text-[#8A8A8A] whitespace-nowrap">
                    {items.startDate}
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm font-semibold text-[#8A8A8A] whitespace-nowrap">
                    {items.EndDate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CriticalRental;
