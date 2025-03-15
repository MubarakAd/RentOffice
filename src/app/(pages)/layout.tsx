import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 w-full">{children}</div>
     
    </div>
  );
};

export default layout;
