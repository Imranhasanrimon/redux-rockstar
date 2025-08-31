import { Outlet } from "react-router-dom";
import Navbar from "./pages/home/components/Navbar";
import Footer from "./pages/home/components/Footer";

export default function App() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}