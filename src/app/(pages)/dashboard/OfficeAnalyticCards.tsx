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
    <div className="flex py-[30px]  w-[300px]  px-[30px] border-1 border-[#E9EBF3] rounded-[8px] gap-[10px] shadow-[4px_2px_4px_#DFE5F9]">
      <div className={`${className} p-3 rounded-[15px]`}>
        <Image src={iconsurl} alt="" width={45} height={45} />{" "}
      </div>
      <div className="flex flex-col items-center gap-[10px]">
        <p className="text-[#B0B0B0] text-sm font-semibold">{title}</p>
        <p className="text-black font-semibold text-xl">{amount}</p>
      </div>
    </div>
  );
};

export default OfficeAnalyticCards;
