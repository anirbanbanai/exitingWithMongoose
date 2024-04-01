import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const MainRouting = () => {
    return (
        <div className="flex justify-between ">
            <Link to="/">Dashboard</Link>
            <Link to="/">Indevtory</Link>
            <Link to="/add">Add</Link>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainRouting;