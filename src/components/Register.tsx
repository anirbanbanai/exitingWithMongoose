import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
type Inputs = {
  username: string;
  email: string;
  password: string;
  role: string;
};
export function Register() {
  const router = useNavigate();

  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      username: "john_doe",
      email: "ani@gmail.com",
      password: "123456",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
   const ddd =  axios
      .post("https://l2assign5.vercel.app/api/auth/register", data)
      .then((response: AxiosResponse) => {
        if (response.data.success === true) {
          toast.success("User register successful");
          setTimeout(() => {
            router("/");
            window.location.reload();
          }, 1500);
        }
        console.log("Response:", response.data);
      })
      .catch((error: AxiosError) => {
        console.error("Error:", error);
      });
      console.log(ddd);
  };

  return (
    <Card
      className="m-5 p-5 bg-blue-gray-50"
      placeholder={""}
      color="transparent"
      shadow={false}
    >
      <h2 className="text-4xl font-semibold text-black text-center">
        Register
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <select
            className="border-2 mx-3 p-3  rounded-xl"
            {...register("role")}
          >
            <option>Select role</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>

          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Your Name
          </Typography>
          <Input
            {...register("username")}
            crossOrigin={""}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Your Email
          </Typography>
          <Input
            {...register("email")}
            crossOrigin={""}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Password
          </Typography>
          <Input
            {...register("password")}
            crossOrigin={""}
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button type="submit" placeholder={""} className="mt-6" fullWidth>
          sign up
        </Button>
        <h2>
          Already have an Accunt? <Link to="/login">Login</Link>
        </h2>
      </form>
    </Card>
  );
}
