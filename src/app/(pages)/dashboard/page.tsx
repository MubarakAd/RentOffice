import TopContent from "@/components/TopContent";
import React from "react";

import OfficeAnalytic from "./OfficeAnalytic";
import { PaymentSummery } from "./PaymentSummery";
// import MaintenanceOverview from "./MaintenanceOverview";


const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <TopContent title="Welcome Back!" />
      <div className="p-[32px]  ">
        <div className="flex gap-[15px] p-[10px]">
          {/* left */}
          <div className="flex flex-col gap-5">
            {/* top */}
            <OfficeAnalytic />
            {/* bottom */}
            <PaymentSummery/>
          </div>
          <div className="flex flex-col gap-5">
            {/* <MaintenanceOverview/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
