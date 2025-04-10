import TopContent from "@/components/TopContent";
import React from "react";

import OfficeAnalytic from "./OfficeAnalytic";
import { PaymentSummery } from "./PaymentSummery";
import MaintenanceOverview from "./MaintenanceOverview";
import CriticalRental from "./CriticalRental";

const page = () => {
  return (
    <div className="flex flex-col gap-6">
      <TopContent title="Welcome Back!" />
      <div className="px-4 md:px-8 lg:px-[32px] pb-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[15px] p-[10px]">
          {/* left column */}
          <div className="flex flex-col gap-4 lg:gap-5">
            <OfficeAnalytic />
            <PaymentSummery />
          </div>
          {/* right column */}
          <div className="flex flex-col gap-4 lg:gap-5">
            <MaintenanceOverview />
            <CriticalRental />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
