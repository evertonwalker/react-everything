import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY =
  "live_4l1rvJMpK6xuxwDhN0C9LTBkF0f9kFkb7aKLw8cj1L2xkhntfYnB08hgVrEcyHy0";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const dogApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchBreeds: builder.query<Breed[], number | void>({
      query: (limit = 10) => `/breeds?limit=${limit}`,
    }),
  }),
});

export const { useFetchBreedsQuery } = dogApi;
