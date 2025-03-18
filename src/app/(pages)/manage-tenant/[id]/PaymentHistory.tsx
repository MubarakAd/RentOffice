import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const PaymenData = [
  {
    id: "1",
    dueDate: "2023-10-01",
    paidDate: "2023-10-01",
    amount: "150000",
    status: "Paid",
  },
  {
    id: "2",
    dueDate: "2023-10-01",
    paidDate: "2023-10-01",
    amount: "150000",
    status: "Unpaid",
  },
  {
    id: "3",
    dueDate: "2023-10-01",
    paidDate: "2023-10-01",
    amount: "150000",
    status: "Overdue",
  },
];
const PaymentHistory = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="px-[10px] py-10 border border-[#E6E6E6] rounded-tl-[5px] rounded-tr-[5px] bg-[#E9ECF3]">
          <TableHead className="text-center font-semibold text-black">
            Due Date
          </TableHead>
          <TableHead className="text-center font-semibold text-black">
            Paid Date
          </TableHead>
          <TableHead className="text-center font-semibold text-black">
            Amount
          </TableHead>
          <TableHead className="text-center font-semibold text-black">
            Status
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PaymenData.map((items) => (
          <TableRow
            key={items.id}
            className="border-l border-r border-b border-[#E6E6E6] min-h-[100px]"
          >
            <TableCell className="text-center text-sm text-[#8A8A8A] font-semibold ">
              {items.dueDate}
            </TableCell>
            <TableCell className="text-center text-sm text-[#8A8A8A] font-semibold ">
              {items.paidDate}
            </TableCell>
            <TableCell className="text-center text-sm text-[#8A8A8A] font-semibold ">
              {items.amount}
            </TableCell>
            <TableCell className="text-center text-sm">
              <div className="flex justify-center">
                <div
                  className={`w-fit p-[5px] px-[15px] rounded-[8px] 
        ${
          items.status === "Paid"
            ? "bg-[#28A74526]"
            : items.status === "Unpaid"
            ? "bg-[#FFA50026]"
            : items.status === "Overdue"
            ? "bg-[#FF000026]"
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
  );
};

export default PaymentHistory;
