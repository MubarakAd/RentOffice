'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const sidebarItems = [
  {
    name: "Dashboard",
    url: "/dashboard",
    activeiconurl: "/icons/activehome.svg",
    iconurl: "/icons/home.svg",
  },
  {
    name: "Manage Office",
    url: "/manage-office",
    iconurl: "/icons/office.svg",
    activeiconurl: "/icons/activeoffice.svg",
  },
  {
    name: "Manage Tenant",
    url: "/manage-tenant",
    iconurl: "/icons/tenant.svg",
    activeiconurl: "/icons/activetenant.svg",
  },
  {
    name: "Manage Rents",
    url: "/manage-rents",
    iconurl: "/icons/rent.svg",
    activeiconurl: "/icons/activerent.svg",
  },
  {
    name: "Maintenance",
    url: "/maintenance",
    iconurl: "/icons/maintenance.svg",
    activeiconurl: "/icons/activerent.svg",
  },
  {
    name: "Report",
    url: "/report",
    iconurl: "/icons/report.svg",
    activeiconurl: "/icons/activerent.svg",
  },
  {
    name: "Profile",
    url: "/profile",
    iconurl: "/icons/profile.svg",
    activeiconurl: "/icons/activerent.svg",
  },
  {
    name: "Logout",
    url: "/",
    iconurl: "/icons/logout.svg",
    activeiconurl: "/icons/activerent.svg",
  }
];
const Sidebar = () => {
    const path = usePathname();
  
    return (
      <div className="flex flex-col  py-[32px] pl-[32px] text-center gap-[30px] w-[348px] bg-[#253D8A] min-h-screen">
        <div className="flex flex-col text-center gap-[10px]">
          <p className="text-white text-xl font-semibold capitalize">
            digital office management
          </p>
          <p className="text-white text-xl font-semibold capitalize">system</p>
        </div>
        <div className="flex flex-col gap-[15px]">
          {sidebarItems.map((items, index) => (
            <div
              key={index}
              className={`${
                path === items.url ? "bg-white" : "bg-[#253D8A]"
              } py-[10px] px-[15px] rounded-tl-[8px] rounded-bl-[8px] flex gap-5`}
            >
              <Image
                src={path === items.url ? items.activeiconurl : items.iconurl}
                alt=""
                height={30}
                width={30}
              />
              <Link
                href={items.url}
                className={`font-semibold ${
                  path === items.url ? "text-[#253D8A]" : "text-white"
                }`}
              >
                {items.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;
