import { Button, Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, useCurrentToken } from "../redux/features/auth/authSlice";

export function NavbarDefault() {
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();
  const handleLoout = () => {
    dispatch(logout());
  };

  return (
    <Navbar
      placeholder={"h"}
      className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 bg-blue-gray-400"
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography placeholder={"pl"} className="text-3xl font-semibold">
          Shoes
        </Typography>
        <div>
          {!token && (
            <Link to="/login">
              <button className="bg-yellow-500 p-3 rounded-3xl">login</button>
            </Link>
          )}

          <Button onClick={handleLoout} placeholder={""} color="red" size="md">
            Logout
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
