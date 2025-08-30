import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
    reducerPath: 'bookApi',
    tagTypes: ["books"],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://library-management-cyan-pi.vercel.app/api/' }),
    endpoints: (build) => ({
        getBooks: build.query({
            query: () => "books",
            providesTags: ["books"]
        }),
        addBook: build.mutation({
            query: (body) => ({
                url: "books",
                method: 'POST',
                body,
            }),
            invalidatesTags: ['books']
        }),
        deleteBook: build.mutation({
            query: (id) => ({
                url: `books/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["books"]
        }),
        editBook: build.mutation({
            query: (data) => ({
                url: `books/${data._id}`,
                method: "PUT",
                body: data.body
            }),
            invalidatesTags: ["books"]
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery, useAddBookMutation, useDeleteBookMutation, useEditBookMutation } = bookApi