import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import React from "react";
  
  const MaintenanceData = [
    {
      id: "1",
      createdAt: "2023-10-01",
      description: "Description Description Description",
      officeNumber: "101",
      status: "Resolved",
    },
    {
      id: "2",
      createdAt: "2023-10-01",
      description: "Description Description Description",
      officeNumber: "101",
      status: "InProgress",
    },
    {
      id: "3",
      createdAt: "2023-10-01",
      description: "Description Description Description",
      officeNumber: "101",
      status: "Open",
    },
  ];

const MaintenanceRequest = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="px-[10px] py-10 border border-[#E6E6E6] rounded-tl-[5px] rounded-tr-[5px] bg-[#E9ECF3]">
          <TableHead className="text-center text-sm font-semibold text-black">
            Due Date
          </TableHead>
          <TableHead className="text-center text-sm font-semibold text-black">
            Paid Date
          </TableHead>
          <TableHead className="text-center text-sm font-semibold text-black">
            Amount
          </TableHead>
          <TableHead className="text-center text-sm font-semibold text-black">
            Status
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {MaintenanceData.map((items) => (
          <TableRow
            key={items.id}
            className="border-l border-r border-b border-[#E6E6E6] min-h-[100px]"
          >
            <TableCell className="text-center text-xs text-[#8A8A8A]  ">
              {items.createdAt}
            </TableCell>
            <TableCell className="text-center text-xs text-[#8A8A8A]  ">
              {items.description}
            </TableCell>
            <TableCell className="text-center text-xs text-[#8A8A8A]  ">
              {items.officeNumber}
            </TableCell>
            <TableCell className="text-center text-xs">
              <div className="flex justify-center">
                <div
                  className={`w-fit p-[5px] px-[15px] rounded-[8px] 
        ${
          items.status === "Resolved"
            ? "bg-[#28A74526]"
            : items.status === "InProgress"
            ? "bg-[#007BFF26]"
            : items.status === "Open"
            ? "bg-[#FFA50026]"
            : ""
        }`}
                >
                  {items.status}
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default MaintenanceRequest