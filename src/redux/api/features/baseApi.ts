import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-cyan-pi.vercel.app/api/" }),
    tagTypes: ["Books", "Borrow"], // shared tagTypes
    endpoints: () => ({}),
});
