import AddBook from "@/pages/add-book/AddBook";
import Books from "@/pages/books/Books";
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
                element: <Books />
            },
            {
                path: "create-book",
                element: <AddBook />
            },
            {
                path: "borrow-summary",
                element: <h1>summary books</h1>
            },
        ]
    },
]);
