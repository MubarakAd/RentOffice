import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-[32px]"> {children}</div>
     
    </div>
  );
};

export default layout;
