import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { SearchCheckIcon, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
const TopContent = ({ title }: { title: string }) => {
  return (
    <div className="flex  items-center justify-between px-[32px] h-[97px] bg-[#E9EBF3]">
      <p className="text-[#333333] font-semibold text-xl">{title}</p>
      <div className="flex  items-center gap-5 ">
        <div className="flex  items-center gap-[8px] px-[15px]  bg-white border-1 border-[#B0B0B0] rounded-[8px]">
          <Button className=" bg-white hover:bg-white">
           
            <SearchIcon className="w-[15px] h-[15px] text-[#8A8A8A] font-bold" />{" "}
          </Button>
          <Input
            type="search"
            placeholder="Search"
            className="bg-white text-[#8A8A8A] font-semibold"
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
        />
      </div>
    </div>
  );
};

export default TopContent;
