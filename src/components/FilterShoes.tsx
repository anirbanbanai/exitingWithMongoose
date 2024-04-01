// import { useEffect, useState } from "react";
// import axios from "axios";
import { Input } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SellModal } from "./SellModal";

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
};

type subData = {
  acknowledged: boolean;
  deletedCount: number;
};

type DTD = {
  map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    arg0: (shoe: any) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  data: subData;
  message: string;
  statusCode: number;
  success: boolean;
};

type DDD = {
  data: DTD;
};

type Inputs = {
  brand?: string;
  model?: string;
  color?: string;
  name?: string;
  price?: number;
  releaseDate?: string;
  style?: string;
  size?: string;
};
const FilterSh = () => {
  const [shoesData, setShoesData] = useState<TShoes[]>([]);
  const [message, setMessage] = useState<string>("");
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const queryParams = [];

    if (data.name) queryParams.push(`name=${data.name}`);
    if (data.price) queryParams.push(`price=${data.price}`);
    if (data.brand) queryParams.push(`brand=${data.brand}`);
    if (data.color) queryParams.push(`color=${data.color}`);
    if (data.model) queryParams.push(`model=${data.model}`);
    if (data.size) queryParams.push(`size=${data.size}`);

    const queryString = queryParams.join("&");

    const url = queryString
      ? `https://l2assign5.vercel.app/api/auth/tshoesf?${queryString}`
      : "https://l2assign5.vercel.app/api/auth/tshoesf?";
    const response = await axios.get(url);
    setShoesData(response.data);
    setMessage(
      response.data.data.length === 0 ? "No matched shoes found." : ""
    );
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-1 gap-2 grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 ">
            <label htmlFor="">
              <h2 className="font-semibold">Name</h2>
              <Input
                {...register("name")}
                size="lg"
                placeholder="rlease date"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin={""}
              />
            </label>
            <label htmlFor="">
              <h2 className="font-semibold">Price</h2>
              <Input
                {...register("price")}
                size="lg"
                placeholder="rlease date"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin={""}
              />
            </label>
            <label htmlFor="">
              <h2 className="font-semibold">Brand</h2>
              <Input
                {...register("brand")}
                size="lg"
                placeholder="rlease date"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin={""}
              />
            </label>
            <label htmlFor="">
              <h2 className="font-semibold">Model</h2>
              <Input
                {...register("model")}
                size="lg"
                placeholder="rlease date"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin={""}
              />
            </label>
            <label htmlFor="">
              <h2 className="font-semibold">Color</h2>
              <Input
                {...register("color")}
                size="lg"
                placeholder="rlease date"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin={""}
              />
            </label>
            <label htmlFor="">
              <h2 className="font-semibold">Size</h2>
              <Input
                {...register("size")}
                size="lg"
                placeholder="rlease date"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin={""}
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 px-3 py-2 rounded-xl text-black"
          >
            SearchName
          </button>
        </form>
      </div>
      <div className="gap-4 border-2 grid sm:grid-cols-2 md:grid-cols-3 mx-auto">
        {(shoesData as unknown as DDD)?.data?.map((shoe) => (
          <div
            className="gap-2 border-2 border-red-300 p-3 rounded-xl"
            key={shoe._id}
          >
            <div className="grid grid-cols-2 ">
              <p>
                Name: <b className="font-semibold">{shoe.name}</b>
              </p>
              <p>
                Brand: <b className="font-semibold">{shoe.brand}</b>
              </p>
              <p>
                Color: <b className="font-semibold">{shoe.color}</b>
              </p>
              <p>
                Model: <b className="font-semibold">{shoe.model}</b>
              </p>
              <p>
                Price: <b className="font-semibold">{shoe.price}</b>
              </p>
              <p>
                Size: <b className="font-semibold">{shoe.size}</b>
              </p>
              <p>
                Style: <b className="font-semibold">{shoe.style}</b>
              </p>
            </div>
            <SellModal  main={shoe}/>
          </div>
        ))}

        {message && (
          <div className="text-red-500 text-3xl font-semibold text-center mt-5 flex justify-center">
            <h2 className="text-center">{message}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterSh;
