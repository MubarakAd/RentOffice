"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import RentsData from "./RentsData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import TableData from "../manage-tenant/TableData";

interface Rental {
    id:string,
  OfficeNo: string;
  TenantName: string;
  StartDate: string;
  EndDate: string;
  MonthlyAmount: string;
}
const ManageRents = () => {
  const [rentsTable, setRentsTable] = useState(RentsData);
  const [editRents,setEditRents]=useState<Rental|null>(null)
  const [formData, setFormData] = useState({
    id:"",
    OfficeNo: "",
    TenantName: "",
    StartDate: "",
    EndDate: "",
    MonthlyAmount: "",
  });
  const [open, setOpen] = useState(false);
  const handleEditClick = (items: Rental) => {
    setFormData(items);
    setEditRents(items)
    console.log("form data is", formData);
  };const handleUpdate = () => {
    setRentsTable((prev) =>
      prev.map((item) =>
        item.id === editRents?.id ? { ...item, ...formData } : item
      )
    );
  
    // Reset form data after updating
    setFormData({
      id: "",
      OfficeNo: "",
      TenantName: "",
      StartDate: "",
      EndDate: "",
      MonthlyAmount: "",
    });
  };
  
  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleAdd = () => {
    if (
      !formData.EndDate ||
      !formData.MonthlyAmount ||
      !formData.OfficeNo ||
      !formData.StartDate ||
      !formData.StartDate ||
      !formData.TenantName
    ) {
      alert("Please fill all information before submittin form");
      return;
    }

    setRentsTable((prev) => [
      ...prev,
      { ...formData,id:Date.now.toString() },
    ]);
    setFormData({
        id:"",
      OfficeNo: "",
      TenantName: "",
      StartDate: "",
      EndDate: "",
      MonthlyAmount: "",
    });
    setOpen(!open);
  };
  return (
    <div className="px-6">
      <div className="flex flex-col gap-5 px-5 pb-5 border-1 border-[#E6E6E6] rounded-[8px]">
        <div className="p-[10px] border-b-1 border-[#E6E6E6]">
          <p className="text-xl font-semibold text-black">All Rents</p>
        </div>
        <div className="flex justify-between pb-[10px]  border-b-1 border-[#E6E6E6]">
          <div className="flex gap-6">
            <div className="flex  items-center gap-[8px] px-[15px]  bg-white border-1 border-[#B0B0B0] rounded-[8px]">
              <Button className=" bg-white hover:bg-white">
                <SearchIcon className="w-[15px] h-[15px] text-[#8A8A8A] font-bold" />{" "}
              </Button>
              <Input
                type="search"
                //   value={search}
                //   onChange={handleSearchChange}
                placeholder="Search"
                className="bg-white text-[#8A8A8A] font-semibold"
                style={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                }}
              />
            </div>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={() => setOpen(!open)}
                variant="outline"
                className="bg-[#253D8A] p-[15px] hover:bg-[#253D8A] text-white hover:text-white"
              >
                <span>+</span> Add Rental
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white sm:max-w-[700px]">
              <DialogHeader>
                <DialogTitle className="text-center">Add Rental</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-6 py-4">
                <div className="flex gap-6">
                  <div className="flex flex-col w-full">
                    <p>
                      Office <span className="text-red-500">*</span>
                    </p>
                    <Select
                      name="OfficeNo"
                      onValueChange={(value) =>
                        handleSelectChange(value, "OfficeNo")
                      }
                    >
                      <SelectTrigger className="w-[300px]">
                        <SelectValue placeholder="Select Office" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="004">004</SelectItem>
                        <SelectItem value="005">005</SelectItem>
                        <SelectItem value="006">006</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col w-full">
                    <p>
                      Tenant<span className="text-red-500">*</span>
                    </p>
                    <Select
                      value={formData.TenantName}
                      name="TenantName"
                      onValueChange={(value) => {
                        handleSelectChange(value, "TenantName");
                      }}
                    >
                      <SelectTrigger className="w-[300px]">
                        <SelectValue placeholder="Select Tenant" />
                      </SelectTrigger>
                      <SelectContent>
                        {TableData.map((tenant) => (
                          <SelectItem key={tenant.id} value={tenant.FullName}>
                            {tenant.FullName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col w-full">
                    <p>
                      Start Date <span className="text-red-500">*</span>
                    </p>
                    <Input
                      type="date"
                      name="StartDate"
                      value={formData.StartDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <p>
                      End Date <span className="text-red-500">*</span>
                    </p>
                    <Input
                      type="date"
                      name="EndDate"
                      value={formData.EndDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className=" w-1/2">
                  <p>
                    Monthly Amount<span className="text-red-500">*</span>
                  </p>
                  <Input
                    name="MonthlyAmount"
                    value={formData.MonthlyAmount}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={handleAdd}
                    className="bg-blue-600 text-white"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="px-[10px] border-1 border-[#E6E6E6] rounded-tl-[5px] rounded-tr-[5px] bg-[#E9ECF3]">
            <TableHead className="text-center font-semibold text-black ">
              Office No
            </TableHead>
            <TableHead className="text-center font-semibold text-black ">
              Tenant Name
            </TableHead>
            <TableHead className="text-center font-semibold text-black ">
              Start Date
            </TableHead>
            <TableHead className="text-center font-semibold text-black ">
              End Date
            </TableHead>
            <TableHead className="text-center font-semibold text-black ">
              Monthly Amount
            </TableHead>
            <TableHead className="text-center font-semibold text-black ">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rentsTable.map((items) => (
            <TableRow
              key={items.id}
              className="border-l-1 border-r-1 border-b-1 border-[#E6E6E6] p-[10px]"
            >
              <TableCell className="text-center text-sm text-[#8A8A8A] font-semibold ">
                {items.OfficeNo}
              </TableCell>
              <TableCell className="text-center text-sm text-[#8A8A8A] font-semibold ">
                {items.TenantName}
              </TableCell>
              <TableCell className="text-center text-sm text-[#8A8A8A] font-semibold ">
                {items.StartDate}
              </TableCell>
              <TableCell className="text-center text-sm text-[#8A8A8A] font-semibold ">
                {items.EndDate}
              </TableCell>
              <TableCell className="text-center text-sm text-[#8A8A8A] font-semibold ">
                {items.MonthlyAmount}
              </TableCell>
              <TableCell className="flex justify-center gap-[30px]">
                <Link href={`/manage-tenant/${items.id}`}>
                  {" "}
                  <Button
                    variant={"ghost"}
                    className=" flex gap-[10px] rounded-[8px] px-[10px] border-1 border-[#00DC32] py-[5px]"
                  >
                    <Image
                      src={"/icons/eye.svg"}
                      alt="eye"
                      width={25}
                      height={25}
                    />
                    <span className="text-[#00DC32] text-sm font-semibold">
                      View
                    </span>
                  </Button>
                </Link>

                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => {
                        handleEditClick(items);
                      }}
                    >
                      <Image
                        src="/icons/edit.svg"
                        alt="edit"
                        width={25}
                        height={25}
                      />
                    </button>
                  </DialogTrigger>

                  <DialogContent className="bg-white sm:max-w-[700px]">
                    <DialogHeader>
                      <DialogTitle className="text-center">
                        Edit Rental
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-6 py-4">
                      <div className="flex gap-6">
                        <div className="flex flex-col w-full">
                          <p>
                            Office <span className="text-red-500">*</span>
                          </p>
                          <Select defaultValue="004">
                            <SelectTrigger className="w-[300px]">
                              <SelectValue placeholder="Select Office" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="004">004</SelectItem>
                              <SelectItem value="005">005</SelectItem>
                              <SelectItem value="006">006</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex flex-col w-full">
                          <p>
                            Tenant<span className="text-red-500">*</span>
                          </p>
                          <Select defaultValue={items.TenantName}>
                            <SelectTrigger className="w-[300px]">
                              <SelectValue placeholder="Select Tenant" />
                            </SelectTrigger>
                            <SelectContent>
                              {TableData.map((tenant) => (
                                <SelectItem key={tenant.id} value={tenant.FullName}>
                                  {tenant.FullName}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="flex flex-col w-full">
                          <p>
                            Start Date <span className="text-red-500">*</span>
                          </p>
                          <Input type="date" name="StartDate" value={formData.StartDate} onChange={handleChange} />
                        </div>
                        <div className="flex flex-col w-full">
                          <p>
                            End Date <span className="text-red-500">*</span>
                          </p>
                          <Input type="date" name="EndDate" value={formData.EndDate} onChange={handleChange} />
                        </div>
                      </div>
                      <div className=" w-1/2">
                        <p>
                          Monthly Amount<span className="text-red-500">*</span>
                        </p>
                        <Input name="MonthlyAmount" value={formData.MonthlyAmount} onChange={handleChange} />
                      </div>
                      <div className="flex justify-end">
                        <Button onClick={handleUpdate} className="bg-blue-600 text-white">
                          Update
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button
                  onClick={() =>
                    setRentsTable((prev) => prev.filter((o) => o.id !== items.id))
                    
                  }
                  
                  variant={"ghost"}
                  className=" flex gap-[10px]  rounded-[8px] px-[10px] border-1 border-[#FF0000] py-[5px]"
                >
                  <span className="text-[#FF0000] text-sm font-semibold">
                    Terminate
                  </span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageRents;
