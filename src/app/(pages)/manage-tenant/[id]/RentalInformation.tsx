import React from "react";

const RentalInformation = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex  items-center p-[10px] gap-[10px]">
        <div className="flex w-1/2 flex-col gap-4">
          <p className="text-[#8A8A8A] text-sm font-semibold">Office Number</p>
          <p className=" text-black text-xs">004</p>
        </div>
        <div className="flex w-1/2 flex-col gap-4">
          <p className="text-[#8A8A8A] text-sm font-semibold">
            Monthly Payment Amount
          </p>
          <p className=" text-black text-xs">100,000</p>
        </div>
      </div>
      <div className="flex w-full items-center p-[10px] ">
        <div className="flex w-1/2 flex-col gap-4">
          <p className="text-[#8A8A8A] text-sm font-semibold">Start Date</p>
          <p className=" text-black text-xs">22/5/2025</p>
        </div>
        <div className="flex w-1/2 flex-col  gap-4">
          <p className="text-[#8A8A8A] text-sm font-semibold">End Date</p>
          <p className=" text-black text-xs">End Date</p>
        </div>
      </div>
    </div>
  );
};

export default RentalInformation;
