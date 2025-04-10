"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  Home,
  Building,
  Package,
  BarChart2,
  User,
  DollarSign,
  PenToolIcon as Tool,
  FileText,
  UserCircle,
  LogOut,
} from "lucide-react"
type SidebarItem = {
  name: string
  url: string
  icon: React.ElementType
  iconurl: string
  activeiconurl: string
  children?: { name: string; url: string }[]
}

const sidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: Home,
    activeiconurl: "/icons/activehome.svg",
    iconurl: "/icons/home.svg",
  },
  {
    name: "Manage Office",
    url: "/manage-office",
    icon: Building,
    iconurl: "/icons/office.svg",
    activeiconurl: "/icons/activeoffice.svg",
  },
  {
    name: "Assets",
    url: "/assets",
    icon: Package,
    iconurl: "/icons/assets.svg",
    activeiconurl: "/icons/activeassets.svg",
  },
  {
    name: "Expense Tracker",
    url: "/expense-tracker",
    icon: BarChart2,
    iconurl: "/icons/expense.svg",
    activeiconurl: "/icons/expense.svg",
    children: [
      {
        name: "Budgets",
        url: "/expense-tracker/budget",
      },
      {
        name: "Expenses",
        url: "/expense-tracker/expenses",
      },
      {
        name: "Recurring Expenses",
        url: "/expense-tracker/recurring-expenses",
      },
    ],
  },
  {
    name: "Manage Tenant",
    url: "/manage-tenant",
    icon: User,
    iconurl: "/icons/tenant.svg",
    activeiconurl: "/icons/activetenant.svg",
  },
  {
    name: "Manage Rents",
    url: "/manage-rents",
    icon: DollarSign,
    iconurl: "/icons/rent.svg",
    activeiconurl: "/icons/activerent.svg",
  },
  {
    name: "Maintenance",
    url: "/maintenance",
    icon: Tool,
    iconurl: "/icons/maintenance.svg",
    activeiconurl: "/icons/activemaintenance.svg",
  },
  {
    name: "Report",
    url: "/report",
    icon: FileText,
    iconurl: "/icons/report.svg",
    activeiconurl: "/icons/activereport.svg",
  },
  {
    name: "Profile",
    url: "/profile",
    icon: UserCircle,
    iconurl: "/icons/profile.svg",
    activeiconurl: "/icons/activeprofile.svg",
  },
  {
    name: "Logout",
    url: "/",
    icon: LogOut,
    iconurl: "/icons/logout.svg",
    activeiconurl: "/icons/activelogout.svg",
  },
]

const Sidebar = () => {
  const path = usePathname()
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    "/expense-tracker": path.startsWith("/expense-tracker"),
  })
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleExpand = (url: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [url]: !prev[url],
    }))
  }

  
  const isActive = (item: SidebarItem) => {
    if (path === item.url) return true
    if (item.children) {
      return item.children.some((child) => path === child.url)
    }
    return false
  }

  // Check if a specific child route is active
  const isChildActive = (childUrl: string) => {
    return path === childUrl
  }

  return (
    <div className={`flex flex-col py-[32px] pl-[32px] text-center gap-[30px] bg-[#253D8A] min-h-screen transition-all duration-300
      ${isCollapsed ? 'w-[80px]' : 'w-[348px]'} 
      fixed md:relative z-50`}>
      <div className="flex flex-col text-center gap-[10px]">
        {!isCollapsed && (
          <>
            <p className="text-white text-xl font-semibold capitalize">Digital Office Management</p>
            <p className="text-white text-xl font-semibold capitalize">System</p>
          </>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute right-2 top-4 text-white"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
      <div className="flex flex-col gap-[15px]">
        {sidebarItems.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={`${
                item.url!=="/expense-tracker" ?(isActive(item) ? "bg-white" : "bg-[#253D8A]"):"bg-[#253D8A]"
              } py-[10px] px-[15px] rounded-tl-[8px] rounded-bl-[8px] flex items-center gap-5 ${
                item.children ? "cursor-pointer" : ""
              }`}
              onClick={() => item.children && toggleExpand(item.url)}
            >
              {item.iconurl ? (
                <Image src={isActive(item) ? item.activeiconurl : item.iconurl} alt="" height={30} width={30} />
              ) : (
                <item.icon className={`${isActive(item) ? "text-[#253D8A]" : "text-white"}`} size={24} />
              )}

              {!isCollapsed && (
                <>
                  {item.children ? (
                    <div className="flex items-center justify-between w-full">
                      <span className={`font-semibold  ${  item.url!=="/expense-tracker" ?(isActive(item) ? "text-white" : "text-[#253D8A]"):"text-white"}`}>
                        {item.name}
                      </span>
                      {expandedItems[item.url] ? (
                        <ChevronUp className="ml-2 text-white"  size={18} />
                      ) : (
                        <ChevronDown className="ml-2 text-white" size={18} />
                      )}
                    </div>
                  ) : (
                    <Link href={item.url} className={`font-semibold ${isActive(item) ? "text-[#253D8A]" : "text-white"}`}>
                      {item.name}
                    </Link>
                  )}
                </>
              )}
            </div>

            {!isCollapsed && item.children && expandedItems[item.url] && (
              <div className="ml-[40px] flex flex-col  gap-[10px] mt-[5px]">
                {item.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    href={child.url}
                    className={`py-[8px] px-[15px] flex items-start rounded-tl-[4px] rounded-bl-[4px] font-medium ${
                      isChildActive(child.url) ? "bg-white text-[#253D8A]" : "text-white hover:bg-[#3a5cb3]"
                    }`}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

