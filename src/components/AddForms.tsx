import { Input, Button } from "@material-tailwind/react";
// import axios, { AxiosError, AxiosResponse } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
// import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addShoes, resetShoes } from "../redux/features/shoes/shoeSlice";
// import { useAddSHoesMutation } from "../redux/features/shoes/shoesApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { useAddSHoesMutation } from "../redux/features/shoes/shoesApi";
import axios from "axios";
import { useCurrentToken } from "../redux/features/auth/authSlice";
type Inputs = {
  name: string;
  price: number;
  brand: string;
  model: string;
  style: string;
  size: string;
  color: string;
  releaseDate: string;
  role?: string;
  quantity: number;
};
type subData = {
  acknowledged: boolean;
  deletedCount: number;
};

type DTD = {
  data: subData;
  message: string;
  statusCode: number;
  success: boolean;
};

type DDD = {
  data: DTD;
};

type MTMM = {
  data: boolean;
  message: string;
};

type MTM = {
  data: MTMM;
};

export type Em = {
  error: MTM;
};
export function AddForm() {
  const token = useAppSelector(useCurrentToken);
  const navigate = useNavigate();
  const disPatch = useAppDispatch();
  const { shoes } = useAppSelector((state) => state.shoes);
  // const [addSHoes] = useAddSHoesMutation();
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      name: "name",
      price: 23,
      brand: "brandname",
      model: "x1",
      style: "lether",
      size: "xxl",
      color: "yellow",
      releaseDate: `${new Date()}`,
      role: "nosell",
      quantity: 5,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    disPatch(addShoes(data));
    toast.success("Saved Data");
    // console.log(data);
  };

  const handleData = async () => {
    const headers = {
      Authorization: token,
    };
    // const da = await addSHoes(shoes);
  
    
    // console.log(da.response);

    try {
      const da = await axios.post(
        "http://localhost:5000/api/auth/tshoes",
        shoes,
        {
          headers: headers,
        }
      );
      if ((da as DDD).data.success === true) {
        disPatch(resetShoes());
        toast.success((da as DDD).data.message);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Added inventory",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 1500);
      }

    } catch (error) {
      toast.error("You are not Authorized");
    }
  };

  return (
    <div className=" mx-auto border-2 rounded-2xl p-4 w-3/4">
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
      <Button
        onClick={handleData}
        type="submit"
        placeholder={""}
        className="mt-6 bg-blue-700 text-white"
        fullWidth
      >
        Add Inventory
      </Button>
    </div>
  );
}
