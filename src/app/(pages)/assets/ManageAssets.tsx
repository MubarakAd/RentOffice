'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
import React from "react";
import { AssetsData } from "./AssetsData";
import Image from "next/image";
import Link from "next/link";

const ManageAssets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchAssets, setSearchAssets] = useState("");
  const [filteredResults, setFilteredResults] = useState(AssetsData);

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchAssets(searchValue);

    if (!searchValue.trim()) {
      setFilteredResults(AssetsData);
      return;
    }

    const results = AssetsData.filter((asset) =>
      asset.assetName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredResults(results);
  };

  // Calculate pagination
  const totalItems = searchAssets ? filteredResults.length : AssetsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = (searchAssets ? filteredResults : AssetsData).slice(
    startIndex,
    endIndex
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  return (
    <div className="px-6">
      <div className="flex flex-col gap-5 px-5 pb-5 border-1 border-[#E6E6E6] rounded-[8px]">
        <div className="p-[10px] border-b-1 border-[#E6E6E6]">
          <p className="text-xl font-semibold text-black">All Assets</p>
        </div>
        <div className="flex justify-between pb-[10px] border-b-1 border-[#E6E6E6]">
          <div className="flex gap-6">
            <div className="flex items-center gap-[8px] px-[15px] bg-white border-1 border-[#B0B0B0] rounded-[8px]">
              <Button className="bg-white hover:bg-white">
                <SearchIcon className="w-[15px] h-[15px] text-[#8A8A8A] font-bold" />
              </Button>
              <Input
                type="search"
                onChange={handleSearch}
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
        </div>
        <Table>
          <TableHeader>
            <TableRow className="px-[10px] border-1 border-[#E6E6E6] rounded-tl-[5px] rounded-tr-[5px] bg-[#E9ECF3]">
              <TableHead className="text-center text-sm font-semibold text-black">
                Asset Id
              </TableHead>
              <TableHead className="text-center text-sm font-semibold text-black">
                Asset Name
              </TableHead>
              <TableHead className="text-center text-sm font-semibold text-black">
                Category
              </TableHead>
              <TableHead className="text-center text-sm font-semibold text-black">
                Assigned To
              </TableHead>
              <TableHead className="text-center text-sm font-semibold text-black">
                Status
              </TableHead>
              <TableHead className="text-center text-sm font-semibold text-black">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((asset, index) => (
              <TableRow key={index} className="border-b-1 border-[#E6E6E6]">
                <TableCell className="text-center text-xs font-semibold text-[#8A8A8A]">
                  {asset.assetId}
                </TableCell>
                <TableCell className="text-center text-xs font-semibold text-[#8A8A8A]">
                  {asset.assetName}
                </TableCell>
                <TableCell className="text-center text-xs font-semibold text-[#8A8A8A]">
                  {asset.catagory}
                </TableCell>
                <TableCell className="text-center text-xs font-semibold text-[#8A8A8A]">
                  {asset.assignedTo}
                </TableCell>
                <TableCell className="text-center text-xs font-semibold text-[#8A8A8A]">
                  {asset.status}
                </TableCell>
                <TableCell className="flex justify-center gap-[30px]">
                  <Link href={`/assets/${asset.assetId}`}>
                    <Button
                      variant={"ghost"}
                      className="flex gap-[10px] rounded-[8px] px-[10px] border-1 border-[#00DC32] py-[5px]"
                    >
                      <Image
                        src={"/icons/eye.svg"}
                        alt="eye"
                        width={25}
                        height={25}
                      />
                      <span className="text-[#00DC32] text-sm">View</span>
                    </Button>
                  </Link>
                  <button>
                    <Image
                      src="/icons/edit.svg"
                      alt="edit"
                      width={25}
                      height={25}
                    />
                  </button>
                  <Button
                    variant={"ghost"}
                    className="flex gap-[10px] rounded-[8px] px-[10px] border-1 border-[#FF0000] py-[5px]"
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
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-[#8A8A8A]">
            Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
            {totalItems} entries
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
                className={`${
                  currentPage === page
                    ? "bg-[#253D8A] text-white"
                    : "bg-white text-[#8A8A8A]"
                }`}
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

export default ManageAssets;