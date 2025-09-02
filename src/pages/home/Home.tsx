import { useGetBooksQuery } from "@/redux/api/features/bookApi";
import Banner from "./components/Banner";
import BookCard from "./components/BookCard";
import type { IBook } from "../books/components/Columns";
import { LoaderCircle } from "lucide-react";
import BookSummary from "../borrowSummary/BorrowSummary";
import AboutProject from "../aboutProject/AboutProject";

export default function Home() {
    const { data, isLoading } = useGetBooksQuery(undefined)

    return (
        <div>
            <Banner />
            <div>
                <h2 className="text-center text-3xl font-semibold mt-10">Books</h2>
                <p className="text-center">Explore all books and choose the best one.</p>
                {
                    isLoading ?
                        <div className="flex justify-center  my-10">
                            <LoaderCircle className="animate-spin" size={70} />
                        </div>
                        :
                        <div className="max-w-7xl mx-auto w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                            {
                                data.data.map((book: IBook) => <BookCard key={book._id} book={book} />)
                            }
                        </div>
                }
            </div>

            <div>
                <BookSummary />
            </div>

            <AboutProject />
        </div>
    )
}
