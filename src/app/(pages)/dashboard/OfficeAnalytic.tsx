import React from "react";
import OfficeAnalyticCards from "./OfficeAnalyticCards";

const OfficeAnalytic = () => {
  return (
    <div className="p-[10px]  border-1 border-[#E9EBF3] rounded-[8px] shadow-[2px_4px_4px_#DFE5F9] w-fit">
      <p className="text-black text-xl font-semibold">Office Analytics</p>
      <div className="flex flex-col gap-[20px] p-[10px]">
        <div className="flex gap-[30px] p-[10px">
          <OfficeAnalyticCards
            className="bg-[#007BFF26]"
            iconsurl="/icons/blueoffice.svg"
            title="Total Office"
            amount={20}
          />
          <OfficeAnalyticCards
            className="bg-[#28A74526]"
            iconsurl="/icons/greenrent.svg"
            title="Rented Office"
            amount={10}
          />
        </div>
        <div className="flex gap-[30px]">
          <OfficeAnalyticCards
            className="bg-[#FFA50026]"
            iconsurl="/icons/orangeoffice.svg"
            title="Available Office"
            amount={8}
          />
          <OfficeAnalyticCards
            className="bg-[#FF000026]"
            iconsurl="/icons/redmaintenance.svg"
            title="Under Maintenance"
            amount={4}
          />
        </div>
      </div>
    </div>
  );
};

export default OfficeAnalytic;
