import type { BorrowRequest, BorrowResponse, BorrowSummaryResponse } from "@/redux/types";
import { baseApi } from "./baseApi";

export const borrowApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        borrowSummary: builder.query<BorrowSummaryResponse, void>({
            query: () => "borrow",
            providesTags: (result) =>
                result?.data
                    ? [
                        ...result.data.map((item: any) => ({ type: "Borrow" as const, id: item.book._id })),
                        { type: "Borrow" as const, id: "LIST" },
                    ]
                    : [{ type: "Borrow" as const, id: "LIST" }],
        }),

        borrowABook: builder.mutation<BorrowResponse, BorrowRequest>({
            query: (body) => ({
                url: "borrow",
                method: "POST",
                body,
            }),
            invalidatesTags: (_result, _error, body) => [
                { type: "Borrow", id: "LIST" },
                { type: "Books", id: body.book },
                { type: "Books", id: "LIST" },
            ],
        }),
    }),
});

export const { useBorrowSummaryQuery, useBorrowABookMutation } = borrowApi;
