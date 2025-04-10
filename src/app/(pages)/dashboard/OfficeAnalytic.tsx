import React from "react";
import OfficeAnalyticCards from "./OfficeAnalyticCards";

const OfficeAnalytic = () => {
  return (
    <div className="p-3 sm:p-4 border-1 border-[#E9EBF3] rounded-[8px] shadow-[2px_4px_4px_#DFE5F9] w-full">
      <p className="text-black text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Office Analytics</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
  );
};

export default OfficeAnalytic;
