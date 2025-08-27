import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="w-11/12 mx-auto">
                <Outlet />
            </div>
        </div>
    )
}
