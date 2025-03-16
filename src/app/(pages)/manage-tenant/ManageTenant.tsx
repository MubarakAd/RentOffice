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


const ManageTenant = () => {
  return (
    <div className="px-6">
      <div className="flex flex-col gap-5 px-5 pb-5 border-1 border-[#E6E6E6] rounded-[8px]">
        <div className="p-[10px] border-b-1 border-[#E6E6E6]">
          <p className="text-xl font-semibold text-black">All Tenant</p>
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
              />
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                //   onClick={handleAdd}
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
                    <p className="text-[#333333] font-semibold">
                      FullName <span className="text-[#FF3B30]">*</span>
                    </p>
                    <Input
                      type="name"
                      name="FullName"
                      //  value={formData.OfficeNO}
                      //  onChange={handleChange}
                      placeholder="fullname "
                      className="bg-white w-full text-[#B0B0B0]  font-semibold"
                      style={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-[15px] w-full">
                    <p className="text-[#333333] font-semibold">
                      Email <span className="text-[#FF3B30]">*</span>
                    </p>
                    <Input
                      type="email"
                      name="Email"
                      //    value={formData.Area}
                      //    onChange={handleChange}
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
                    <p className="text-[#333333] font-semibold">
                      Phone <span className="text-[#FF3B30]">*</span>
                    </p>
                    <Input
                      name="Phone"
                      //    value={formData.Floor}
                      //    onChange={handleChange}
                      placeholder="+251.. "
                      className="bg-white w-full text-[#B0B0B0]  font-semibold"
                      style={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-[15px] w-full">
                    <p className="text-[#333333] font-semibold">
                      OfficeNo <span className="text-[#FF3B30]">*</span>
                    </p>
                    <Input
                      name="OfficeNo"
                      //    value={formData.Floor}
                      //    onChange={handleChange}
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
                    // onClick={() => {
                    //   setOpen(!open);
                    // }}
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
              <TableHead className="text-center font-semibold text-black">
                Full Name
              </TableHead>
              <TableHead className="text-center font-semibold text-black">
                Email
              </TableHead>
              <TableHead className="text-center font-semibold text-black">
                Phone
              </TableHead>
              <TableHead className="text-center font-semibold text-black">
                Office No
              </TableHead>
              <TableHead className="text-center font-semibold text-black">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TableData.map((item) => (
              <TableRow
                key={item.id}
                className="border-l-1 border-r-1 border-b-1 border-[#E6E6E6] p-[10px]"
              >
                <TableCell className="text-center text-sm text-[#8A8A8A] font-semibold ">
                  {item.FullName}
                </TableCell>
                <TableCell className="text-center text-sm text-[#8A8A8A] font-semibold ">
                  {item.Email}
                </TableCell>
                <TableCell className="text-center text-sm text-[#8A8A8A] font-semibold ">
                  {item.Phone}
                </TableCell>
                <TableCell className="text-center text-sm text-[#8A8A8A] font-semibold ">
                  {item.OfficeNo}
                </TableCell>
                <TableCell className="flex justify-center gap-[30px]">
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <button>
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
                              // value={formData.OfficeNO}
                              // onChange={handleChange}
                            />
                          </div>
                          <div className="flex flex-col w-full">
                            <p>
                              Email <span className="text-red-500">*</span>
                            </p>
                            <Input
                              type="email"
                              name="Email"
                              // value={formData.Area}
                              // onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <div className="flex flex-col w-full">
                            <p>
                              PhoneNo <span className="text-red-500">*</span>
                            </p>
                            <Input
                              name="Floor"
                              // value={formData.Floor}
                              // onChange={handleChange}
                            />
                          </div>
                          <div className="flex flex-col w-full">
                            <p>
                              OfficeNo <span className="text-red-500">*</span>
                            </p>
                            <Input
                              name="OfficeNo"
                              // value={formData.Area}
                              // onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button
                            //   onClick={handleUpdate}
                            className="bg-blue-600 text-white"
                          >
                            Update
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <button
                  // onClick={() =>
                  //   setTableData(tableData.filter((o) => o.id !== items.id))
                  // }
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
      </div>
    </div>
  );
};

export default ManageTenant;
