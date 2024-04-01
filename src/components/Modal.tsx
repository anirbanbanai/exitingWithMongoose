import React from "react";
import {
  Button,
  Card,
  CardBody,
  Dialog,
  Input,
} from "@material-tailwind/react";
import { FcRefresh } from "react-icons/fc";
import { SubmitHandler, useForm } from "react-hook-form";
// import axios from "axios";
import toast from "react-hot-toast";
import { useShoesUpdateMutation } from "../redux/features/shoes/shoesApi";

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
  role: string;
  quantity: number;
};

type Dd = {
  main: Inputs;
};

export function Modal(m: Dd) {
  const {
    _id,
    name,
    price,
    brand,
    model,
    size,
    style,
    color,
    releaseDate,
    role,
    quantity,
  } = m.main;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [updateShoe] = useShoesUpdateMutation();

  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      name: name,
      price: price,
      brand: brand,
      model: model,
      style: style,
      size: size,
      color: color,
      releaseDate: releaseDate,
      role: role,
      quantity: quantity,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      const response = await updateShoe({ id: _id, ...data });
      console.log(response)
      toast.success(`Update successfull`);
      handleClose();
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error("Failed to update data.");
    }
  };

  return (
    <>
      <Button className="mx-auto" placeholder={""} onClick={handleOpen}>
        <FcRefresh className="text-2xl text-center mx-auto" />
      </Button>
      <Dialog
        placeholder={""}
        size="xxl"
        open={open}
        handler={handleClose}
        className="bg-transparent shadow-none "
      >
        <Card placeholder={""} className="">
          <CardBody placeholder={""} className="h-full overflow-y-auto">
            <h1 className="text-4xl font-semibold text-center mb-3">
              Update Data
            </h1>

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
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
