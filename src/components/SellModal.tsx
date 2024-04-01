import React from "react";
import {
  Button,
  Card,
  CardBody,
  Dialog,
  Input,
} from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddSaleHMutation } from "../redux/features/saleHistory/saleHApi";

type Inputs = {
  _id: string;
  ProductId: string;
  quantity: number;
  buyerNaame: string;
};

type Tsh = {
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
  main: Tsh;
};

export function SellModal(main: Dd) {
  const { _id } = main.main;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [addSaleH] = useAddSaleHMutation();

  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      ProductId: _id,
      quantity: 5,
      buyerNaame: "name",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
     await addSaleH(data);
    //   console.log(addd.data.success);
    toast.success(`Sell successfull`);
    handleClose();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };
  return (
    <>
      <Button className="mx-auto" placeholder={""} onClick={handleOpen}>
        <h2 className="">Buy</h2>
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
            <h1 className="text-4xl font-semibold text-center mb-3">Sell</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-1 md:grid grid-cols-2 gap-4">
                <label htmlFor="">
                  <h2 className="font-semibold">ProductId</h2>
                  <Input
                    {...register("ProductId")}
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
                  <h2 className="font-semibold">Quantity</h2>
                  <Input
                    {...register("quantity")}
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
                  <h2 className="font-semibold">BuyerName</h2>
                  <Input
                    {...register("buyerNaame")}
                    size="lg"
                    placeholder="price"
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
              <Button
                onClick={handleClose}
                placeholder={""}
                className="mt-3 bg-red-500 text-white"
                fullWidth
              >
                Close
              </Button>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
