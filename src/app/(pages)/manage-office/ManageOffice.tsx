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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

import { useState } from "react";
import TableData from "./TableData";


interface Office {
  id: string;
  OfficeNO: string;
  Area: string;
  Floor: string;
  Status: string;
}
const ManageOffice = () => {
  const [tableData, setTableData] = useState(TableData);
  const [filteredResults, setFilteredResults] = useState<Office[]>([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [editOffice, setEditOffice] = useState<Office | null>(null);
  const [formData, setFormData] = useState({
    OfficeNO: "",
    Area: "",
    Floor: "",
    Status: "",
  });
  const [open, setOpen] = useState(false);

  // Calculate pagination
  const totalItems = search ? filteredResults.length : tableData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = (search ? filteredResults : tableData).slice(startIndex, endIndex);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    
    if (!searchValue.trim()) {
      setFilteredResults(tableData);
      return;
    }

    const results = tableData.filter((item) =>
      item.OfficeNO.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredResults(results);
  };

  const handleEditClick = (office: Office) => {
    setEditOffice(office);
    setFormData(office);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("form data is", formData);
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, Status: value });
  };

  const handleUpdate = () => {
    setTableData((prev) =>
      prev.map((item) =>
        item.id === editOffice?.id ? { ...item, ...formData } : item
      )
    );

    setEditOffice(null);
  };
  const handleAdd = () => {
    if (
      !formData.OfficeNO ||
      !formData.Area ||
      !formData.Floor ||
      !formData.Status
    ) {
      alert("Please fill in all fields before adding an office.");
      return;
    }

    setTableData((prev) => [
      ...prev,
      { id: Date.now().toString(), ...formData },
    ]);

    setFormData({ OfficeNO: "", Area: "", Floor: "", Status: "" });
    setOpen(false);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  return (
    <div className="px-6">
      <div className="flex flex-col gap-5 px-5 pb-5 border-1 border-[#E6E6E6] rounded-[8px]">
        <div className="p-[10px] border-b-1 border-[#E6E6E6]">
          <p className="text-xl font-semibold text-black">All office</p>
        </div>
        <div className="flex justify-between pb-[10px]  border-b-1 border-[#E6E6E6]">
          <div className="flex gap-6">
            <div className="flex  items-center gap-[8px] px-[15px]  bg-white border-1 border-[#B0B0B0] rounded-[8px]">
              <Button className=" bg-white hover:bg-white">
                <SearchIcon className="w-[15px] h-[15px] text-[#8A8A8A] font-bold" />{" "}
              </Button>
              <Input
                type="search"
                placeholder="Search"
                className="bg-white text-[#8A8A8A] font-semibold"
                style={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                }}
                value={search}
                onChange={handleSearchChange}
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
                  setOpen(!open);
                }}
                variant="outline"
                className="bg-[#253D8A] p-[15px] hover:bg-[#253D8A] text-white hover:text-white"
              >
                <span>+</span> Add New Office
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px]">
              <DialogHeader>
                <DialogTitle className="text-center">
                  Add New Office
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col  gap-6 py-4">
                <div className="flex gap-[50px] items-center ">
                  <div className="flex flex-col gap-[15px] w-full">
                    <p className="text-[#333333] text-sm font-semibold">
                      Office No <span className="text-[#FF3B30]">*</span>
                    </p>
                    <Input
                      name="OfficeNO"
                      value={formData.OfficeNO}
                      onChange={handleChange}
                      placeholder="Office No "
                      className="bg-white w-full text-[#B0B0B0]  font-semibold"
                      style={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-[15px] w-full">
                    <p className="text-[#333333] text-sm font-semibold">
                      Area <span className="text-[#FF3B30]">*</span>
                    </p>
                    <Input
                      name="Area"
                      value={formData.Area}
                      onChange={handleChange}
                      placeholder="5 * 4 "
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
                      Floor No <span className="text-[#FF3B30]">*</span>
                    </p>
                    <Input
                      name="Floor"
                      value={formData.Floor}
                      onChange={handleChange}
                      placeholder="3 "
                      className="bg-white w-full text-[#B0B0B0]  font-semibold"
                      style={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-[15px] w-full">
                    <p className="text-[#333333] text-sm font-semibold">
                      Status <span className="text-[#FF3B30]">*</span>
                    </p>
                    <Select
                      defaultValue={formData.Status}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent className="w-fit">
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="available">Available</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={handleAdd}
                    variant="outline"
                    className="bg-[#253D8A] p-[15px] hover:bg-[#253D8A] text-white hover:text-white"
                  >
                    <span>+</span>Add New Office
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="px-[10px] border-1 border-[#E6E6E6] rounded-tl-[5px] rounded-tr-[5px] bg-[#E9ECF3]">
              <TableHead className="text-center text-sm font-semibold text-black ">
                Office No
              </TableHead>
              <TableHead className="text-center text-sm font-semibold text-black ">
                Area
              </TableHead>
              <TableHead className="text-center text-sm font-semibold text-black ">
                Floor
              </TableHead>
              <TableHead className="text-center text-sm font-semibold text-black ">
                Status
              </TableHead>
              <TableHead className="text-center text-sm font-semibold text-black ">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((items, index) => (
              <TableRow
                key={index}
                className="border-l-1 border-r-1 border-b-1 border-[#E6E6E6] p-[10px]"
              >
                <TableCell className="text-center text-xs text-[#8A8A8A]  ">
                  {items.OfficeNO}
                </TableCell>
                <TableCell className="text-center text-xs text-[#8A8A8A]  ">
                  {items.Area}
                </TableCell>
                <TableCell className="text-center text-xs text-[#8A8A8A]  ">
                  {items.Floor}
                </TableCell>
                <TableCell className="text-center text-xs text-[#8A8A8A]  ">
                  {items.Status}
                </TableCell>
                <TableCell className="flex justify-center gap-[30px]">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button onClick={() => handleEditClick(items)}>
                        <Image
                          src="/icons/edit.svg"
                          alt="edit"
                          width={25}
                          height={25}
                        />
                      </button>
                    </DialogTrigger>
                    {editOffice && (
                      <DialogContent className="bg-white sm:max-w-[700px]">
                        <DialogHeader>
                          <DialogTitle className="text-center">
                            Edit Office
                          </DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-col gap-6 py-4">
                          <div className="flex gap-6">
                            <div className="flex flex-col w-full">
                              <p className="text-sm font-semibold">
                                Office No{" "}
                                <span className="text-red-500">*</span>
                              </p>
                              <Input
                                name="OfficeNO"
                                value={formData.OfficeNO}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex flex-col w-full">
                              <p className="text-sm font-semibold">
                                Area <span className="text-red-500">*</span>
                              </p>
                              <Input
                                name="Area"
                                value={formData.Area}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="flex gap-6">
                            <div className="flex flex-col w-full">
                              <p className="text-sm font-semibold">
                                Floor No <span className="text-red-500">*</span>
                              </p>
                              <Input
                                name="Floor"
                                value={formData.Floor}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex flex-col w-full">
                              <p className="text-sm font-semibold">
                                Status <span className="text-red-500">*</span>
                              </p>
                              <Select
                                defaultValue={formData.Status}
                                onValueChange={handleSelectChange}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Available">
                                    Available
                                  </SelectItem>
                                  <SelectItem value="Occupied">
                                    Occupied
                                  </SelectItem>
                                </SelectContent>
                              </Select>
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
                      setTableData(tableData.filter((o) => o.id !== items.id))
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

export default ManageOffice;
