import Image from "next/image";
import React from "react";

const OfficeAnalyticCards = ({
  iconsurl,
  title,
  amount,
  className,
}: {
  iconsurl: string;
  title: string;
  amount: number;
  className: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:py-4 px-3 sm:px-6 border-1 border-[#E9EBF3] rounded-[8px] gap-3 sm:gap-4 shadow-[4px_2px_4px_#DFE5F9] w-full">
      <div className={`${className} p-2 sm:p-3 rounded-[15px] flex-shrink-0`}>
        <Image 
          src={iconsurl} 
          alt="" 
          width={35} 
          height={35} 
          className="w-6  h-6 sm:w-8 sm:h-8 md:w-[45px] md:h-[45px]" 
        />
      </div>
      <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-2">
        <p className="text-[#B0B0B0] text-xs md:text-xs lg:text-sm font-semibold whitespace-nowrap">{title}</p>
        <p className="text-black font-semibold text-base sm:text-lg md:text-lg">{amount}</p>
      </div>
    </div>
  );
};

export default OfficeAnalyticCards;
