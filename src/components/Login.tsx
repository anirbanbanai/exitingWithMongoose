import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import toast from "react-hot-toast";
type Inputs = {
  username: string;
  password: string;  
};
export function Login() {
  const router  = useNavigate()
    const disPatch = useAppDispatch()
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>({
    defaultValues: {
        username: "john_doe",
        password: "123456"
    }
  });

  const [login] = useLoginMutation();

  
  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    const userInfo = {
        username: data.username,
        password: data.password,
    }
   const res = await login(userInfo).unwrap();
   const user = verifyToken(res.data.token)
   if(user){
    toast.success("Login successful")
    setTimeout(() => {
      router("/");
      window.location.reload();
    }, 1500);
   }
   disPatch(setUser({user: user, token: res.data.token }))
  }

  return (
    <Card
      className="m-5 p-5 bg-blue-gray-50"
      placeholder={""}
      color="transparent"
      shadow={false}
    >
      <h2 className="text-4xl font-semibold text-black text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            username
          </Typography>
          <Input  {...register("username")}
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
          <Input type="password" {...register("password")}
            crossOrigin={""}
            size="lg"
            placeholder="name@mail.com"
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
          Already have an Accunt? <Link to="/register">Register</Link>
        </h2>
      </form>
    </Card>
  );
}
