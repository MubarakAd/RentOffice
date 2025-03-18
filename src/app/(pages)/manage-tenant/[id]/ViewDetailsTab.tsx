
import {
  Card,
  CardContent,
 
} from "@/components/ui/card";


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RentalInformation from "./RentalInformation";
import PaymentHistory from "./PaymentHistory";
import MaintenanceRequest from "./MaintenanceRequest";

export function ViewDetailsTab() {
  return (
    <Tabs defaultValue="rental"  className="w-full  my-5">
      <TabsList className="flex w-fit border-b border-[#E6E6E6] px-5 pt-5 bg-transparent">
        <TabsTrigger
          value="rental"
          className=" text-[#333333] font-semibold shadow-none rounded-none border-b-2  border-transparent px-4 py-4 bg-white data-[state=active]:border-b-[#253D8A] data-[state=active]:font-medium data-[state=active]:text-[#253D8A]"
        >
          Rental Information
        </TabsTrigger>
        <TabsTrigger
          value="payment"
          className=" text-[#333333] font-semibold rounded-none  border-b-2  border-transparent px-4 py-4 bg-white data-[state=active]:border-b-[#253D8A]"
        >
          Payment history
        </TabsTrigger>
        <TabsTrigger
          value="maintenance"
          className="text-[#333333] font-semibold   rounded-none  border-b-2  border-transparent px-4 py-4 bg-white data-[state=active]:border-b-[#253D8A]"
        >
          Maintenance request
        </TabsTrigger>
      </TabsList>

      {/* Rental Information Content */}
      <TabsContent value="rental">
        <Card className=" lg:w-3/4 2xl:w-1/2 border-1 p-[10px] border-[#E9EBF3] rounded-md mt-5 shadow-[4px_2px_4px_#DFE5F9]">
          <CardContent className="p-6">
          <RentalInformation/>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Payment History Content */}
      <TabsContent value="payment">
        <Card className="w-full border-1  border-[#E9EBF3] mt-5 shadow-[4px_2px_4px_#DFE5F9]">
          <CardContent className="">
           <PaymentHistory/>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Maintenance Request Content */}
      <TabsContent value="maintenance">
      <Card className="w-full border-1  border-[#E9EBF3] mt-5 shadow-[4px_2px_4px_#DFE5F9]">
          <CardContent className="">
            <MaintenanceRequest/>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
