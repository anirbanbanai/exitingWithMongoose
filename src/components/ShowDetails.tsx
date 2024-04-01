import { useParams } from "react-router-dom";

import { useShoesSingleGetQuery } from "../redux/features/shoes/shoesApi";
import { Button, Input } from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
type Inputs = {
    _id: string;
    name: string;
    price: number;
    brand: string;
    model: string;
    style: string;
    size: string;
    color: string;
    releaseDate: string;
    role: string,
    quantity:number
  };
const ShowDetails = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const {
    data: TShoes,
    isLoading,
    isError,
  } = useShoesSingleGetQuery({ _id: id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching shoe data</div>;
  }

  if (!TShoes) {
    return <div>Shoe not found</div>;
  }
  console.log(TShoes.data);
  const { name, price, brand, model } = TShoes.data;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      name: name,
      price: price,
      brand: brand,
      model: model,
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const updatedData = { id: id, ...data };
   
    const ddd =  await axios.put(`https://l2assign5.vercel.app/api/auth/tshoes/update/${id}`, updatedData)
    console.log(ddd);
    toast.success("Data updated successfully!");
   
  };
  return (
    <div className="m-5 p-5 border-2 rounded-xl">
        <h2 className="text-3xl font-semibold text-center mb-4">Update</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 md:grid grid-cols-2 gap-4">
          <label htmlFor="">
            <h2 className="font-semibold">Name</h2>
            <Input
              {...register("name")}
              size="lg"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </label>
          <label htmlFor="">
            <h2 className="font-semibold">Price</h2>
            <Input
              {...register("price")}
              size="lg"
              placeholder="price"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </label>
          <label htmlFor="">
            <h2 className="font-semibold">Brand</h2>
            <Input
              {...register("brand")}
              size="lg"
              placeholder="brand"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </label>
          <label htmlFor="">
            <h2 className="font-semibold">Model</h2>
            <Input
              {...register("model")}
              size="lg"
              placeholder="model"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </label>
          <label htmlFor="">
            <h2 className="font-semibold">Style</h2>
            <Input
              {...register("style")}
              size="lg"
              placeholder="style"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </label>
          <label htmlFor="">
            <h2 className="font-semibold">Size</h2>
            <Input
              {...register("size")}
              size="lg"
              placeholder="size"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </label>
          <label htmlFor="">
            <h2 className="font-semibold">Color</h2>
            <Input
              {...register("color")}
              size="lg"
              placeholder="color"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </label>
          <label htmlFor="">
            <h2 className="font-semibold">Role</h2>
            <Input
              {...register("role")}
              size="lg"
              placeholder="rlease date"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </label>
          <label htmlFor="">
            <h2 className="font-semibold">Quantity</h2>
            <Input
              {...register("quantity")}
              size="lg"
              placeholder="rlease date"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </label>
          <label htmlFor="">
            <h2 className="font-semibold">ReleaseDate</h2>
            <Input
              {...register("releaseDate")}
              size="lg"
              placeholder="rlease date"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </label>
        </div>

        <Button
          type="submit"
          placeholder={""}
          className="mt-6 bg-yellow-500 text-black"
          fullWidth
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default ShowDetails;
