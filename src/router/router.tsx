import App from "@/App";
import AboutProject from "@/pages/aboutProject/AboutProject";
import AddBook from "@/pages/add-book/AddBook";
import BookDetails from "@/pages/bookDetails/BookDetails";
import Books from "@/pages/books/Books";
import Borrow from "@/pages/borrow/Borrow";
import BookSummary from "@/pages/borrowSummary/BorrowSummary";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "books",
                element: <Books />
            },
            {
                path: "books/:id",
                element: <BookDetails />
            },
            {
                path: "create-book",
                element: <AddBook />
            },
            {
                path: "borrow/:bookId",
                element: <Borrow />
            },
            {
                path: "borrow-summary",
                element: <BookSummary />
            },
            {
                path: "about",
                element: <AboutProject />
            },
        ]
    },
]);
