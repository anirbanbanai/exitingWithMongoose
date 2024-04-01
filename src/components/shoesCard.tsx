import {
    Card
  } from "@material-tailwind/react";
   
  export function ShoesCard({children}: {children: React.ReactNode}) {
    return (
      <Card placeholder={""} className="mt-6 w-96">
        
    {children}
    gg
      </Card>
    );
  }