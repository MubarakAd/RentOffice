"use client";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { SearchIcon } from "lucide-react";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import TableData from "./TableData";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Tenant {
  id: string;
  FullName: string;
  Email: string;
  Phone: string;
  OfficeNo: string;
}

const ManageTenant = () => {
  const [tenantData, setTenantData] = useState(TableData);
  const [filteredResults, setFilteredResults] = useState<Tenant[]>([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    OfficeNo: "",
  });
  const [editTenant, setEditTenant] = useState<Tenant | null>(null);
  const [open, setOpen] = useState(false);

  // Calculate pagination
  const totalItems = search ? filteredResults.length : tenantData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = (search ? filteredResults : tenantData).slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handleAdd = () => {
    if (
      !formData.Email ||
      !formData.FullName ||
      !formData.OfficeNo ||
      !formData.Phone
    ) {
      alert("full all forms before u submit");
      return;
    }
    setTenantData((prev) => [
      ...prev,
      { id: Date.now().toString(), ...formData },
    ]);
    TableData.push( { id: Date.now().toString(), ...formData })
    setFormData({
      FullName: "",
      Email: "",
      Phone: "",
      OfficeNo: "",
    });
    setOpen(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleEdit = (item: Tenant) => {
    setEditTenant(item);
    setFormData(item);

  };
  const handleSearchChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
    if (!search.trim()) {
      setFilteredResults(tenantData);
      return;
    }
  
    const results = tenantData.filter((items) =>
      items.FullName.toLowerCase().includes(search.toLowerCase())
    );
  
    setFilteredResults(results);
  }

  

  

  const handleUpdate = () => {
    setTenantData((prev) =>
      prev.map((item) =>
        item.id === editTenant?.id ? { ...item, ...formData } : item
      )
    );
    setFormData({
        FullName: "",
        Email: "",
        Phone: "",
        OfficeNo: "",
      });
    setEditTenant(null);
  };

  return (
    <div className="px-6">
      <div className="flex flex-col gap-5 px-5 pb-5 border-1 border-[#E6E6E6] rounded-[8px]">
        <div className="p-[10px] border-b-1 border-[#E6E6E6]">
          <p className="text-xl font-semibold text-black">All Tenant</p>
        </div>
        <div className="flex justify-between pb-[10px]  border-b-1 border-[#E6E6E6]">
          <div className="flex gap-6">
            <div className="flex  items-center gap-[8px] px-[15px]  bg-white border-1 border-[#B0B0B0] rounded-[8px]">
              <Button  className=" bg-white hover:bg-white">
                <SearchIcon className="w-[15px] h-[15px] text-[#8A8A8A] font-bold" />{" "}
              </Button>
              <Input
                type="search"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search"
                className="bg-white text-[#8A8A8A] font-semibold"
                style={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#8A8A8A]">View:</span>
              <Select
                value={itemsPerPage.toString()}
                onValueChange={handleItemsPerPageChange}
              >
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="Per page" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={() => {
                  setOpen(!open)
                  setFormData({
                    FullName: "",
                    Email: "",
                    Phone: "",
                    OfficeNo: "",
                  });
                  ;
                }}
                variant="outline"
                className="bg-[#253D8A] p-[15px] hover:bg-[#253D8A] text-white hover:text-white"
              >
                <span>+</span> Add Tenant
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px]">
              <DialogHeader>
                <DialogTitle className="text-center">
                  Add New Tenant
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col  gap-6 py-4">
                <div className="flex gap-[50px] items-center ">
                  <div className="flex flex-col gap-[15px] w-full">
                    <p className="text-[#333333] text-sm font-semibold">
                      FullName <span className="text-[#FF3B30]">*</span>
                    </p>
                    <Input
                      type="name"
                      name="FullName"
                      value={formData.FullName}
                      onChange={handleChange}
                      placeholder="fullname "
                      className="bg-white w-full text-[#B0B0B0]  font-semibold"
                      style={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-[15px] w-full">
                  <p className="text-[#333333] text-sm font-semibold">
                      Email <span className="text-[#FF3B30]">*</span>
                    </p>
                    <Input
                      type="email"
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      placeholder="email"
                      className="bg-white w-full text-[#B0B0B0]  font-semibold"
                      style={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="flex gap-[50px] items-center ">
                  <div className="flex flex-col gap-[15px] w-full">
                  <p className="text-[#333333] text-sm font-semibold">
                      Phone <span className="text-[#FF3B30]">*</span>
                    </p>
                    <Input
                      name="Phone"
                      value={formData.Phone}
                      onChange={handleChange}
                      placeholder="+251.. "
                      className="bg-white w-full text-[#B0B0B0]  font-semibold"
                      style={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-[15px] w-full">
                  <p className="text-[#333333] text-sm font-semibold">
                      OfficeNo <span className="text-[#FF3B30]">*</span>
                    </p>
                    <Input
                      name="OfficeNo"
                      value={formData.OfficeNo}
                      onChange={handleChange}
                      placeholder="004 "
                      className="bg-white w-full text-[#B0B0B0]  font-semibold"
                      style={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={handleAdd}
                    variant="outline"
                    className="bg-[#253D8A] p-[15px] hover:bg-[#253D8A] text-white hover:text-white"
                  >
                    <span>+</span>Add New Tenant
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="px-[10px] border border-[#E6E6E6] rounded-tl-[5px] rounded-tr-[5px] bg-[#E9ECF3]">
              <TableHead className="text-center text-sm font-semibold text-black">
                Full Name
              </TableHead>
              <TableHead className="text-center text-sm font-semibold text-black">
                Email
              </TableHead>
              <TableHead className="text-center text-sm font-semibold text-black">
                Phone
              </TableHead>
              <TableHead className="text-center text-sm font-semibold text-black">
                Office No
              </TableHead>
              <TableHead className="text-center text-sm font-semibold text-black">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((item) => (
              <TableRow
                key={item.id}
                className="border-l-1 border-r-1 border-b-1 border-[#E6E6E6] p-[10px]"
              >
                <TableCell className="text-center text-xs text-[#8A8A8A]  ">
                  {item.FullName}
                </TableCell>
                <TableCell className="text-center text-xs text-[#8A8A8A]  ">
                  {item.Email}
                </TableCell>
                <TableCell className="text-center text-xs text-[#8A8A8A]  ">
                  {item.Phone}
                </TableCell>
                <TableCell className="text-center text-xs text-[#8A8A8A]  ">
                  {item.OfficeNo}
                </TableCell>
                <TableCell className="flex justify-center gap-[30px]">
                    <Link href={`/manage-tenant/${item.id}`}>  <Button
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
                  </Button></Link>
                
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        onClick={() => {
                          handleEdit(item);
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
                    {editTenant && (
                      <DialogContent className="bg-white sm:max-w-[700px]">
                        <DialogHeader>
                          <DialogTitle className="text-center">
                            Edit Tenant
                          </DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-col gap-6 py-4">
                          <div className="flex gap-6">
                            <div className="flex flex-col w-full">
                              <p>
                                FullName <span className="text-red-500">*</span>
                              </p>
                              <Input
                                type="name"
                                name="FullName"
                                value={formData.FullName}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex flex-col w-full">
                              <p>
                                Email <span className="text-red-500">*</span>
                              </p>
                              <Input
                                type="email"
                                name="Email"
                                value={formData.Email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="flex gap-6">
                            <div className="flex flex-col w-full">
                              <p>
                                PhoneNo <span className="text-red-500">*</span>
                              </p>
                              <Input
                                name="Phone"
                                value={formData.Phone}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex flex-col w-full">
                              <p>
                                OfficeNo <span className="text-red-500">*</span>
                              </p>
                              <Input
                                name="OfficeNo"
                                value={formData.OfficeNo}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <Button
                              onClick={handleUpdate}
                              className="bg-blue-600 text-white"
                            >
                              Update
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    )}
                  </Dialog>
                  <button
                    onClick={() =>
                      setTenantData(tenantData.filter((o) => o.id !== item.id))
                    }
                  >
                    <Image
                      src="/icons/delete.svg"
                      alt="delete"
                      width={25}
                      height={25}
                    />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-[#8A8A8A]">
            Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} entries
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => handlePageChange(page)}
                className={`${currentPage === page ? "bg-[#253D8A] text-white" : "bg-white text-[#8A8A8A]"}`}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTenant;