import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import {
  Square3Stack3DIcon,
  // ArrowPathRoundedSquareIcon,
  BuildingStorefrontIcon
} from "@heroicons/react/24/solid";
import { AddForm } from "./AddForms";

import { BookOpenIcon, PlusIcon } from "@heroicons/react/16/solid";
import Dashborad from "./Dashborad";

import FilterSh from "./FilterShoes";
import { HistoryTabs } from "./HistoryTabs";

export function Tabss() {
  const data = [
    {
      label: "Dashboard",
      value: "Dashboard",
      icon: Square3Stack3DIcon,
      desc: <FilterSh/>,
    },
    {
      label: "Inventory",
      value: "Inventory",
      icon: BuildingStorefrontIcon,
      desc: <Dashborad/>,
    },
   {

      label: "Add Shoes",
      value: "Add shoes",
      icon: PlusIcon,
      desc:  <AddForm/>,
    
   },
    {
      label: "History",
      value: "History",
      icon: BookOpenIcon,
      // desc: <SellHistory/> ,
      desc: <HistoryTabs/> , 
    },
  ];
  return (
    <Tabs value="Inventory">
      <TabsHeader placeholder={""}>
        {data?.map(({ label, value, icon }) => (
          <Tab placeholder={""} key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              <h2 className="hidden md:flex">{label}</h2>
              
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder={""}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}