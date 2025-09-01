import { baseApi } from "./baseApi";

export const borrowApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        borrowSummary: builder.query<any, void>({
            query: () => "borrow",
            providesTags: (result) =>
                result?.data
                    ? [
                        ...result.data.map((item: any) => ({ type: "Borrow" as const, id: item.book._id })),
                        { type: "Borrow" as const, id: "LIST" },
                    ]
                    : [{ type: "Borrow" as const, id: "LIST" }],
        }),

        borrowABook: builder.mutation<any, { book: string; dueDate: string | null; quantity: number }>({
            query: (body) => ({
                url: "borrow",
                method: "POST",
                body,
            }),
            invalidatesTags: (result, error, body) => [
                { type: "Borrow", id: "LIST" },
                { type: "Books", id: body.book },
                { type: "Books", id: "LIST" },
            ],
        }),
    }),
});

export const { useBorrowSummaryQuery, useBorrowABookMutation } = borrowApi;
