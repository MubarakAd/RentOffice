"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import RentsData from "../RentsData";
import PaymentHistory from "./PaymentHistory";

const RentDetails = () => {
  const { id } = useParams();
  const data = RentsData.filter((item) => item.id === id);
  console.log("data is", data);
  return (
    <div className="px-6">
      <div className="flex flex-col gap-5 px-5 pt-5 border-1 border-[#E6E6E6] rounded-[8px]">
        <div className="flex items-center gap-[10px] border-b-1 border-[#E6E6E6] p-[10px]">
          <Link href={"/manage-rents"}>
            {" "}
            <ArrowLeft className="border-[0.5px] text-[#333333] border-[#33333366] rounded-[5px] p-[4px]" />
          </Link>

          <p className="text-xl font-semibold text-black">Rental Details</p>
        </div>
        {data.map((items) => (
          <div key={items.id} className="pb-[10px]  border-b-1 border-[#E6E6E6]">
              <div className="grid grid-cols-1 gap-y-12 p-6 border-1 border-[#E9EBF3] shadow-[4px_2px_4px_#DFE5F9]  md:grid-cols-3">
                <div>
                  <p className="mb-3  font-semibold text-[#8A8A8A]">Office Number</p>
                  <p className="text-black text-sm font-semibold">{items.OfficeNo}</p>
                </div>
                <div>
                  <p className="mb-3  font-semibold text-[#8A8A8A]">Tenant Name</p>
                  <p className="text-black text-sm font-semibold">{items.TenantName}</p>
                </div>
                <div>
                  <p className="mb-3  font-semibold text-[#8A8A8A]">Monthly Payment Amount</p>
                  <p className="text-black text-sm font-semibold">{items.MonthlyAmount}</p>
                </div>
                <div>
                  <p className="mb-3 font-semibold text-[#8A8A8A]">Start Date</p>
                  <p className="text-black text-sm font-semibold">{items.StartDate}</p>
                </div>
                <div>
                  <p className="mb-3  font-semibold text-[#8A8A8A]">End Date</p>
                  <p className="text-black text-sm font-semibold">{items.EndDate}</p>
                </div>
              </div>
          </div>
        ))}
         <PaymentHistory/>
      </div>
     
    </div>
  );
};

export default RentDetails;
