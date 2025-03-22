"use client";
import React from "react";
import TableData from "../TableData";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {  ViewDetailsTab } from "./ViewDetailsTab";
const ViewDetails = () => {
  const { id } = useParams();
  const data = TableData.filter((t) => t.id === id);
  return (
    <div className="px-6">
      <div className="flex flex-col gap-5 px-5 pt-5 border-1 border-[#E6E6E6] rounded-[8px]">
        <div className="flex items-center gap-[10px] border-b-1 border-[#E6E6E6] p-[10px]">
          <Link href={"/manage-tenant"}>
            {" "}
            <ArrowLeft className="border-[0.5px] text-[#333333] border-[#33333366] rounded-[5px] p-[4px]" />
          </Link>

          <p className="text-xl font-semibold text-black">Tenant Details</p>
        </div>
        <div className="flex gap-[30px] pt-[10px] pb-5 pl-[32px] border-b-1 border-[#E6E6E6]">
          <Image
            src={"/icons/profile2.svg"}
            alt="profile2"
            width={126}
            height={124}
          />
          {data.map((item, index) => (
            <div key={index} className="px-[10px] flex flex-col gap-5">
              <div className="flex px-[10px] gap-[50px]">
                <div className="flex items-center px-5 gap-[10px]">
                  <Image
                    src={"/icons/profile3.svg"}
                    alt="profile3"
                    width={30}
                    height={30}
                  />
                  <div className="flex flex-col p-[10px] gap-[10px]">
                    <p className="text-[#8A8A8A] text-sm font-semibold">Full Name</p>
                    <p className="text-xs text-black ">
                      {item.FullName}
                    </p>
                  </div>
                </div>
                <div className="flex items-center px-5 gap-[10px]">
                  <Image
                    src={"/icons/phone.svg"}
                    alt="phone"
                    width={30}
                    height={30}
                  />
                  <div className="flex flex-col p-[10px] gap-[10px]">
                    <p className="text-[#8A8A8A] text-sm font-semibold">Phone Number</p>
                    <p className="text-xs text-black ">
                      {item.Phone}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" px-[10px] ">
                <div className="flex items-center px-5 gap-[10px]">
                  <Image
                    src={"/icons/email.svg"}
                    alt="email"
                    width={30}
                    height={30}
                  />
                  <div className="flex flex-col p-[10px] gap-[10px]">
                    <p className="text-[#8A8A8A] text-sm font-semibold">Email</p>
                    <p className="text-xs text-black ">
                      {item.Email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ViewDetailsTab/>
      </div>
    </div>
  );
};

export default ViewDetails;