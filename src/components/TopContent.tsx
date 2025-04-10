import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";

const TopContent = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-4 md:px-8 lg:px-[32px] h-auto sm:h-[97px] py-4 sm:py-0 bg-[#E9EBF3]">
      <p className="text-[#333333] font-semibold text-lg sm:text-xl mb-4 sm:mb-0">{title}</p>
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="flex items-center gap-[8px] px-[15px] bg-white border-1 border-[#B0B0B0] rounded-[8px]">
          <Button className="bg-white hover:bg-white">
            <SearchIcon className="w-[15px] h-[15px] text-[#8A8A8A] font-bold" />
          </Button>
          <Input
            type="search"
            placeholder="Search"
            className="bg-white text-[#8A8A8A] font-semibold w-[120px] sm:w-auto"
            style={{
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          />
        </div>

        <Image
          src="/icons/profilecircle.svg"
          alt="profile"
          width={54}
          height={41}
          className="hidden sm:block"
        />
      </div>
    </div>
  );
};

export default TopContent;
