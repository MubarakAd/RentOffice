import TopContent from "@/components/TopContent";
import React from "react";

import OfficeAnalytic from "./OfficeAnalytic";
import { PaymentSummery } from "./PaymentSummery";
import MaintenanceOverview from "./MaintenanceOverview";
import CriticalRental from "./CriticalRental";


const page = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <TopContent title="Welcome Back!" />
      <div className="px-[32px]  pb-[30px] ">
        <div className="flex gap-[15px]  p-[10px]">
          {/* left */}
          <div className="flex flex-col w-full gap-5">
            {/* top */}
            <OfficeAnalytic />
            {/* bottom */}
            <PaymentSummery />
          </div>
          <div className="flex flex-col w-3/4 gap-5">
            <MaintenanceOverview />
            <CriticalRental />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
