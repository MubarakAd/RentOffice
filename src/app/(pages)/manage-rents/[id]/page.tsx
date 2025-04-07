"use client";
import TopContent from "@/components/TopContent";

import React from "react";
import RentDetails from "./RentDetails";

const page = () => {

  return (
    <div className="flex flex-col gap-5">
      <TopContent title=" Manage Rents" />
      <RentDetails />
    </div>
  );
};

export default page;
