import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Register } from "../components/Register";
import { Login } from "../components/Login";
import ProtectedLayout from "../components/ProtectedLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedLayout>
        <App />
      </ProtectedLayout>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  
  }
]);
