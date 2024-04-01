import { baseApi } from "../../api/baseApi";

const shoesApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    shoesDelete: builder.mutation({
      query: (data) => ({
        url: `/auth/tshoes/${data._id}`,
        method: "DELETE",
      }),
    }),

    shoesUpdate: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/auth/tshoes/update/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    shoesGet: builder.query({
      query: () => ({
        url: "/auth/tshoes",
        method: "GET",
      }),
    }),
    shoesSingleGet: builder.query({
      query: (data) => ({
        url: `/auth/tshoes/${data._id}`,
        method: "GET",
      }),
    }),
    shoesFilterGet: builder.query({
      query: () => ({
        url: "/auth/tshoesf",
        method: "GET",
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/auth/register",
        method: "GET",
      }),
    }),
  
    addSHoes: builder.mutation({
      query: (data) => ({
        url: "/auth/tshoes",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useShoesDeleteMutation,
  useAddSHoesMutation,
  useShoesGetQuery,
  useShoesUpdateMutation,
  useShoesFilterGetQuery,
  useShoesSingleGetQuery,
  useGetUserQuery
} = shoesApi;
