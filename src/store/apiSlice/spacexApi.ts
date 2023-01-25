import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spacexApi = createApi({
  reducerPath: "spacexApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spacexdata.com/v3/launches`,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: ["Launches"],
  endpoints: (builder) => ({
    launches: builder.query<any, void>({
      query: () => "/",
      providesTags: ["Launches"],
    }),
  }),
});

export const { useLaunchesQuery } = spacexApi;
