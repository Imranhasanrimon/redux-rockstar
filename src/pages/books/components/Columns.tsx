
import { type ColumnDef } from "@tanstack/react-table"

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
]