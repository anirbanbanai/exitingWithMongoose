import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import SellHistory from "./SellHistory";
  export function HistoryTabs() {
    const data = [
      {
        label: "Daily",
        value: "daily",
        desc: <SellHistory/>,
      },
      {
        label: "Weekly",
        value: "weekly",
        desc: <SellHistory/>,
      },
      {
        label: "Monthly",
        value: "monthly",
        desc: <SellHistory/>,
      },
      {
        label: "Yearly",
        value: "yearly",
        desc: <SellHistory/>,
      }
    ];
   
    return (
      <Tabs value="daily">
        <TabsHeader placeholder={""}>
          {data.map(({ label, value }) => (
            <Tab placeholder={""} key={value} value={value}>
              {label}
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