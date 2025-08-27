import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <h1>something went wrong</h1>,
        children: [
            {
                path: "books",
                element: <h1>books</h1>
            },
            {
                path: "create-book",
                element: <h1>Add books</h1>
            },
            {
                path: "borrow-summary",
                element: <h1>summary books</h1>
            },
        ]
    },
]);
