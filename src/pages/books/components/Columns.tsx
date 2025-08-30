
import { type ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Edit, LoaderCircle, Trash } from "lucide-react";
import { useDeleteBookMutation } from "@/redux/api/features/bookApi";
import UpdateBookModal from "./UpdateBookModal";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type IBook = {
    _id: string;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    description: string;
    copies: number;
    available: boolean;
    createdAt: string;
    updatedAt: string;
}



export const columns: ColumnDef<IBook>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "author",
        header: "Author",
    },
    {
        accessorKey: "genre",
        header: "Genre",
    },
    {
        accessorKey: "isbn",
        header: "ISBN",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "copies",
        header: "Copies",
    },
    {
        accessorKey: "available",
        header: "Available",
    },
    {
        id: "update",
        header: "Update",
        cell: ({ row }) => {

            const book = row.original as IBook

            return (
                <div>
                    <UpdateBookModal book={book} />
                </div>
            )
        },
    },
    {
        id: "delete",
        header: "Delete",
        cell: ({ row }) => {
            const [deleteBook, { isLoading }] = useDeleteBookMutation()
            const book = row.original as IBook

            return (
                <div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteBook(book._id)}
                    >
                        {isLoading ?
                            <LoaderCircle className="animate-spin text-red-500" /> :
                            < Trash className="text-red-500" />}
                    </Button>
                </div>
            )
        },
    },
    {
        id: "borrow",
        header: "Borrow",
        cell: ({ row }) => {
            const book = row.original as IBook
            const navigate = useNavigate()

            return (
                <div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/edit-book/${book._id}`)}
                        className="text-green-500"
                    >Borrow
                    </Button>
                </div>
            )
        },
    },
]