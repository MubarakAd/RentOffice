import TopContent from "@/components/TopContent";
import React from "react";
import ManageRents from "./ManageRents";

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <TopContent title=" Manage Rents  " />
      <ManageRents />
    </div>
  );
};

export default page;
