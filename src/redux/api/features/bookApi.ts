import { baseApi } from "./baseApi";

export const bookApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "books",
            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map((book: any) => ({ type: "Books", id: book._id })),
                        { type: "Books", id: "LIST" },
                    ]
                    : [{ type: "Books", id: "LIST" }],
        }),

        getBook: builder.query({
            query: (id) => `books/${id}`,
            providesTags: (_result, _error, id) => [{ type: "Books", id }],
        }),

        addBook: builder.mutation({
            query: (body) => ({
                url: "books",
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Books", id: "LIST" }],
        }),

        deleteBook: builder.mutation({
            query: (id: string) => ({
                url: `books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (_result, _error, id) => [{ type: "Books", id }, { type: "Borrow", id: "LIST" },],
        }),

        editBook: builder.mutation({
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
