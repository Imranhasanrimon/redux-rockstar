import type { AddBookRequest, AddBookResponse, Book, BookListResponse, BookResponse, DeleteBookResponse, EditBookRequest } from "@/redux/types";
import { baseApi } from "./baseApi";

export const bookApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query<BookListResponse, void>({
            query: () => "books",
            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map((book: Book) => ({ type: "Books" as const, id: book._id })),
                        { type: "Books" as const, id: "LIST" },
                    ]
                    : [{ type: "Books" as const, id: "LIST" }],
        }),

        getBook: builder.query<BookResponse, string>({
            query: (id) => `books/${id}`,
            providesTags: (_result, _error, id) => [{ type: "Books", id }],
        }),

        addBook: builder.mutation<AddBookResponse, AddBookRequest>({
            query: (body) => ({
                url: "books",
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Books", id: "LIST" }],
        }),

        deleteBook: builder.mutation<DeleteBookResponse, string>({
            query: (id: string) => ({
                url: `books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (_result, _error, id) => [{ type: "Books", id }, { type: "Borrow", id: "LIST" },],
        }),

        editBook: builder.mutation<BookResponse, EditBookRequest>({
            query: (data: { _id: string; body: any }) => ({
                url: `books/${data._id}`,
                method: "PUT",
                body: data.body,
            }),
            invalidatesTags: (_result, _error, { _id }) => [{ type: "Books", id: _id }],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetBookQuery,
    useAddBookMutation,
    useDeleteBookMutation,
    useEditBookMutation,
} = bookApi;
