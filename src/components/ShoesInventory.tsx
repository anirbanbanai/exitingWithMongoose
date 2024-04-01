type TShoes = {
  _id: string;
  brand: string;
  model: string;
  color: string;
  name: string;
  price: number;
  releaseDate: string;
  style: string;
  size: string;
  role: string;
  quantity: number
};

import { Spinner } from "@material-tailwind/react";
import { useShoesGetQuery } from "../redux/features/shoes/shoesApi";
import Inventory from "./Inventory";
const ShoesInventory = () => {
  const { data: TShoes, isLoading } = useShoesGetQuery("");

  if (isLoading)
    return (
      <div className="text-center flex justify-center">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  return (
    <>
      <div className="gap-4 border-2 grid sm:grid-cols-2 md:grid-cols-3  mx-auto">
        {TShoes?.data?.map((m: TShoes) => (
          <Inventory m={m} key={m._id}></Inventory>
        ))}
      </div>
    </>
  );
};

export default ShoesInventory;
