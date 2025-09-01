
import { type ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { LoaderCircle, Trash } from "lucide-react";
import { useDeleteBookMutation } from "@/redux/api/features/bookApi";
import UpdateBookModal from "./UpdateBookModal";
import { toast } from "sonner";
import { formatDate } from "@/utils/formateDate";
import { cn } from "@/lib/utils";

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
        id: "available",
        header: "Available",
        cell: ({ row }) => {
            const book = row.original as IBook

            return (
                <span
                    className={cn(
                        "text-sm px-3 py-1 rounded-full",
                        book.available
                            ? "bg-green-500/20 text-green-600"
                            : "bg-red-500/20 text-red-600"
                    )}
                >
                    {book.available ? "Available" : "Unavailable"}
                </span>
            )
        },
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
            const [deleteBook, { isLoading, }] = useDeleteBookMutation()
            const book = row.original as IBook
            const handleDelete = async () => {
                try {
                    await deleteBook(book._id).unwrap() // unwrap waits for success/error
                    toast("Book has been deleted", {
                        description: formatDate(new Date().toISOString()),
                        action: {
                            label: "Close",
                            onClick: () => console.log("closed"),
                        },
                    })
                } catch (err) {
                    toast.error("Failed to delete book")
                    console.error(err)
                }
            }


            return (
                <div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleDelete}
                        disabled={isLoading}
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
                        onClick={() => navigate(`/borrow/${book._id}`)}
                        className="text-green-500"
                    >Borrow
                    </Button>
                </div>
            )
        },
    },
]