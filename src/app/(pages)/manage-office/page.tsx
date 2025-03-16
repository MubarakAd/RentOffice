import TopContent from "@/components/TopContent";
;
import React from "react";
import ManageOffice from "./ManageOffice";

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <TopContent title=" Manage Office" />
      <ManageOffice/>
    </div>
  );
};

export default page;
